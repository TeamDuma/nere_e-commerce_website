"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import GroupRowRenderItem from "../components/GroupRowRenderItem";

const OngoingPurchases: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://nere-server.herokuapp.com/api/groups?type=Public&status=Open"
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

  console.log("filteredData", data);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
  <div className="overflow-x-auto">
  <div className="flex flex-nowrap justify-start">
    {data.map((item: any) => (
      <div key={item.id} className="flex-shrink-0 mr-4">
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
