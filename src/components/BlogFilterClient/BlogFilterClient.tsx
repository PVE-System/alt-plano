'use client';

import { useMemo, useState } from 'react';
import { Box, Typography, Select, MenuItem } from '@mui/material';
import Image from 'next/image';

type Post = {
  id: string;
  titulo: string;
  data: string;
  categorias: string[];
  capa?: string;
  texto: string;
  redator: string;
};

export default function BlogFilterClient({ posts }: { posts: Post[] }) {
  const anosDisponiveis = useMemo(() => {
    const anos = Array.from(
      new Set(posts.map((p) => new Date(p.data).getFullYear())),
    ).sort((a, b) => b - a);
    return anos;
  }, [posts]);

  const [anoSelecionado, setAnoSelecionado] = useState(
    new Date().getFullYear(),
  );

  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todas');

  // Categorias disponíveis com base no ano selecionado
  const categoriasDisponiveis = useMemo(() => {
    const categorias = posts
      .filter((p) => new Date(p.data).getFullYear() === anoSelecionado)
      .flatMap((p) => p.categorias);

    return ['Todas', ...Array.from(new Set(categorias))];
  }, [posts, anoSelecionado]);

  // Filtrar posts por ano e categoria
  const postsFiltrados = posts.filter((post) => {
    const ano = new Date(post.data).getFullYear();
    const correspondeAoAno = ano === anoSelecionado;
    const correspondeCategoria =
      categoriaSelecionada === 'Todas' ||
      post.categorias.includes(categoriaSelecionada);
    return correspondeAoAno && correspondeCategoria;
  });

  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '90%', md: '700px' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', gap: 1 }}>
        {/* 🔽 Filtro por ano */}
        <Select
          value={anoSelecionado}
          onChange={(e) => {
            setAnoSelecionado(Number(e.target.value));
            setCategoriaSelecionada('Todas'); // Reset categoria quando muda ano
          }}
          sx={{
            mb: 2,
            color: 'white',
            backgroundColor: '#262626ff',
            borderRadius: 2,
            border: '2px solid #842bc3',
            width: '150px',
            height: '60px',
            fontWeight: 'bold',
            '& .MuiSelect-icon': { color: 'white' },
            '& fieldset': { border: 'none' },
          }}
          MenuProps={{
            disableScrollLock: true,
            PaperProps: {
              sx: {
                backgroundColor: '#222',
                color: '#fff',
                mt: 1,
                borderRadius: 2,
              },
            },
          }}
        >
          {anosDisponiveis.map((ano) => (
            <MenuItem key={ano} value={ano}>
              {ano}
            </MenuItem>
          ))}
        </Select>

        {/* 🔽 Filtro por categoria */}
        <Select
          value={categoriaSelecionada}
          onChange={(e) => setCategoriaSelecionada(e.target.value)}
          sx={{
            mb: 4,
            color: 'white',
            backgroundColor: '#262626ff',
            borderRadius: 2,
            border: '2px solid #842bc3',
            width: '150px',
            height: '60px',
            fontWeight: 'bold',
            '& .MuiSelect-icon': { color: 'white' },
            '& fieldset': { border: 'none' },
          }}
          MenuProps={{
            disableScrollLock: true,
            PaperProps: {
              sx: {
                backgroundColor: '#222',
                color: '#fff',
                mt: 1,
                borderRadius: 2,
              },
            },
          }}
        >
          {categoriasDisponiveis.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </Box>

      {postsFiltrados.map((post, index) => (
        <Box
          key={post.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',

            width: { xs: '320px', sm: '500px', md: '700px' },
            m: 4,
            p: 4,
            /* borderBottom: '1px solid #444', */

            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(4px)',
            borderRadius: '12px',
            boxShadow: '0 0px 25px rgba(5, 4, 4, 0.2)',
          }}
        >
          {post.capa && (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: 300, sm: 400, md: 500 },
                mb: 2,
                borderRadius: '12px',
                overflow: 'hidden',
              }}
            >
              <a
                href={post.capa}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '100%',
                }}
              >
                <Image
                  src={post.capa}
                  alt={post.titulo}
                  fill
                  priority={index === 0} // ✅ Preload só para o primeiro post
                  sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw, 100vw"
                  style={{ borderRadius: '12px', objectFit: 'contain' }}
                />
              </a>
            </Box>
          )}

          <Typography variant="h5" color="white">
            {post.titulo}
          </Typography>

          <Typography
            variant="subtitle2"
            color="gray"
            sx={{ fontStyle: 'italic', mt: 0.5 }}
          >
            Publicado por {post.redator}
          </Typography>

          {post.categorias.length > 0 && (
            <Typography
              variant="caption"
              color="#a64dff"
              sx={{ fontSize: '14px' }}
            >
              Categoria: {post.categorias.join(', ')}
            </Typography>
          )}

          <Typography variant="body2" color="gray">
            {(() => {
              const [ano, mes, dia] = post.data.split('-');
              const dataCorrigida = new Date(
                Number(ano),
                Number(mes) - 1,
                Number(dia),
              );
              return dataCorrigida.toLocaleDateString('pt-BR');
            })()}
          </Typography>

          <Box
            sx={{
              width: { xs: '300px', sm: '500px', md: '700px' },
              mt: 2,
              p: 2,
              overflowWrap: 'break-word',
              whiteSpace: 'pre-line',
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              wordBreak: 'break-word',
              textAlign: 'center',
            }}
          >
            <Typography color="white">{post.texto}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
