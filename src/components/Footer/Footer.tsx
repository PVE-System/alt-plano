'use client';

import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100vw',
        backgroundColor: '#2F2F2F',
        color: 'white',
        py: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography variant="body2">© Alt Plano - Desde 2025</Typography>
        <Typography variant="body2">Campo Grande - MS</Typography>
        <Typography
          variant="body2"
          component="a"
          href="/contact"
          sx={{
            textDecoration: 'none',
            color: 'white',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Contato
        </Typography>
      </Box>
    </Box>
  );
}
