'use client';

import * as React from 'react';
import {
  Box,
  /*   Card,
  CardActionArea,
  CardMedia,
  CardContent, */
  Typography,
  Container,
  Fade,
} from '@mui/material';

import MenuNav from '@/components/MenuNav/MenuNav';
import Footer from '@/components/Footer/Footer';
import CarouselHome from '@/components/CarouselHome/CarouselHome';

import HeadphonesIcon from '@mui/icons-material/Headphones';
import LogoAltPlanoEffect from '@/components/LogoAltPlanoEffect/LogoAltPlanoEffect';
/* import SpeakerIcon from '@mui/icons-material/Speaker';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EqualizerIcon from '@mui/icons-material/Equalizer'; */

export default function Home() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const words = React.useMemo(
    () => [
      'Techno',
      'Rave',
      'Hip Hop',
      'House',
      'Sound System',
      "Drum'n'bass",
      'Hardcore',
      'Punk',
      'Skate',
      'ALTPLANO',
    ],
    [],
  );

  React.useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      },
      words[currentIndex] === 'ALTPLANO' ? 6000 : 3000,
    );

    return () => clearInterval(interval);
  }, [currentIndex, words]);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center' /*Transições + suaves 1*/,
          /* background: 'linear-gradient(#4a4a4a, #2b2b2b, #181818)', */
          /* background: 'linear-gradient(#1a1a2e, #16213e, #0f3460)', */
          /* background: 'linear-gradient(#4a4a4a, #3c3c3c, #2b2b2b, #1f1f1f, #181818)', */
          /*Inverso: fundo escuro com brilho no topo 1 */
          /* background: 'linear-gradient(to top, #181818, #2b2b2b, #4a4a4a)', */
          /*2 da direita para esquerda escuro e laterais mais claras (efeito "sombras nas bordas") */
          background: {
            xs: 'linear-gradient(to bottom, #181818, #242424, #2b2b2b)',
            md: 'linear-gradient(to right, #181818, #2b2b2b 40%, #2b2b2b 60%, #4a4a4a)',
          },
        }}
      >
        <Box
          sx={{
            /* width: 'fit-content', */
            maxWidth: '90%',
            /*   overflow: 'hidden', */
            mb: 4,
          }}
        >
          <MenuNav />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <LogoAltPlanoEffect />
        </Box>

        <Container maxWidth="md">
          <CarouselHome />
        </Container>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
            mb: 10,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '20px', sm: '40px', md: '50px' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 2,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Produção Cultural Alternativa
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: { xs: '12px', sm: '18px', md: '22px' },
              width: { xs: '300px', sm: '600px', md: '900px' },

              color: 'white',
              textAlign: 'center',
            }}
          >
            Criamos ambientes através da seleção musical.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '14px', sm: '18px', md: '22px' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 2,
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <HeadphonesIcon fontSize="large" sx={{ color: '#842bc3ff' }} />
              Culturas que nos identificamos
              <HeadphonesIcon fontSize="large" sx={{ color: '#842bc3ff' }} />
            </Box>
          </Typography>

          <Box
            component="img"
            src="/images/AltPlano_espiral_bg_black_site.png"
            alt="Alt Plano Logo"
            sx={{
              width: { xs: '100px', sm: '100px', md: '200px' },
              animation: 'rotate 10s linear infinite',
              filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.9))',
              '@keyframes rotate': {
                '0%': {
                  transform: 'rotate(0deg)',
                },
                '100%': {
                  transform: 'rotate(360deg)',
                },
              },
            }}
          />
          <Box
            sx={{
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2,
            }}
          >
            <Fade in={true} timeout={1000}>
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  fontFamily: 'var(--font-electrolize)',
                  textAlign: 'center',
                  fontSize: { xs: '1.2rem', sm: '1.5rem', md: '2rem' },
                }}
              >
                {words[currentIndex]}
              </Typography>
            </Fade>
          </Box>
        </Box>

        {/*         <Box sx={{ mb: 2 }}>
          <Button
            variant="contained"
            sx={{
              fontSize: { xs: '12px', sm: '14px', md: '20px' },
              backgroundColor: '#842bc3ff',
              borderRadius: '10px',
              mb: 5,
              fontWeight: 'bold',
            }}
          >
            Saiba mais sobre nós
          </Button>
        </Box> */}
        {/*  <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'normal' },
            gap: 6,
            mb: 6,
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Card sx={{ maxWidth: { xs: '300px', sm: '345px' } }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/images/dj_card.png"
                alt="música eletrônica"
                sx={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 350,
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cultura Techno Rave
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  O movimento da música techno eletrônica começou em Detroit na
                  década de 80. Quando produtores e DJs começaram a experimentar
                  sintetizadores e máquinas de ritmo criando um som futurista e
                  hipnótico, que se tornou a base do gênero, dando origem a
                  inúmeros subgêneros.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: { xs: '300px', sm: '345px' } }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/images/dub_card.png"
                alt="Dub System"
                sx={{
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  width: '100%',
                  height: 350,
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cultura Dub System
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Este movimento tem suas raízes na Jamaica nos anos 60 e 70.
                  Começaram a manipular as fitas de músicas de reggae removendo
                  vocais, adicionando efeitos de eco, reverberação e delays,
                  focando nos elementos de baixo e bateria. Essa remixagem
                  criativa transformava as músicas originais em versões
                  instrumentais com uma sonoridade espacial e percussiva.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'normal' },
            gap: 6,
            mb: 6,
            width: '100%',
            justifyContent: 'center',           
          }}
        >
          <Card sx={{ maxWidth: { xs: '300px', sm: '345px' } }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/images/punk_grunge_card.png"
                alt="Discoteca musica punk e grunge"
                sx={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 350,
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cultura Punk e Grunge
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Música Punk e Grunge não morre! Um movimento underground bem
                  forte que aconteceu na década de 80 e 90 marcando toda uma
                  geração. Não apenas com seus moicanos e vestimentas, mas
                  principalmente um senso critico politico e social para com o
                  sistema.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: { xs: '300px', sm: '345px' } }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/images/skate_card.png"
                alt="green iguana"
                sx={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 350,
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Cultura Skate or Die
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  O skate começou nos anos 70. Passou por diversas mudanças e
                  preconceitos. Foi associado a rebeldia dos jovens por causa da
                  sua forte expressão, por meio do skate, roupas, ralados,
                  grafite e música. Porem, muitos desses jovens tornaram-se
                  adultos que praticam até os dias atuais, provando que este
                  movimento é um modo de viver a vida que ultrapassou gerações e
                  vai muito além de um esporte olímpico.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box> */}
      </Box>
      <Footer />
    </Box>
  );
}
