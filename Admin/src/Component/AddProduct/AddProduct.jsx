import React, { useState } from "react";
import Upload from "../../assets/upload_area.svg";

const AddProduct = () => {
  const Url = "http://localhost:4000";
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    image: "",
    category: "",
    new_price: "",
    old_price: "",
  });

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    try {
      if (
        !product.name ||
        !product.category ||
        !product.new_price ||
        !product.old_price ||
        !image
      ) {
        alert("Please fill all required fields and upload an image.");
        return;
      }

      const formData = new FormData();
      formData.append("product", image);

      // Upload image
      const uploadResponse = await fetch(`${Url}/upload`, {
        method: "POST",
        body: formData,
      });

      const responseData = await uploadResponse.json();

      if (responseData.success) {
        product.image = responseData.image_url;

        // Add product
        const addProductResponse = await fetch(`${Url}/addproduct`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        });

        const addProductData = await addProductResponse.json();
        if (addProductData.success) {
          alert("Product Added Successfully");
          setProduct({
            name: "",
            image: "",
            category: "",
            new_price: "",
            old_price: "",
          });
          setImage(null);
        } else {
          alert("Failed to Add Product: " + addProductData.message);
        }
      } else {
        alert("Image Upload Failed");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    }
  };

  return (
    <div className="md:w-[45vw] md:m-6 px-5 mt-4 md:px-6 bg-white py-10 md:py-2">
      <div className="md:py-2 py-2">
        <p className="mb-2 text-black/80 font-semibold">Product Title</p>
        <input
          type="text"
          placeholder="Type here"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="input input-bordered w-full max-w-full bg-white ring-1 ring-zinc-300"
        />
      </div>
      <div className="flex gap-5 md:py-2 py-2">
        <div className="w-full">
          <p className="mb-2 text-black/80 font-semibold">Price</p>
          <input
            type="text"
            placeholder="Type here"
            name="old_price"
            value={product.old_price}
            onChange={handleChange}
            className="input input-bordered w-full max-w-full bg-white ring-1 ring-zinc-300"
          />
        </div>
        <div className="w-full">
          <p className="mb-2 text-black/80 font-semibold">Offer Price</p>
          <input
            type="text"
            placeholder="Type here"
            name="new_price"
            value={product.new_price}
            onChange={handleChange}
            className="input input-bordered w-full max-w-full bg-white ring-1 ring-zinc-300"
          />
        </div>
      </div>
      <div className="md:py-2 py-2">
        <p className="mb-2 text-black/80 font-semibold">Product Category</p>
        <select
          value={product.category}
          onChange={handleChange}
          name="category"
          className="select select-ghost w-full max-w-40 ring-1 ring-zinc-300 bg-white"
        >
          <option value="">Select Category</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="md:py-2 py-2 w-fit">
        <label htmlFor="file-input">
          <img
            className="rounded-lg"
            width={110}
            src={image ? URL.createObjectURL(image) : Upload}
            alt="Product preview"
          />
        </label>
        <input
          onChange={handleImage}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <div>
        <button
          onClick={handleClick}
          className="btn btn-primary w-32 text-white"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
