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
        border: '1px solid rgba(0, 0, 0, 0.3)',
        boxShadow: '0px 0px 24px 12px rgba(0, 0, 0, 0.3)',
        borderRadius: '24px',
        color: 'white',
        transition: 'all 0.3s ease-in-out',
        willChange: 'transform',
        '&:hover': {
          transform: 'translateY(-3px) scale(1.01)',
          /* transform: 'scale(1.02)', */
          boxShadow: '4px 4px 36px 2px rgba(0, 0, 0, 0.7)',
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
            fontFamily: 'electrolize',
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
            fontFamily: 'electrolize',
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
            fontFamily: 'electrolize',
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
