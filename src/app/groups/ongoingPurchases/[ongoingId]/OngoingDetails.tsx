"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import PriceDisplay from "../../components/PriceDisplay";
import Rate from "../../components/Rate";
import Range from "../../components/Range";
import MemberCount from "../../components/MemberCount";

interface OngoingDetailsProps {
  OngoingUid: string; // Assuming OngoingUid is a string based on the API response
}

const OngoingDetails: React.FC<OngoingDetailsProps> = ({ OngoingUid }) => {
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
    <div></div>
//     <>
//     <div className="container mx-auto px-4">
//   {/* component */}
//   <div className="flex-col min-h-screen  bg-gradient-to-br m-4">
//   <nav aria-label="breadcrumb">
//           <ol className="flex space-x-2">
//             <li>
//               <a
//                 href="#"
//                 className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
//               >
//                 Category
//               </a>
//             </li>
//             <li className="text-purple-700" aria-current="page">
//              Sub category

//             </li>
//           </ol>
//           </nav>
   

//   <section className="relative pt-12 bg-blueGray-50 mt-4">
//     <div className="flex flex-wrap">
//     <div className="w-full md:w-4/12 ml-auto h-70  mr-auto px-4">
//         <img
//           alt="..."
//           className="max-w-full h-70 rounded-lg shadow-lg"
//           src=
       
//         {data.product.plain_image}
//        />
//       </div>
//       <div className="w-full md:w-5/12 ml-auto mr-auto text-[#1A464C] ">
//         <div className="md:pr-12">
        
//           <h5 className="text-l font-semibold "> 
//           Niche chocolate drink    
//              {/* {data.product.name} */}
// </h5>
// <Rate/>
// <PriceDisplay newPrice={10} oldPrice={20}/>
// </div>
// </div>
// </div>
// </section>
// </div>
//     </>
  )
};

export default OngoingDetails;
