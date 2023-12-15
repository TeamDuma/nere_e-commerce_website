import React from 'react';

interface TitleProps {
  text: string;
  color?: string;
}

const Title: React.FC<TitleProps> = ({ text, color }) => {
  const titleStyle = {
    color: color || '#298592',
  };

  return (
    <h1 style={titleStyle} className='my-6 text-4xl font-bold'>
      {text}
    </h1>
  );
};

export default Title;
