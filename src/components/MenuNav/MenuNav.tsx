'use client';

import { AppBar, Button, Toolbar } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function MenuNav() {
  return (
    <AppBar
      position="static"
      sx={{
        mt: 3,
        mb: 3,
        backgroundColor: '#262626ff',
        /* backgroundColor: '#842bc3ff', */
        borderRadius: '24px',
        color: 'white',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
          transition: 'all 0.3s ease-in-out',
        },
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'center',
          gap: 1,
        }}
      >
        <Button
          sx={{
            fontSize: { xs: '10px', sm: '14px' },
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: '#777',
              color: '#842bc3ff',
              boxShadow: '0 0px 48px rgba(5, 4, 4, 0.5)',
            },
          }}
          color="inherit"
          href="/"
        >
          <HomeRoundedIcon sx={{ fontSize: { xs: '16px', sm: '28px' } }} />
        </Button>
        <Button
          sx={{
            fontSize: { xs: '10px', sm: '14px' },
            whiteSpace: 'nowrap',
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: '#777',
              color: '#842bc3ff',
              boxShadow: '0 0px 48px rgba(5, 4, 4, 0.5)',
            },
          }}
          color="inherit"
          href="/aboutUs"
        >
          Sobre nós
        </Button>

        <Button
          sx={{
            fontSize: { xs: '10px', sm: '14px' },
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: '#777',
              color: '#842bc3ff',
              boxShadow: '0 0px 48px rgba(5, 4, 4, 0.5)',
            },
          }}
          color="inherit"
          href="/blog"
        >
          Blog
        </Button>
        <Button
          sx={{
            fontSize: { xs: '10px', sm: '14px' },
            borderRadius: '12px',
            '&:hover': {
              backgroundColor: '#777',
              color: '#842bc3ff',
              boxShadow: '0 0px 48px rgba(5, 4, 4, 0.5)',
            },
          }}
          color="inherit"
          href="/contact"
        >
          Contato
        </Button>
      </Toolbar>
    </AppBar>
  );
}
