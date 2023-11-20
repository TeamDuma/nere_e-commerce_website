// TwoSectionRow.tsx
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

interface TwoSectionRowProps {
  // You can define any additional props you need
}

const TwoSectionRow: React.FC<TwoSectionRowProps> = ({  }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor:'#F0F4F5' ,padding:'5px',borderRadius:'15px' ,marginTop:'10px',marginBottom:'20px'}}>
      <div style={{ width: '48%', padding: '8px', boxSizing: 'border-box', }}>
       {
             <div className="flex 
             items-center
             justify-between
             gap-3
             md:gap-0
             ">
             <div className="flex items-center gap-2 md:gap-2">
             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
             <FaRegUserCircle className="social-icon" />
             </a>
             <p>Ongoing Purchases near me</p>
             </div>
             <div className="ml-2">
                 <p>Groups</p>
                 <p>5</p>
               </div>
               <div className="ml-2">
                 <p>Products</p>
                 <p>12+</p>
               </div>
             </div>
        }
      </div>
      <div style={{ width: '48%', padding: '8px', boxSizing: 'border-box', backgroundColor:'#fff',borderRadius:'15px'  }}>
        {
             <div className="flex 
             items-center
             justify-between
             gap-3
             md:gap-0
            ">
             <div className="flex items-center gap-2 md:gap-2">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaRegUserCircle className="social-icon" />
              </a>
              <p>Launch a purchase</p>
            </div>
            <div className="ml-2">
                     <p>Delivery Time</p>
                     <p>2 : 00 : 00</p>
                   </div>
                   <div className="ml-2">
                     <p>Discounts</p>
                     <p>20% off</p>
                   </div>
                   <div className="ml-2">
                     <p> Delivery Fee</p>
                     <p>GHS 99</p>
                   </div>
            
                  
            </div>
       
        }
      </div>
    </div>
  );
};

export default TwoSectionRow;
