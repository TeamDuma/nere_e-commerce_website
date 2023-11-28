import React, { useEffect, useState } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://nere-server.herokuapp.com/api/categories`);
        setCategories(response.data.categories);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
<>




<div className="flex flex-nowrap">
{categories.length > 0 ? (
      categories.map((category) => (
        <div key={category.id}>
          <div>
            <img
              src={category.image}
              alt={category.name}
              className="h-full w-full object-cover"
            />
          </div>
          <h6 className="mt-2 text-sm font-medium mr-8">{category.name}</h6>
        </div>
      ))
    ) : (
      <p>Loading...</p>
    )}
</div>

</>  
  
  );
};

export default Categories;
