import Link from "next/link";
import { useRouter } from "next/navigation";

const GroupRowRenderItem = ({ item }) => {
  const router = useRouter();

  return (
    <div className="h-10">
      <div className="overflow-x-auto p-3">
        <div
          key={item.id}
          className="flex-shrink-0 w-48 bg-white p-3 rounded-xl shadow-xl cursor-pointer transition transform hover:scale-105"
          onClick={() =>
            // console.log('{item.uid}',item.uid)
            router.push(`/groups/ongoingPurchases/${item.uid}`)
          
          }
        >
          <div className="flex items-center justify-center mb-2">
            <img
              className="h-20 w-20 rounded-lg"
              src={item.product.image}
              alt={item.product.name}
            />
          </div>
          <div className="text-gray-600 dark:text-white text-center">
            {item.product.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupRowRenderItem;
