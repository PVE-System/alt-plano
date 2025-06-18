'use client';

import * as React from 'react';
import { Box, Typography } from '@mui/material';

import MenuNav from '@/components/MenuNav/MenuNav';

import LogoAltPlanoEffect from '@/components/LogoAltPlanoEffect/LogoAltPlanoEffect';

import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterContact from '@/components/FooterContact/FooterContact';

export default function Contact() {
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
            xs: 'linear-gradient(to top, #1b1b1b, #2b2b2b, #3d3d3d)',
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
              fontSize: { xs: '14px', sm: '22px', md: '32px' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 2,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Contato:
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mb: 3,
            }}
          >
            <EmailIcon
              sx={{
                color: '#fff',
                fontSize: { xs: '20px', sm: '24px', md: '28px' },
              }}
            />
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: { xs: '12px', sm: '16px', md: '20px' },
                color: 'white',
                textAlign: 'center',
              }}
            >
              altplano@hotmail.com
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mb: 3,
            }}
          >
            <WhatsAppIcon
              sx={{
                color: '#25D366',
                fontSize: { xs: '20px', sm: '24px', md: '28px' },
              }}
            />
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: { xs: '12px', sm: '16px', md: '20px' },
                color: 'white',
                textAlign: 'center',
              }}
            >
              (67) 999999666
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              mb: 3,
            }}
          >
            <InstagramIcon
              sx={{
                color: '#E1306C',
                fontSize: { xs: '20px', sm: '24px', md: '28px' },
              }}
            />
            <Typography
              variant="body1"
              component="p"
              sx={{
                fontSize: { xs: '12px', sm: '16px', md: '20px' },
                color: 'white',
                textAlign: 'center',
              }}
            >
              Em breve
            </Typography>
          </Box>
        </Box>
      </Box>
      <FooterContact />
    </Box>
  );
}
