'use client';

import { Box, Divider, Typography } from '@mui/material';
/* import InstagramIcon from '@mui/icons-material/Instagram'; */

export default function FooterContact() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100vw',
        background: {
          xs: 'linear-gradient(to bottom, #1b1b1b, #1b1b1b, #2b2b2b)',
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
          {/*           <IconButton
            component="a"
            href="https://www.instagram.com/altplano"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: '#842bc3ff',
              '&:hover': {
                color: '#a64dff',
                transform: 'scale(1.1)',
                transition: 'all 0.3s ease-in-out',
              },
            }}
          >
            <InstagramIcon sx={{ fontSize: 28 }} />
          </IconButton> */}
        </Box>
      </Box>
    </Box>
  );
}
