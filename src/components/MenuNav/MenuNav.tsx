'use client';

import { AppBar, Button, Toolbar } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function MenuNav() {
  return (
    <AppBar
      position="static"
      sx={{
        mt: 2,
        mb: 2,
        backgroundColor: '#333',
        borderRadius: '24px',
        color: 'white',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center', gap: 1 }}>
        <Button
          sx={{
            fontSize: { xs: '10px', sm: '16px' },
            '&:hover': {
              backgroundColor: '#666',
            },
          }}
          color="inherit"
          href="/"
        >
          <HomeRoundedIcon sx={{ fontSize: { xs: '20px', sm: '32px' } }} />
        </Button>
        <Button
          sx={{
            fontSize: { xs: '10px', sm: '16px' },
            whiteSpace: 'nowrap',
            '&:hover': {
              backgroundColor: '#666',
            },
          }}
          color="inherit"
          href="/aboutUs"
        >
          Sobre nós
        </Button>

        <Button
          sx={{
            fontSize: { xs: '10px', sm: '16px' },
            '&:hover': {
              backgroundColor: '#666',
            },
          }}
          color="inherit"
          href="/blog"
        >
          Blog
        </Button>
        <Button
          sx={{
            fontSize: { xs: '10px', sm: '16px' },
            '&:hover': {
              backgroundColor: '#666',
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
