import Link from "next/link";
import { useRouter } from "next/navigation";
import PriceDisplay from "./PriceDisplay";

const GroupRowRenderItem = ({ item }) => {
  const router = useRouter();

  // console.log("GroupRowRenderItem", (item.product.price)-(item.product.sale_price))

  return (
    <div
    key={item.id}
    onClick={() => router.push(`/groups/ongoingPurchases/${item.uid}`)}
    className="flex items-center p-4 bg-white shadow-md rounded-lg"
    style={{ width: "450px" }} // Set the fixed width for the card
  >
  <div className="flex-shrink-0 w-1/3 relative">
  <img
    src={item.product.plain_image}
    alt={item.name}
    className="w-full h-32 object-cover rounded-lg"
    style={{ width: "100px" }} // Set the fixed width for the image
  />
  <div className="absolute top-0 right-0 p-1 bg-orange-500 text-white font-bold">
Save  % </div>
</div>
    {/* Product Details on the Right */}
    <div className="ml-4 flex-1">
      <h2 className="text-lg font-bold text-gray-900">{item.product.id}</h2>
      <p className="mt-1 text-xs text-gray-700">{item.size}</p>
      {/* ... other product details ... */}
    </div>
  </div>
    // <div
    //   key={item.id}
    //   onClick={() => router.push(`/groups/ongoingPurchases/${item.uid}`)}
    //   className="flex items-center p-4 bg-white shadow-md rounded-lg"
    // >
    //   <div className="flex-shrink-0 w-1/4">
    //     <img
    //       src={item.product.plain_image}
    //       alt={item.name}
    //       className="w-full h-20 object-cover rounded-lg"
    //     />
    //     <div className="absolute top-0 left-0 p-2 bg-orange-500 text-white font-bold">
    //       {item.product.price - item.product.sale_price * 100}
    //     </div>
    //   </div>
    //   {/* Product Details on the Right */}
    //   <div className="ml-4 flex-1">
    //     <h2 className="text-lg font-bold text-gray-900">{item.product.id}</h2>
    //     <p className="mt-1 text-xs text-gray-700">{item.size}</p>
    //     {/* ... other product details ... */}
    //   </div>
    // </div>
  );
};

export default GroupRowRenderItem;
