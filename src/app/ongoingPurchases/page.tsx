"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import GroupRowRenderItem from "./GroupRowRenderItem";

const OngoingPurchases: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://nere-server.herokuapp.com/api/groups"
        );
        setData(response.data);
      } catch (error) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data?.filter(
    (item) =>
      item.status === "Open" && item.isPaid === true && item.type === "Public"
  );
  console.log("filteredData", filteredData);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {filteredData && (
        <div className="overflow-x-auto">
          <div className="flex flex-row flex-nowrap justify-center space-x-4">
            {filteredData.map((item: any) => (
              <div key={item.id} className="py-6 flex-shrink-0 w-full md:w-1/4">
                <GroupRowRenderItem item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OngoingPurchases;
