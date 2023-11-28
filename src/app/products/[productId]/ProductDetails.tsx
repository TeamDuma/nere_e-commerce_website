 "use client"

interface ProductDetailsProps {
  productId:number;
}


const ProductDetails: React.FC<ProductDetailsProps> = ({  productId}) => {
    console.log("productsData",productId)


//   src={product.product.plain_image}
  return (
<>
  {/* component */}
  <div className="flex flex-col h-screen w-full">
  hi
  </div>
</>


   
  );
};

export default ProductDetails;
