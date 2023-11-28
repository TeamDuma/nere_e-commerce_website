"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import PriceDisplay from "../../components/PriceDisplay";


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
    <>
    <div className="container mx-auto px-4">
    <>
  {/* component */}
  <div className="flex-col min-h-screen  bg-gradient-to-br m-4">
  <nav aria-label="breadcrumb">
          <ol className="flex space-x-2">
            <li>
              <a
                href="#"
                className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700"
              >
                Category
              </a>
            </li>
            <li className="text-purple-700" aria-current="page">
             Sub category

            </li>
          </ol>
          </nav>
   

  <section className="relative pt-12 bg-blueGray-50 mt-4">
    <div className="flex flex-wrap">
    <div className="w-full md:w-4/12 ml-auto h-70  mr-auto px-4">
        <img
          alt="..."
          className="h-70 rounded-lg"
          src=
       
        {data.product.plain_image}
       />
      </div>
      <div className="w-full md:w-5/12 ml-auto mr-auto text-[#1A464C] ">
        <div className="md:pr-12">
        
          <h5 className="text-l font-semibold "> 
          Niche chocolate drink    
             {/* {data.product.name} */}
</h5>
<PriceDisplay newPrice={10} oldPrice={20}/>
          {/* <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
            The extension comes with three pre-built pages to help you get
            started faster. You can change the text and images and you're good
            to go.
          </p> */}
          <ul className="list-none mt-6">
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="fas fa-fingerprint" />
                  </span>
                </div>
                <div>
                  <h4 className="text-blueGray-500">
                    Carefully crafted components
                  </h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="fab fa-html5" />
                  </span>
                </div>
                <div>
                  <h4 className="text-blueGray-500">Amazing page examples</h4>
                </div>
              </div>
            </li>
            <li className="py-2">
              <div className="flex items-center">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="far fa-paper-plane" />
                  </span>
                </div>
                <div>
                  <h4 className="text-blueGray-500">Dynamic components</h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer className="relative  pt-8 pb-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-6/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Made with{" "}
              <a
                href="https://www.creative-tim.com/product/notus-js"
                className="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              >
                Notus JS
              </a>{" "}
              by{" "}
              <a
                href="https://www.creative-tim.com"
                className="text-blueGray-500 hover:text-blueGray-800"
                target="_blank"
              >
                {" "}
                Creative Tim
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>

          
  
  </div>
  
</>
</div>
   

      {/* <div className="relative flex max-w-full m-8  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-12 w-1/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
  <img
    src={data.product.plain_image}
    alt="image"
    className="w-full aspect-w-3 aspect-h-4 object-cover m-8"
  />
</div>

        <div className="p-6 w-full">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {data.product.name}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            Lyft launching cross-platform service this week
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </p>
          <a className="inline-block" href="#">
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </a>
        </div>
      </div> */}
    </>
  );
};

export default OngoingDetails;
