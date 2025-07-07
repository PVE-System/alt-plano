'use client';

import * as React from 'react';
import { Box } from '@mui/material';

export default function EspiralPage() {
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
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: {
            xs: 'linear-gradient(to bottom, #181818, #242424, #2b2b2b)',
            md: 'linear-gradient(to right, #181818, #2b2b2b 45%, #2b2b2b 60%, #3b3b3b)',
          },
        }}
      >
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
            sx={{
              width: '850px',
              height: '850px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <Box
              component="img"
              src="/images/AltPlano_espiral_red.svg"
              alt="Alt Plano Logo"
              sx={{
                width: { xs: '300px', sm: '600px', md: '800px' },
                height: { xs: '300px', sm: '600px', md: '800px' },
                animation: 'rotate 5s linear infinite',
                filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.9))',
                '@keyframes rotate': {
                  '100%': {
                    transform: 'rotate(0deg)',
                  },
                  '0%': {
                    transform: 'rotate(360deg)',
                  },
                },
              }}
            />
          </Box>
          {/*           <Box
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
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}
