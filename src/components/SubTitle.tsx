import React from 'react';

interface SubTitleProps {
  text: string;
  color?: string;
}

const SubTitle: React.FC<SubTitleProps> = ({ text, color }) => {
  const SubTitleStyle = {
    color: color || '#298592',
  };

  return (
    <h1 style={SubTitleStyle} className='my-2 text-2xl font-bold'>
      {text}
    </h1>
  );
};

export default SubTitle;
