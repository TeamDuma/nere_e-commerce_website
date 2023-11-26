import React from "react";


const Categories = () => {
 
    return (

      <>
  <div className="flex flex-wrap -mx-3 mb-5">
    <div className="w-full max-w-full px-3 mb-6  mx-auto">
      <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem]  bg-white m-5">
        {/* card body  */}
        <div className="flex-auto block py-4 px-9">
          <div>
         
            <div className="flex flex-wrap w-full">
            {data[0].categories.map((category) => (
              <div className="flex flex-col mr-5 text-center mb-11 lg:mr-12">
                <div className="inline-block mb-4 relative shrink-0 rounded-[.95rem]">
                  <img
                    className="inline-block shrink-0 rounded-[.95rem] w-[150px] h-[150px]"
                    src={category.image}                    alt="avarat image"
                  />
                </div>
                <div className="text-center">
                <a
  href="javascript:void(0)"
  className="text-dark text-sm hover:text-primary transition-colors duration-200 ease-in-out"
>
                    {category.name}  
                  </a>
               
                </div>
              </div>
              ))}

          
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>

</>


    
 
      );
}
 
// const data=[
//     {
//         "success": true,
//         "message": "success",
//         "categories": [
//             {
//                 "id": 1,
//                 "uid": "dNmZiq9wNm3d6Wys6xSHAQ",
//                 "name": "Foodstuffs",
//                 "slug": "packaged-foods",
//                 "details": "Convenient and preserved food products ready for consumption or preparation.",
//                 "type": "Packaged foods",
//                 "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691400151/nere%20category%20images/foodstuff_gmfsnw.png",
//                 "isActive": true
//             },
//             {
//                 "id": 5,
//                 "uid": "bZg5Y5843L1D69bmX1TSCL",
//                 "name": "Baby care",
//                 "slug": "baby-care",
//                 "details": "Essential products designed to support the well-being and development of infants and young children.",
//                 "type": "baby care",
//                 "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691400151/nere%20category%20images/babycare_ybfbgj.png",
//                 "isActive": true
//             },
//             {
//                 "id": 4,
//                 "uid": "gPpHGEgUx5Tenwuxy1QUxS",
//                 "name": "Baby food",
//                 "slug": "baby-food",
//                 "details": "Nutritious and specially formulated food options for infants and young children.",
//                 "type": "foods",
//                 "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691401655/nere%20category%20images/babyfood_a26nwz.png",
//                 "isActive": true
//             },
//             {
//                 "id": 2,
//                 "uid": "dKQ1yeefEaTtvVyJB3x8kH",
//                 "name": "Cooking Oils",
//                 "slug": "oils,-condiments-and-spices",
//                 "details": "Versatile and flavorful additions to enhance culinary creations.",
//                 "type": "oils",
//                 "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691400151/nere%20category%20images/cooking_oil_ro7zsm.png",
//                 "isActive": true
//             },
//             {
//                 "id": 7,
//                 "uid": "8oBbJn1WHFZXzwtNJnYBiK",
//                 "name": "Water and Beverages",
//                 "slug": "water-and-beverages",
//                 "details": "A refreshing selection of invigorating beverages, including pure water and a variety of delightful drinks to suit your taste preferences.",
//                 "type": "water and beverages",
//                 "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691400151/nere%20category%20images/beverages_ijyi93.png",
//                 "isActive": true
//             },
//             {
//                 "id": 6,
//                 "uid": "2w3ZqFJWFocyB6zTPfh3ER",
//                 "name": "Breakfast",
//                 "slug": "breakfast",
//                 "details": "A delightful array of wholesome and energizing breakfast treasures, carefully crafted to kickstart your day with a burst of flavor and vitality.",
//                 "type": "Breakfast",
//                 "image": "https://res.cloudinary.com/dshiwa02i/image/upload/v1691400151/nere%20category%20images/breakfast_ilshei.png",
//                 "isActive": true
//             }
//         ]
//     }

// ]

export default Categories ;