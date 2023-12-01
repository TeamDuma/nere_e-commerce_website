"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import PriceDisplay from "../../components/PriceDisplay";
import Rate from "../../components/Rate";
import Range from "../../components/Range";
import MemberCount from "../../components/MemberCount";
import { addToCart } from "@/redux/shoppingSlice";
import { useDispatch } from "react-redux";

interface OngoingDetailsProps {
  OngoingUid: string; // Assuming OngoingUid is a string based on the API response
}

const OngoingDetails: React.FC<OngoingDetailsProps> = ({ OngoingUid }) => {
  const dispatch = useDispatch();

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Modify the URL to include the OngoingUid
        const response = await axios.get(
          `https://nere-server.herokuapp.com/api/groups/${OngoingUid.ongoingId}`,
          { ongoingId: OngoingUid.ongoingId }
        );

        setData(response.data);
        console.log("response in OngoingDetails", response);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [OngoingUid]); // Add OngoingUid as a dependency to re-fetch data when it changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <main className="my-8">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center">
            <div className="w-full h-64 md:w-1/2 lg:h-96">
              <img
                className="h-full rounded-md object-cover max-w-lg mx-auto "
                src={data.product.plain_image}
                alt="plain_image"
              />
            </div>
            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
              <h3 className="text-gray-700 uppercase text-lg">
                {data.product.name}
              </h3>
              <span className="text-gray-500 mt-3">$125</span>
              <hr className="my-3" />
              <div className="mt-2">
                <label className="text-gray-700 text-sm" htmlFor="count">
                  Count:
                </label>
                <div className="flex items-center mt-1">
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <span className="text-gray-700 text-lg mx-2">20</span>
                  <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              {data.product.variants !== null && (
  <div className="mt-3">
    <label className="text-gray-700 text-sm" htmlFor="count">
      Variants:
    </label>
    <div className="flex items-center mt-1">
      <button className="h-5 w-5 rounded-full bg-blue-600 border-2 border-blue-200 mr-2 focus:outline-none" />
      <button className="h-5 w-5 rounded-full bg-teal-600 mr-2 focus:outline-none" />
      <button className="h-5 w-5 rounded-full bg-pink-600 mr-2 focus:outline-none" />
    </div>
  </div>
)}
              <div className="flex items-center mt-6">
                <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                  Order Now
                </button>
                <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        {/* Items related to your cart */}
        </div>
      </main>
   
    </>
  );
};
export default OngoingDetails;
