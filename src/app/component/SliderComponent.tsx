import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
 
    return (
      <>
      {/* component */}
      <div className="flex space-x-7">
  {data[0].categories.map((category) => (
    <div key={category.id} className="relative flex flex-col w-56 h-64 rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-12">
      <div className="relative h-32 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src={category.image}
          alt="img-blur-shadow"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {category.name}
        </h5>
      </div>
    </div>
  ))}
</div>


   
    </>
    
    
 
      );
}
 
const data=[
    {
        "success": true,
        "message": "success",
        "categories": [
            {
                "id": 1,
                "uid": "dNmZiq9wNm3d6Wys6xSHAQ",
                "name": "Foodstuffs",
                "slug": "packaged-foods",
                "details": "Convenient and preserved food products ready for consumption or preparation.",
                "type": "Packaged foods",
                "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691400151/nere%20category%20images/foodstuff_gmfsnw.png",
                "isActive": true
            },
            {
                "id": 5,
                "uid": "bZg5Y5843L1D69bmX1TSCL",
                "name": "Baby care",
                "slug": "baby-care",
                "details": "Essential products designed to support the well-being and development of infants and young children.",
                "type": "baby care",
                "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691400151/nere%20category%20images/babycare_ybfbgj.png",
                "isActive": true
            },
            {
                "id": 4,
                "uid": "gPpHGEgUx5Tenwuxy1QUxS",
                "name": "Baby food",
                "slug": "baby-food",
                "details": "Nutritious and specially formulated food options for infants and young children.",
                "type": "foods",
                "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691401655/nere%20category%20images/babyfood_a26nwz.png",
                "isActive": true
            },
            {
                "id": 2,
                "uid": "dKQ1yeefEaTtvVyJB3x8kH",
                "name": "Cooking Oils",
                "slug": "oils,-condiments-and-spices",
                "details": "Versatile and flavorful additions to enhance culinary creations.",
                "type": "oils",
                "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691400151/nere%20category%20images/cooking_oil_ro7zsm.png",
                "isActive": true
            },
            {
                "id": 7,
                "uid": "8oBbJn1WHFZXzwtNJnYBiK",
                "name": "Water and Beverages",
                "slug": "water-and-beverages",
                "details": "A refreshing selection of invigorating beverages, including pure water and a variety of delightful drinks to suit your taste preferences.",
                "type": "water and beverages",
                "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691400151/nere%20category%20images/beverages_ijyi93.png",
                "isActive": true
            },
            {
                "id": 6,
                "uid": "2w3ZqFJWFocyB6zTPfh3ER",
                "name": "Breakfast",
                "slug": "breakfast",
                "details": "A delightful array of wholesome and energizing breakfast treasures, carefully crafted to kickstart your day with a burst of flavor and vitality.",
                "type": "Breakfast",
                "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691400151/nere%20category%20images/breakfast_ilshei.png",
                "isActive": true
            }
        ]
    }

]

export default SliderComponent ;