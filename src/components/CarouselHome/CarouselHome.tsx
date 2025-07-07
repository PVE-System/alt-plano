'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Typography, Box } from '@mui/material';
import { useRef } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { useRouter } from 'next/navigation';

const carouselItems = [
  {
    image: '/images/img_carousel_1.jpg',
    label: 'CONFIRA',
    /* description: 'Produção e organização de eventos de música eletrônica', */
  },
  {
    image: '/images/img_carousel_2.jpg',
    label: 'NOSSO',
    /* description: 'Eventos personalizados para ocasiões especiais', */
  },
  {
    image: '/images/img_carousel_3.jpg',
    label: 'BLOG',
    /* description: 'Música alternativa para todos os gostos', */
  },
];

export default function CarouselHome() {
  const swiperRef = useRef<SwiperType | null>(null);
  const router = useRouter();

  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <Box
      sx={{
        /* width: '100%', */
        p: 2,
        maxWidth: '100vw',
        /* maxWidth: { xs: '100vw', sm: '100%' }, */
        /* maxWidth: { xs: '100vw', sm: '100vw', md: '100vw' }, */
        /*  boxSizing: 'border-box', */
        '& .swiper': {
          borderRadius: '20px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.8s ease-in-out',
          /* width: '100%', */
          /* minHeight: { xs: '260px', sm: '300px', md: '330px' }, */
          '&:hover': {
            boxShadow: '0 12px 48px rgba(0, 0, 0, 0.4)',
            transform: 'scale(1.05)',
            transition: 'all 0.5s ease-in-out',
          },
        },
        '& .swiper-button-next, & .swiper-button-prev': {
          color: '#3a3a3a',
          '&:hover': {
            color: '#5e5e5e',
          },
        },
        '& .swiper-pagination-bullet': {
          backgroundColor: '#3a3a3a',
          '&:hover': {
            backgroundColor: '#5e5e5e',
          },
        },
        '& .swiper-pagination-bullet-active': {
          backgroundColor: '#5e5e5e',
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1000}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => router.push('/blog')}
              sx={{
                height: { xs: '230px', sm: '300px', md: '330px' },
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                pb: 6,
                cursor: 'pointer',
                width: '100%',
              }}
            >
              <Box
              /* sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: '12px',
                  p: 2,
                  maxWidth: '80%',
                  transform: 'translateY(20px)',
                  transition: 'all 0.3s ease-in-out',
                  height: {
                    xs: '50px',
                    sm: 'auto',
                  },
                  '&:hover': {
                    transform: 'translateY(0)',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  },
                }} */
              >
                <Typography
                  variant="h4"
                  sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: { xs: '18px', sm: '26px', md: '30px' },
                    mb: 1,
                    fontFamily: 'Agency FB Cyrillic', //Font AltPlano
                    /* fontFamily: 'var(--font-electrolize)', */
                    /* fontWeight: 'bold', */
                  }}
                >
                  {item.label}
                </Typography>
                {/*                 <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textAlign: 'center',
                    fontSize: { xs: '12px', sm: '14px', md: '16px' },
                  }}
                >
                  {item.description}
                </Typography> */}
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
