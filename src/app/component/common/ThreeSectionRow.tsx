// ThreeSectionRow.tsx
import React from 'react';

interface ThreeSectionRowProps {}

const ThreeSectionRow: React.FC<ThreeSectionRowProps> = ({}) => {
  return (
    <div className="three-section-row">
      <div className="section">
        <div className="flex items-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            {/* Replace the image source with your asset URL */}
            <img src="./images/coin.png" alt="Your Alt Text" className="social-icon" />
          </a>
          <div>
            <h2>Nere Coins</h2>
            <p style={{color:'#298592'}}>Earn more</p>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="flex items-center">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            {/* Replace the image source with your asset URL */}
            <img src="./images/joystick.png" alt="Your Alt Text" className="social-icon" />
          </a>
          <div>
            <h2>Game and win coins</h2>
            <p style={{color:'#298592'}}>Play Now</p>
          </div>
        </div>
      </div>
      <div className="section">
      <div className="flex items-center">
 
      <div className="flex items-center">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    {/* Replace the image source with your asset URL */}
    <img src="./images/customer-loyalty.png" alt="Your Alt Text" className="social-icon" />
  </a>
  <div className="flex items-center ml-2">
    <div>
      <h2>Loyalty offers?</h2>
      <p style={{color:'#298592'}}>Buy Again</p>
    </div>
  </div>
</div>

 
</div>
      </div>
    </div>
  );
};

export default ThreeSectionRow;
