export const UpdateCart = async (cartItems: any) => {
  try {
    // Replace the URL with your actual API endpoint
    const response = await fetch(
      "https://nere-server.herokuapp.com/api/cart/update",
      {
        method: "PATCH", // or 'PUT' or 'PATCH' depending on your API
        headers: {
          "Content-Type": "application/json",
          // Add any other headers your API requires
        },
        body: JSON.stringify({
          customer_id: 1,
          cart_object: JSON.stringify(cartItems),
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("API Response:", responseData);

    // Set the data in state
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const CheckOut = async (cartItems: any) => {
  try {
    // Replace the URL with your actual API endpoint
    const response = await fetch(
      "https://nere-server.herokuapp.com/api/cart/checkout",
      {
        method: "POST", // or 'PUT' or 'PATCH' depending on your API
        headers: {
          "Content-Type": "application/json",
          // Add any other headers your API requires
        },
        body: JSON.stringify({
          customerID: 1,
          total: 100,
          cartObject: cartItems,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("API Response:", responseData);

    // Set the data in state
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
