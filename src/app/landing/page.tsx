import { FaRegUserCircle } from "react-icons/fa";
import TwoSectionRow from "./TwoSectionRow";
import Container from "@/components/Container";
import Banner from "@/components/Banner";
import ThreeSectionRow from "./ThreeSectionRow";
import Carousel from "./Carousel";



const Landing: React.FC = () => {
    return (
                <Container>

        <TwoSectionRow >
          <div>
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
          </div>
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
        </TwoSectionRow>
        <Banner/>

      <ThreeSectionRow>

    
<div className="flex items-center"  >
<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
<FaRegUserCircle className="social-icon" />
</a>
<div>
<h2>Nere Coins</h2>
<p>Earn more</p>
</div>
</div>
<div className="flex items-center"  >
<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
<FaRegUserCircle className="social-icon" />
</a>
<div>
<h2>Game and win coins</h2>
<p>Play Now</p>
</div>

</div>
<div className="flex items-center"  >
<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
<FaRegUserCircle className="social-icon" />
</a>
<div>
<h2>Loyalty offers?</h2>
<p>Buy Again</p>
</div>

</div>
</ThreeSectionRow> 
{/* <Carousel/> */}

</Container>
    );
  };


 
export default Landing;