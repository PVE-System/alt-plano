'use client';

import * as React from 'react';
import { Box, Typography } from '@mui/material';
import MenuNav from '@/components/MenuNav/MenuNav';
import Footer from '@/components/Footer/Footer';

export default function Contact() {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(#1a1a2e, #16213e, #0f3460)',
          height: '100vh',
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
        <Box>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '20px', sm: '40px', md: '60px' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 2,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Página de Contato
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
