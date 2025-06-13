'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Typography, Box } from '@mui/material';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const carouselItems = [
  {
    image: '/images/eletronica_event.png',
    label: 'Eventos e Festas Eletrônica',
  },
  {
    image: '/images/eletronica_studio.png',
    label: 'Eventos Particulares',
  },
  {
    image: '/images/punkGrunge.png',
    label: 'Discotecagem Punk/Grunge',
  },
];

export default function CarouselHome() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      style={{ borderRadius: '12px', overflow: 'hidden' }}
    >
      {carouselItems.map((item, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              height: { xs: '300px', sm: '400px', md: '500px' },
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              pt: 1,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
                fontSize: { xs: '16px', sm: '24px' },
                padding: 2,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                borderRadius: 2,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
