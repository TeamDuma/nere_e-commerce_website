// ThreeSectionRow.tsx
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

interface ThreeSectionRowProps {
}

const ThreeSectionRow: React.FC<ThreeSectionRowProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
    <div style={{ width: '48%', margin: '5px', boxSizing: 'border-box', border: '1px solid #ccc',borderRadius:'10px',  }}>
      {children[0]}
    </div>
    <div style={{ width: '48%', margin: '5px', boxSizing: 'border-box', border: '1px solid #ccc',borderRadius:'10px',  }}>
      {children[1]}
    </div>
    <div style={{ width: '48%', margin: '5px', boxSizing: 'border-box', border: '1px solid #ccc',borderRadius:'10px',  }}>
      {children[2]}
    </div>
  </div>
  );
};

export default ThreeSectionRow;
