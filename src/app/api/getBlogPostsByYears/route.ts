import { NextResponse } from 'next/server';
import { getBlogPosts, getPageContent } from '@/lib/notion';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { isFullPage } from '@notionhq/client/build/src/helpers';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const anoParam = searchParams.get('ano');

  if (!anoParam) {
    return NextResponse.json(
      { error: 'Ano não informado. Use ?ano=2025 na URL.' },
      { status: 400 },
    );
  }

  const ano = parseInt(anoParam, 10);
  if (isNaN(ano)) {
    return NextResponse.json(
      { error: 'Ano inválido. Envie um número, ex: ?ano=2025' },
      { status: 400 },
    );
  }

  try {
    // Busca os posts filtrados por ano no Notion
    const posts = await getBlogPosts(ano);

    // Monta os posts com conteúdo
    const fullPosts = await Promise.all(
      posts
        .filter((post): post is PageObjectResponse => isFullPage(post))
        .map(async (post) => {
          const blocks = await getPageContent(post.id);
          const texto = blocks
            .filter(
              (block) => block.type === 'paragraph' && 'paragraph' in block,
            )
            .map((block) =>
              block.paragraph.rich_text.map((rt) => rt.plain_text).join(''),
            )
            .join('\n\n');

          const titulo =
            post.properties['Titulo']?.type === 'title'
              ? post.properties['Titulo'].title[0]?.plain_text
              : 'Sem título';

          const redator =
            post.properties['Redator']?.type === 'rich_text'
              ? post.properties['Redator'].rich_text[0]?.plain_text || ''
              : '';

          const data =
            post.properties['Data']?.type === 'date'
              ? post.properties['Data'].date?.start || ''
              : '';

          const categorias =
            post.properties['Categoria']?.type === 'multi_select'
              ? post.properties['Categoria'].multi_select.map(
                  (item) => item.name,
                )
              : [];

          let capa: string | undefined;

          if (
            post.properties['Capa']?.type === 'files' &&
            post.properties['Capa'].files.length > 0
          ) {
            const fileItem = post.properties['Capa'].files[0];

            if (fileItem.type === 'external') {
              capa = fileItem.external.url;
            } else if (fileItem.type === 'file') {
              capa = fileItem.file.url;
            }
          }

          return {
            id: post.id,
            titulo,
            categorias,
            data,
            capa,
            texto,
            redator,
          };
        }),
    );

    return NextResponse.json(fullPosts, { status: 200 });
  } catch (error) {
    console.error('Erro ao buscar posts do Notion:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar posts do Notion' },
      { status: 500 },
    );
  }
}
