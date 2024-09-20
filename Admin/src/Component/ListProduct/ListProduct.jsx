import React, { useEffect, useState } from "react";
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const Url = "http://localhost:4000";
  const [allProduct, setAllProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInfo = async () => {
    try {
      const response = await fetch(`${Url}/allproduct`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setAllProduct(data);
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const remove_product = async (id) => {
    try {
      const response = await fetch(`${Url}/removeproduct`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error("Failed to remove product");
      }

      // Refresh the list of products
      await fetchInfo();
    } catch (error) {
      console.error("Remove product error:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="md:w-[80%] md:ml-4 bg-white md:px-5 px-6 m-5">
      <h1 className=" text-center text-black/75 font-bold text-2xl px-1 py-3">
        All Products
      </h1>
      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-6 py-4 font-bold">
        <p>Product</p>
        <p>Title</p>
        <p>New Price</p>
        <p>Old Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="md:h-[60vh] h-[75vh] overflow-auto">
        <hr />
        {allProduct.length === 0 ? (
          <p>No products available</p>
        ) : (
          allProduct.map((item, index) => (
            <div key={index} className="py-3 text-black/65 font-bold">
              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-6 items-center gap-4">
                <img
                  src={item.image}
                  className="w-14 lg:w-10"
                  alt={item.name}
                />
                <p className="font-bold lg:text-[12px] text-black/65 lg:-ml-24">
                  {item.name}
                </p>
                <p className="lg:ml-10 lg:text-[12px]">${item.new_price}</p>
                <p className="lg:ml-10 lg:text-[12px]">${item.old_price}</p>
                <p className="lg:text-[12px]">{item.category}</p>
                <img
                  src={cross_icon}
                  alt="Remove"
                  onClick={() => remove_product(item.id)}
                  className="w-3 h-3 cursor-pointer"
                />
              </div>
              {/* Mobile Layout */}
              <div className="lg:hidden flex flex-col py-3 border-b border-gray-200">
                <div className="flex items-center relative">
                  <img src={item.image} className="w-24" alt={item.name} />
                  <img
                    src={cross_icon}
                    alt="Remove"
                    onClick={() => remove_product(item.id)}
                    className="absolute right-0 top-0 w-6 h-6 cursor-pointer"
                  />
                </div>
                <p className="font-bold text-black/65 mt-2">{item.name}</p>
                <p className="text-black/65">New Price: ${item.new_price}</p>
                <p className="text-black/65">Old Price: ${item.old_price}</p>
                <p className="text-black/65">Category: {item.category}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListProduct;
