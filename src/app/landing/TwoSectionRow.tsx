// TwoSectionRow.tsx
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

interface TwoSectionRowProps {
  // You can define any additional props you need
}

const TwoSectionRow: React.FC<TwoSectionRowProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor:'#F0F4F5' ,padding:'5px',borderRadius:'15px' ,marginTop:'10px',marginBottom:'20px'}}>
      <div style={{ width: '48%', padding: '8px', boxSizing: 'border-box', }}>
        {children[0]} {
        }
      </div>
      <div style={{ width: '48%', padding: '8px', boxSizing: 'border-box', backgroundColor:'#fff',borderRadius:'15px'  }}>
        {children[1]} {
       
        }
      </div>
    </div>
  );
};

export default TwoSectionRow;
