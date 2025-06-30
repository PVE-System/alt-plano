import { Box } from '@mui/material';

export default function LogoAltPlanoEffect() {
  return (
    <Box
      component="img"
      src="/images/AltPlano_logomarca.svg"
      alt="Alt Plano Logo"
      sx={{
        width: { xs: '200px', sm: '200px', md: '280px' },
        filter: 'drop-shadow(0 0 10px rgba(132, 43, 195, 0.3))',
        transition: 'all 0.5s ease-in-out',
        animation:
          'float 6s ease-in-out infinite, glow 3s ease-in-out infinite',
        '@keyframes float': {
          '0%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-10px) rotate(2deg)',
          },
          '100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
        },
        '@keyframes glow': {
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
        '&:hover': {
          transform: 'scale(1.1) rotate(5deg)',
          filter: 'drop-shadow(0 0 25px rgba(132, 43, 195, 0.8))',
        },
      }}
    />
  );
}
