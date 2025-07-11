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

import LogoAltPlanoEffect from '@/components/LogoAltPlanoEffect/LogoAltPlanoEffect';

export default function Home() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const words = React.useMemo(
    () => [
      'Techno',
      "Drum 'n' bass",
      'Trance',
      'Hip Hop',
      'House',
      'Dance Music',
      'Sound System',
      'Rave',
      'Hardcore',
      'Punk',
      'Skate',
      'América Latina',
      'ALTPLANO',
    ],
    [],
  );

  React.useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
      },
      words[currentIndex] === 'ALTPLANO' ? 5000 : 1500,
    );

    return () => clearInterval(interval);
  }, [currentIndex, words]);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: {
            xs: 'linear-gradient(to bottom, #181818, #242424, #2b2b2b)',
            md: 'linear-gradient(to right, #181818, #2b2b2b 45%, #2b2b2b 60%, #3b3b3b)',
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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Box
            component="img"
            src="/images/AltPlano_espiral_ok.svg"
            alt="Alt Plano Logo"
            sx={{
              width: { xs: '250px', sm: '250px', md: '350px' },
              animation: 'rotate 5s linear infinite',
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
                  fontFamily: 'Agency FB Cyrillic', //Font AltPlano
                  fontSize: { xs: '32px', sm: '32px', md: '42px' },
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                {words[currentIndex]}
              </Typography>
            </Fade>
          </Box>
        </Box>

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
              fontSize: { xs: '23px', sm: '40px', md: '50px' },
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
              fontSize: { xs: '15px', sm: '18px', md: '22px' },

              color: 'white',
              textAlign: 'center',
              mb: 8,
            }}
          >
            - Moldamos ambientes através da seleção musical -
          </Typography>

          <Container maxWidth="md">
            <CarouselHome />
          </Container>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: 8,
            }}
          >
            <LogoAltPlanoEffect />
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
