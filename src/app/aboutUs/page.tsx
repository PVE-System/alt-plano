'use client';

import * as React from 'react';
import { Box, Typography } from '@mui/material';

import MenuNav from '@/components/MenuNav/MenuNav';

import LogoAltPlanoEffect from '@/components/LogoAltPlanoEffect/LogoAltPlanoEffect';
import SpeakerIcon from '@mui/icons-material/Speaker';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import FooterAboutUs from '../FooterAboutUs/FooterAboutUs';

export default function AboutUs() {
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LogoAltPlanoEffect />
        </Box>

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
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '16px', sm: '30px', md: '40px' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 2,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Sobre nós:
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: { xs: '12px', sm: '16px', md: '20px' },
              width: { xs: '300px', sm: '600px', md: '900px' },
              color: 'white',
              textAlign: 'center',
              mb: 5,
            }}
          >
            A ALTPLANO surge com a intenção de otimizar os sentidos das pessoas
            através do poder da música e da arte de modo geral. Queremos criar
            eventos com temas sonoros e partilhar de bons momentos em ambientes
            onde toda batida foi pensada em entrar em nossos ouvidos e causar
            uma sensação.
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: { xs: '12px', sm: '16px', md: '20px' },
              width: { xs: '300px', sm: '600px', md: '900px' },
              color: 'white',
              textAlign: 'center',
            }}
          >
            Nosso desejo também é assessorar outros produtores na curadoria
            artística de seus projetos. Além disso, temos como objetivo
            contribuir com produções musicais autorais nas mais variadas formas.
            Essa é a ALTPLANO, nosso plano alternativo..
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SpeakerIcon
              sx={{
                color: '#842bc3ff',
                fontSize: { xs: '24px', sm: '29px', md: '34px' },
                animation:
                  'speakerFloat 6s ease-in-out infinite, speakerGlow 3s ease-in-out infinite',
                '@keyframes speakerFloat': {
                  '0%': {
                    transform: 'scale(1)',
                  },
                  '50%': {
                    transform: 'scale(1.2)',
                  },
                  '100%': {
                    transform: 'scale(1)',
                  },
                },
                '@keyframes speakerGlow': {
                  '0%': {
                    filter: 'drop-shadow(0 0 5px rgba(132, 43, 195, 0.3))',
                  },
                  '50%': {
                    filter: 'drop-shadow(0 0 20px rgba(132, 43, 195, 0.6))',
                  },
                  '100%': {
                    filter: 'drop-shadow(0 0 5px rgba(132, 43, 195, 0.3))',
                  },
                },
              }}
            />
            <MusicNoteIcon
              sx={{
                color: '#842bc3ff',
                fontSize: { xs: '24px', sm: '29px', md: '34px' },
                animation:
                  'musicNoteFloat 6s ease-in-out infinite, musicNoteGlow 3s ease-in-out infinite',
                '@keyframes musicNoteFloat': {
                  '0%': {
                    transform: 'translateY(0px) rotate(0deg)',
                  },
                  '50%': {
                    transform: 'translateY(-10px) rotate(20deg)',
                  },
                  '100%': {
                    transform: 'translateY(0px) rotate(0deg)',
                  },
                },
                '@keyframes musicNoteGlow': {
                  '0%': {
                    filter: 'drop-shadow(0 0 5px rgba(132, 43, 195, 0.3))',
                  },
                  '50%': {
                    filter: 'drop-shadow(0 0 20px rgba(132, 43, 195, 0.6))',
                  },
                  '100%': {
                    filter: 'drop-shadow(0 0 5px rgba(132, 43, 195, 0.3))',
                  },
                },
              }}
            />
            <EqualizerIcon
              sx={{
                color: '#842bc3ff',
                fontSize: { xs: '24px', sm: '29px', md: '34px' },
                animation:
                  'equalizerFloat 6s ease-in-out infinite, equalizerGlow 3s ease-in-out infinite',
                '@keyframes equalizerFloat': {
                  '0%': {
                    transform: 'scale(1.1)',
                  },
                  '50%': {
                    transform: 'scale(1.3)',
                  },
                  '100%': {
                    transform: 'scale(1.1)',
                  },
                },
                '@keyframes equalizerGlow': {
                  '0%': {
                    filter: 'drop-shadow(0 0 5px rgba(132, 43, 195, 0.3))',
                  },
                  '50%': {
                    filter: 'drop-shadow(0 0 20px rgba(132, 43, 195, 0.6))',
                  },
                  '100%': {
                    filter: 'drop-shadow(0 0 5px rgba(132, 43, 195, 0.3))',
                  },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <FooterAboutUs />
    </Box>
  );
}
