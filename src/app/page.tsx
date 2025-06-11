'use client';

import * as React from 'react';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      className="min-h-screen min-w-screen flex flex-col items-center justify-start"
      sx={{ background: 'linear-gradient(#1a1a2e, #16213e, #0f3460)' }}
    >
      <Box
        className="min-h-screen flex flex-col items-center justify-start p-8"
        /* style={{
            background: 'linear-gradient(#1a1a2e, #16213e, #0f3460)',
          }} */
      >
        <Box
          sx={{
            width: 'fit-content',
            maxWidth: '85%',
            /* margin: '20px auto', */
            overflow: 'hidden',
            /* backgroundColor: 'rgba(30, 30, 30, 0.6)', */
            /* padding: '8px 16px', */
          }}
        >
          <AppBar
            position="static"
            sx={{
              backgroundColor: '#333',
              borderRadius: '24px',
              color: 'white',
            }}
          >
            <Toolbar sx={{ justifyContent: 'center', gap: 1 }}>
              <Button
                sx={{
                  '&:hover': {
                    backgroundColor: '#666',
                  },
                }}
                color="inherit"
                href="/home"
              >
                <HomeRoundedIcon />
              </Button>
              <Button
                sx={{
                  fontSize: '12px',
                  '&:hover': {
                    backgroundColor: '#666',
                  },
                }}
                color="inherit"
                href="/about"
              >
                Sobre nós
              </Button>

              <Button
                sx={{
                  fontSize: '12px',
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
                  fontSize: '12px',
                  '&:hover': {
                    backgroundColor: '#666',
                  },
                }}
                color="inherit"
                href="/gallery"
              >
                Contato
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        <main className="flex flex-col items-center justify-center flex-grow p-8 text-white text-center">
          <div className="flex items-center justify-center gap-2 bg-blue-500 rounded-full px-3 py-1 text-sm font-semibold mb-8 border border-blue-300">
            Recent project: Once UI
          </div>
          <h1 className="text-7xl font-bold leading-tight mb-8 max-w-4xl">
            Building bridges between
            <br />
            design and code
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed mb-8">
            I&apos;m Selene, a design engineer at{' '}
            <span className="font-bold">once ui</span> , where I craft intuitive
            <br />
            user experiences. After hours, I build my own projects.
          </p>
        </main>
      </Box>
    </Container>
  );
}
