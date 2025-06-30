'use client';

import * as React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { useRef, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import MenuNav from '@/components/MenuNav/MenuNav';
import LogoAltPlanoEffect from '@/components/LogoAltPlanoEffect/LogoAltPlanoEffect';
import FooterB from '@/components/FooterB/FooterB';

import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    if (!form.current) return;

    emailjs
      .sendForm(
        'service_c47a0x5',
        'template_pmwllgw',
        form.current,
        '0azq8lZpwFdvj5ITV',
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);
        form.current?.reset();
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

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
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
            alignItems: 'center',
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
              fontSize: { xs: '14px', sm: '16px', md: '22px' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 2,
              color: 'white',
              textAlign: 'center',
            }}
          >
            Nos envie uma mensagem que retornaremos em breve:
          </Typography>
          <form
            ref={form}
            onSubmit={handleSendEmail}
            style={{ width: '100%', maxWidth: 400 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: 'center',
                mb: 4,
                mt: 2,
              }}
            >
              <TextField
                name="name"
                label="Nome"
                required
                variant="outlined"
                fullWidth
                sx={{
                  maxWidth: 400,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  input: { color: 'white' },
                  '& label': { color: '#a64dff' },
                  '& label.Mui-focused': { color: '#a64dff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#842bc3' },
                    '&:hover fieldset': { borderColor: '#a64dff' },
                    '&.Mui-focused fieldset': { borderColor: '#a64dff' },
                  },
                }}
              />
              <TextField
                name="email"
                label="Email"
                type="email"
                required
                variant="outlined"
                fullWidth
                sx={{
                  maxWidth: 400,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  input: { color: 'white' },
                  '& label': { color: '#a64dff' },
                  '& label.Mui-focused': { color: '#a64dff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#842bc3' },
                    '&:hover fieldset': { borderColor: '#a64dff' },
                    '&.Mui-focused fieldset': { borderColor: '#a64dff' },
                  },
                }}
              />
              <TextField
                name="phone"
                label="WhatsApp"
                variant="outlined"
                fullWidth
                sx={{
                  maxWidth: 400,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  input: { color: 'white' },
                  '& label': { color: '#a64dff' },
                  '& label.Mui-focused': { color: '#a64dff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#842bc3' },
                    '&:hover fieldset': { borderColor: '#a64dff' },
                    '&.Mui-focused fieldset': { borderColor: '#a64dff' },
                  },
                }}
              />
              <TextField
                name="message"
                label="Mensagem"
                required
                variant="outlined"
                fullWidth
                multiline
                minRows={4}
                sx={{
                  maxWidth: 400,
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  input: { color: 'white' },
                  textarea: { color: 'white' },
                  '& label': { color: '#a64dff' },
                  '& label.Mui-focused': { color: '#a64dff' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#842bc3' },
                    '&:hover fieldset': { borderColor: '#a64dff' },
                    '&.Mui-focused fieldset': { borderColor: '#a64dff' },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 1,
                  backgroundColor: '#842bc3',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#a64dff',
                  },
                  maxWidth: 400,
                  width: '100%',
                  '&.Mui-disabled': {
                    backgroundColor: '#a1a1a1',
                    color: '#fff',
                  },
                }}
                disabled={loading}
              >
                {loading ? (
                  <CircularProgress size={24} sx={{ color: '#a64dff' }} />
                ) : (
                  'Enviar'
                )}
              </Button>
              {success && (
                <Typography sx={{ color: 'green', mt: 1 }}>
                  Mensagem enviada com sucesso!
                </Typography>
              )}
              {error && (
                <Typography sx={{ color: 'red', mt: 1 }}>
                  Erro ao enviar. Tente novamente.
                </Typography>
              )}
            </Box>
          </form>
        </Box>
      </Box>
      <FooterB />
    </Box>
  );
}
