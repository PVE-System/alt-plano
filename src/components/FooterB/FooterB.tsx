'use client';

import { Box, Divider, Typography } from '@mui/material';
/* import InstagramIcon from '@mui/icons-material/Instagram'; */

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100vw',
        background: {
          xs: 'linear-gradient(to bottom, #242424, #242424, #2b2b2b)',
        },
        color: 'white',
        py: 1,
      }}
    >
      <Divider sx={{ height: 1, backgroundColor: '#4a4a4a' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          mt: 1,
        }}
      >
        <Typography variant="body2">© ALTPLANO - Desde 2025</Typography>
        <Typography variant="body2">Campo Grande - MS</Typography>
        <Box sx={{}}>
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
    </Box>
  );
}
