import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, link }) => {
  return (
    <a href={link} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ textAlign: 'center' }}>
        <img src={imageSrc} alt={title} style={{ maxWidth: '100%', marginBottom: '10px' }} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Card;
