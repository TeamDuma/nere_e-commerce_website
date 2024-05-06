import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const items = [
  {
    id: 'sunflower',
    imageUrl: '../images/nere_sunflower.png',
  },
  {
    id: 'breakfast',
    imageUrl: '../images/nere_breakfast.png',
  },
  {
    id: 'babytuesday',
    imageUrl: '../images/nere_baby_tuesday.png',
  },
];

export default function Banner() {
  return (
    <>
      <style jsx>{`
        .container {
          width: 100%;
          margin: auto;
        }

        .mySwiper {
          position: relative;
          width: 100%;
          height: auto;
        }

        .swipItem {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .imgBox {
          width: 100%;
          max-width: 100%;
          height: auto;
          margin-bottom: 10px;
        }
      `}</style>
      <div className='container'>
        <Carousel
          showArrows={true}
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          dynamicHeight={false}
          className='mySwiper'
        >
          {items.map((item) => (
            <div key={item.id} className='swipItem'>
              <div className='imgBox'>
                <img src={item.imageUrl} alt='slides' />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
