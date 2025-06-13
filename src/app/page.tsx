'use client';

import * as React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Button,
} from '@mui/material';

import MenuNav from '@/components/MenuNav/MenuNav';
import Footer from '@/components/Footer/Footer';
import CarouselHome from '@/components/CarouselHome/CarouselHome';

export default function Home() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(#1a1a2e, #16213e, #0f3460)',
        }}
      >
        <Box
          sx={{
            width: 'fit-content',
            maxWidth: '90%',
            overflow: 'hidden',
            mb: 4,
          }}
        >
          <MenuNav />
        </Box>

        <Container maxWidth="md">
          <CarouselHome />
        </Container>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 10,
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
            Produtora de Eventos e <br />
            Música Alternativa
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: { xs: '14px', sm: '18px', md: '22px' },
              width: { xs: '300px', sm: '600px', md: '900px' },
              mb: 2,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Para quem busca algo mais criativo e <strong>underground</strong>,
            <br /> mantendo a essência da vibe que originou alguns movimentos na
            época, <br /> antes de alcançar a cultura pop.
          </Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Button
            variant="contained"
            sx={{
              fontSize: { xs: '12px', sm: '14px', md: '20px' },
              backgroundColor: 'tomato',
              borderRadius: '10px',
              mb: 5,
              fontWeight: 'bold',
            }}
          >
            Culturas que nos identificamos
          </Button>
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
            /* padding: { xs: 2, sm: 4, md: 8 }, */
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
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
