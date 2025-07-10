/* export const revalidate = 30; */
/* export const dynamic = 'force-dynamic';

import BlogFilterClient from '@/components/BlogFilterClient/BlogFilterClient';
import FooterB from '@/components/FooterB/FooterB';
import MenuNav from '@/components/MenuNav/MenuNav';
import { getBlogPosts, getPageContent } from '@/lib/notion';
import { Box, Typography } from '@mui/material';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { isFullPage } from '@notionhq/client/build/src/helpers';

export default async function BlogPage() {
  const anoAtual = new Date().getFullYear();
  const posts = await getBlogPosts(anoAtual);

  const fullPosts = await Promise.all(
    posts
      .filter((post): post is PageObjectResponse => isFullPage(post))
      .map(async (post) => {
        const blocks = await getPageContent(post.id);
        const texto = blocks
          .filter((block) => block.type === 'paragraph' && 'paragraph' in block)
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
            ? post.properties['Categoria'].multi_select.map((item) => item.name)
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
          background: {
            xs: 'linear-gradient(to bottom, #2b2b2b, #2b2b2b, #242424)',
          },
        }}
      >
        <Box sx={{ maxWidth: '90%', mb: 4 }}>
          <MenuNav />
        </Box>
        <Box
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            borderRadius: '12px',
          }}
        >
          <Typography
            variant="h5"
            color="white"
            sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, mb: 1 }}
          >
            BLOG
          </Typography>
          <Typography
            variant="h5"
            color="white"
            sx={{ fontSize: { xs: '15px', sm: '20px', md: '30px' }, mb: 2 }}
          >
            - ÚLTIMAS POSTAGENS -
          </Typography>

          <BlogFilterClient posts={fullPosts} />
        </Box>
      </Box>
      <FooterB />
    </Box>
  );
}
 */

export const dynamic = 'force-dynamic';

import BlogFilterClient from '@/components/BlogFilterClient/BlogFilterClient';
import FooterB from '@/components/FooterB/FooterB';
import MenuNav from '@/components/MenuNav/MenuNav';
import { getBlogPosts, getPageContent } from '@/lib/notion';
import { Box, Typography } from '@mui/material';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { isFullPage } from '@notionhq/client/build/src/helpers';

export default async function BlogPage() {
  const anoAtual = new Date().getFullYear();

  // 🔥 Buscar posts do ano atual
  const posts = await getBlogPosts(anoAtual);

  // 🔥 Buscar todos os anos disponíveis no Notion
  const allPosts = await getBlogPosts(); // sem ano = todos os posts
  const anosDisponiveis = Array.from(
    new Set(
      allPosts
        .filter((post): post is PageObjectResponse => isFullPage(post))
        .map((post) => {
          const data =
            post.properties['Data']?.type === 'date'
              ? post.properties['Data'].date?.start || ''
              : '';
          return new Date(data).getFullYear();
        }),
    ),
  ).sort((a, b) => b - a);

  const fullPosts = await Promise.all(
    posts
      .filter((post): post is PageObjectResponse => isFullPage(post))
      .map(async (post) => {
        const blocks = await getPageContent(post.id);
        const texto = blocks
          .filter((block) => block.type === 'paragraph' && 'paragraph' in block)
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
            ? post.properties['Categoria'].multi_select.map((item) => item.name)
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

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
          background: {
            xs: 'linear-gradient(to bottom, #2b2b2b, #2b2b2b, #242424)',
          },
        }}
      >
        <Box sx={{ maxWidth: '90%', mb: 4 }}>
          <MenuNav />
        </Box>
        <Box
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            minHeight: '100vh',
            borderRadius: '12px',
          }}
        >
          <Typography
            variant="h5"
            color="white"
            sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, mb: 1 }}
          >
            BLOG
          </Typography>
          <Typography
            variant="h5"
            color="white"
            sx={{ fontSize: { xs: '15px', sm: '20px', md: '30px' }, mb: 2 }}
          >
            - ÚLTIMAS POSTAGENS -
          </Typography>

          {/* ✅ Passa anosDisponiveis junto com os posts do ano atual */}
          <BlogFilterClient posts={fullPosts} anos={anosDisponiveis} />
        </Box>
      </Box>
      <FooterB />
    </Box>
  );
}
