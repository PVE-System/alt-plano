import MenuNav from '@/components/MenuNav/MenuNav';
import { getBlogPosts, getPageContent } from '@/lib/notion';
import { Box, Typography } from '@mui/material';
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import { isFullPage } from '@notionhq/client/build/src/helpers';
import Image from 'next/image';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  const fullPosts = await Promise.all(
    posts
      .filter((post): post is PageObjectResponse => isFullPage(post))
      .map(async (post) => {
        // 🔍 Conteúdo da página (texto)
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

        /* const slug =
          post.properties['URL personalizada']?.type === 'rich_text'
            ? post.properties['URL personalizada'].rich_text[0]?.plain_text
            : ''; */

        const data =
          post.properties['Data']?.type === 'date'
            ? post.properties['Data'].date?.start
            : '';

        const categorias =
          post.properties['Categoria']?.type === 'multi_select'
            ? post.properties['Categoria'].multi_select.map((item) => item.name)
            : [];

        let capa: string | undefined = undefined;

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
          /* slug, */
          categorias,
          data,
          capa,
          texto,
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
        <Box
          sx={{
            maxWidth: '90%',
            mb: 4,
          }}
        >
          <MenuNav />
        </Box>
        <Box
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',

            alignItems: 'center',
          }}
        >
          <Typography
            variant="h5"
            color="white"
            sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, mb: 1 }}
          >
            BLOG ALTPLANO
          </Typography>
          <Typography
            variant="h5"
            color="white"
            sx={{ fontSize: { xs: '15px', sm: '20px', md: '30px' } }}
          >
            - ÚLTIMAS POSTAGENS -
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              mt: 10,
              mb: 5,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(4px)',
              borderRadius: '12px',
              p: 5,
            }}
          >
            {fullPosts.map((post) => (
              //Box pai
              <Box
                key={post.id}
                sx={{
                  width: '700px',
                  mt: 4,
                  borderBottom: '1px solid #444',
                  pb: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {post.capa && (
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: { xs: 300, sm: 400, md: 500 },
                      mb: 2,
                      borderRadius: '12px',
                      overflow: 'hidden',
                    }}
                  >
                    <a
                      href={post.capa}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        position: 'relative',
                        display: 'block',
                        height: '100%',
                      }}
                    >
                      <Image
                        src={post.capa}
                        alt={post.titulo}
                        fill
                        priority
                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw, 100vw"
                        style={{ borderRadius: '12px', objectFit: 'contain' }}
                      />
                    </a>
                  </Box>
                )}

                <Typography
                  variant="h5"
                  color="white"
                  /* sx={{ fontSize: { xs: '14px', sm: '20px', md: '32px' } }} */
                >
                  {post.titulo}
                </Typography>

                {post.categorias.length > 0 && (
                  <Typography
                    variant="caption"
                    color="#a64dff"
                    sx={{ fontSize: '14px' }}
                  >
                    Categoria: {post.categorias.join(', ')}
                  </Typography>
                )}

                <Typography variant="body2" color="gray">
                  {post.data &&
                    new Date(post.data).toLocaleDateString('pt-BR', {
                      timeZone: 'UTC',
                    })}
                </Typography>

                {/* <Typography variant="body1" color="white" sx={{ mt: 1 }}>
                  /{post.slug}
                </Typography> */}

                <Box
                  sx={{
                    width: { xs: '320px', sm: '100%', md: '100%' },

                    overflowWrap: 'break-word',
                  }}
                >
                  <Typography
                    variant="body2"
                    color="white"
                    sx={{
                      mt: 2,
                      whiteSpace: 'pre-line',
                      fontSize: { xs: '14px', sm: '16px', md: '18px' },
                      wordBreak: 'break-word',
                    }}
                  >
                    {post.texto}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
