import Link from "next/link";
import { useRouter } from "next/navigation";

const GroupRowRenderItem = ({ item }) => {
  const router = useRouter();

  const Separator = () => (
    <div style={{ height: "1px", backgroundColor: "#e0e0e0" }} />
  );

  return (
    <div className=" overflow-x-auto p-3">
      <div
        key={item.id}
        className=" items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none mx-2"
        onClick={() => router.push(`/product/${item.id}`)}
      >
        <div className=" items-center">
          <div className="">
            <img
              className="h-[83px] w-[83px] rounded-lg"
              src={item.product.image}
              alt={item.product.name}
            />
          </div>
        </div>
        <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
          {item.product.name}
        </div>
      </div>
    </div>
  );
};

export default GroupRowRenderItem;
