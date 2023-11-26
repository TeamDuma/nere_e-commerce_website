import axios from "axios";
import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import GroupRowRenderItem from "../ongoingPurchases/GroupRowRenderItem";

const SideModal = ({ closeModal }) => {
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
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, closeModal]);

  return (
    <div
      ref={modalRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "30%",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        zIndex: 1001,
        overflowY: "auto",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>
        Ongoing Groups
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <div>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {filteredData && (
            <div className="overflow-x-auto">
              <div className=" justify-center space-x-4">
                {filteredData.map((item: any) => (
                  <Link href={`/product/${item.id}`}>
                    <div
                      key={item.id}
                      className="py-6 flex-shrink-0 w-full md:w-1/4"
                    >
                      <GroupRowRenderItem item={item} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default SideModal;
