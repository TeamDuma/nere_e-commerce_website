import React from 'react';

interface TitleProps {
  text: string;
  color?: string; // Optional color prop
}

const Title: React.FC<TitleProps> = ({ text, color }) => {
  const titleStyle = {
    color: color || '#298592', // Use the provided color or default to '#298592'
  };

  return <h1 style={titleStyle} className="text-2xl font-bold my-5">{text}</h1>;
};

export default Title;
