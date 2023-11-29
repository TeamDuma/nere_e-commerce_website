

"use client"; // This is a client component 👈🏽

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://nere-server.herokuapp.com/api/products/active`);
        setProducts(response.data);
        console.log("response.data",response.data)
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginLeft: '10%',marginRight:'10%' }}>
        {products.map((product) => (
          <Link href={`/product/${product.id}`} >
          <div key={product?.id} style={{ marginTop: '50px' }}>
            <div
              style={{
                width: '100px',
                height: '40px',
                backgroundColor: '#F58929',
                position: 'relative',
                display: 'flex',
                fontSize: '14px',
                left: '146px',
                top: '43px',
                borderRadius: '8px',
                justifyContent: 'center',
                fontWeight: 'bold',
                alignItems: 'center',
                color: 'white',
              }}
            >
              {`Save GHC ${product.price - product.sale_price}`}
            </div>
            <div
              style={{
                backgroundColor: '#F5F5F5',
                backgroundSize: 'cover',
                width: '250px',
                height: '250px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '10px',
              }}
            >
              <img
                style={{ borderRadius: '10px' }}
                src={product?.plain_image}
                width={
                  product.name === 'Frytol sunflower oil 0.9L' ||
                  product.name === "Dr. Annie's honey 500ml"
                    ? '60px'
                    : '90px'
                }
                alt="cerelac image"
              />
            </div>
            <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#298592', marginTop: '2px' }}>
              {product?.name}
            </div>
            <div style={{ display: 'flex', marginTop: '2px' }}>
              <div style={{ marginLeft: '4px', color: '#C1C2C2', textDecoration: 'line-through' }}>{`GHC ${product?.price}`}</div>
              <div style={{ color: '#F58929' ,marginLeft:'5px' }}>{`GHC ${product?.sale_price}`}</div>

            </div>
        
          </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;

