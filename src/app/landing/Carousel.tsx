// components/Carousel.tsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from './Card';

interface CarouselProps {
  // Add any necessary props
}

const CarouselComponent: React.FC<CarouselProps> = () => {
  const slides = [
    {
        title: 'Card 1',
        description: 'Description for Card 1',
        imageSrc: 'https://picsum.photos/400/300/?image=1',
        link: '/page1',
      },
      {
        title: 'Card 2',
        description: 'Description for Card 2',
        imageSrc: 'https://placekitten.com/500/400',
        link: '/page2',
      }, {
        title: 'Card 1',
        description: 'Description for Card 1',
        imageSrc: 'https://picsum.photos/400/300/?image=1',
        link: '/page1',
      },
      {
        title: 'Card 2',
        description: 'Description for Card 2',
        imageSrc: 'https://placekitten.com/500/400',
        link: '/page2',
      },
    // Add more cards as needed
  ];

  return (
    <Carousel>
      {slides.map((slide, index) => (
        <div key={index}>
          <Card
                  title={slide.title}
                  description={slide.description}
                  imageSrc={slide.imageSrc} link={''}          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
