"use client"; // This is a client component 👈🏽

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import FeaturedProducts from './component/FeaturedProducts';
import TwoColumnLayout from './component/TwoColumnLayout';
import Title from './component/common/ Title';
import Hero from './component/common/Hero';
import ThreeSectionRow from './component/common/ThreeSectionRow';
import TwoSectionRow from './component/common/TwoSectionRow';
import Container from './component/common/Container';
import SliderComponent from './component/SliderComponent';


const products = [
  { name: 'Product 1', price: 20, image: 'product1.jpg' },
  { name: 'Product 2', price: 30, image: 'product2.jpg' },
  // Add more products as needed
];

export default function Home() {

  const handleSeeMoreClick = () => {
    // Navigate to another page or route
    window.location.href = '/Products';
  };

  return (
    <Container>
      <TwoSectionRow />
      <Hero images={[
        {
          id: '1',
          url: 'https://res.cloudinary.com/dshiwa02i/image/upload/v1691404789/b1d1axq63tqihbmvgq7l.png',
        },
        {
          id: '2',
          url: 'https://res.cloudinary.com/dshiwa02i/image/upload/v1691404789/jqako60whhrlvhmdsu0k.png',
        },
        {
          id: '3',
          url: 'https://res.cloudinary.com/dshiwa02i/image/upload/v1691404789/auskeubpqss2wv6qoacp.png',
        },
      ]}/>
      <ThreeSectionRow/>
<SliderComponent/>
<Title text="Ongoing Groups" color="#298592" />
{/* <OngoingPurchases/> */}
<TwoColumnLayout/>
<FeaturedProducts/>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
      <button
        className="rounded-lg shadow text-center text-white text-base font-semibold py-3"
        style={{ background: "#298592", width: '150px', marginTop: '9px' }}
        onClick={handleSeeMoreClick}
      >
        View All Items
      </button>
    </div>
      
    </Container>
  );
}
