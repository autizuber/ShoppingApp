# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!-- this is the demo code
Add Product Demp Code

// import React, { useState } from "react";
// import Upload from "../../assets/upload_area.svg";

// const AddProduct = () => {
//   const [image, setImage] = useState(false);
//   const [product, setProduct] = useState({
//     name: "",
//     image: "",
//     category: "",
//     new_price: "",
//     old_price: "",
//   });

//   const handelImage = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handelChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handelClick = async () => {
//     console.log(product);
//     let responseData;
//     let products = product;
//     let fomdata = new FormData();
//     fomdata.append("product", image);

//     await fetch("http://localhost:4000/upload", {
//       method: "POST",
//       headers: {
//         Action: "application/json",
//       },
//       body: fomdata,
//     })
//       .then((res) => res.json())
//       .then((data) => (responseData = data));

//     if (responseData.success) {
//       product.image = responseData.image_url;
//       console.log(product);
//       await fetch("http://localhost:4000/allproduct", {
//         method: "POST",
//         headers: {
//           Action: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(product),
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           data.success
//             ? alert("Product Added Success")
//             : alert("Faild for adding Product");
//         });
//     }
//   };

//   return (
//     <div className="md:w-[45vw] md:m-6 px-5 mt-4 md:px-6  bg-white ">
//       <div className="md:py-2 py-2">
//         <p className="mb-2 text-black/80 font-semibold">Product Title</p>
//         <input
//           type="text"
//           placeholder="Type here"
//           name="name"
//           value={product.name}
//           onChange={handelChange}
//           className="input input-bordered w-full max-w-full bg-white ring-1 ring-zinc-300"
//         />
//       </div>
//       <div className="flex gap-5 md:py-2 py-2">
//         <div className="w-full">
//           <p className="mb-2 text-black/80 font-semibold">Price</p>
//           <input
//             type="text"
//             placeholder="Type here"
//             name="old_price"
//             value={product.old_price}
//             onChange={handelChange}
//             className="input input-bordered w-full max-w-full bg-white ring-1 ring-zinc-300"
//           />
//         </div>
//         <div className="w-full">
//           <p className="mb-2 text-black/80 font-semibold">Offer Price</p>
//           <input
//             type="text"
//             placeholder="Type here"
//             name="new_price"
//             value={product.new_price}
//             onChange={handelChange}
//             className="input input-bordered w-full max-w-full bg-white ring-1 ring-zinc-300"
//           />
//         </div>
//       </div>
//       <div className="md:py-2 py-2">
//         <p className="mb-2 text-black/80 font-semibold">Product Category</p>
//         <select
//           value={product.category}
//           onChange={handelChange}
//           name="category"
//           className="select select-ghost w-full max-w-40 ring-1 ring-zinc-300 bg-white"
//         >
//           <option className="w-fit" value="women">
//             Women
//           </option>
//           <option className="w-fit" value="men">
//             Men
//           </option>
//           <option className="w-fit" value="kid">
//             Kid
//           </option>
//         </select>
//       </div>
//       <div className="md:py-2 py-2 w-fit">
//         <label htmlFor="file-input">
//           <img
//             className="rounded-lg"
//             width={110}
//             src={image ? URL.createObjectURL(image) : Upload}
//             alt=""
//           />
//         </label>
//         <input
//           onChange={handelImage}
//           type="file"
//           name="image"
//           id="file-input"
//           hidden
//         />
//       </div>
//       <div>
//         <button
//           onClick={handelClick}
//           className="btn btn-primary w-32 text-white"
//         >
//           Add
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;

// import React, { useState } from "react";
// import Upload from "../../assets/upload_area.svg";

// const AddProduct = () => {
//   const [image, setImage] = useState(null);
//   const [product, setProduct] = useState({
//     name: "",
//     image: "",
//     category: "",
//     new_price: "",
//     old_price: "",
//   });

//   const handleImage = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleClick = async () => {
//     try {
//       console.log(product);
//       let responseData;
//       let formData = new FormData();
//       formData.append("product", image);

//       // Upload image
//       const uploadResponse = await fetch("http://localhost:4000/upload", {
//         method: "POST",
//         body: formData,
//       });

//       responseData = await uploadResponse.json();

//       if (responseData.success) {
//         product.image = responseData.image_url;
//         console.log(product);

//         // Add product
//         const addProductResponse = await fetch(
//           "http://localhost:4000/addproduct",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(product),
//           }
//         );

//         const addProductData = await addProductResponse.json();
//         addProductData.success
//           ? alert("Product Added Successfully")
//           : alert("Failed to Add Product");
//       } else {
//         alert("Image Upload Failed");
//       }
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("An error occurred while adding the product.");
//     }
//   };

//   return (
//     <div className="md:w-[45vw] md:m-6 px-5 mt-4 md:px-6 bg-white py-10 md:py-2">
//       <div className="md:py-2 py-2">
//         <p className="mb-2 text-black/80 font-semibold">Product Title</p>
//         <input
//           type="text"
//           placeholder="Type here"
//           name="name"
//           value={product.name}
//           onChange={handleChange}
//           className="input input-bordered w-full max-w-full bg-white ring-1 ring-zinc-300"
//         />
//       </div>
//       <div className="flex gap-5 md:py-2 py-2">
//         <div className="w-full">
//           <p className="mb-2 text-black/80 font-semibold">Price</p>
//           <input
//             type="text"
//             placeholder="Type here"
//             name="old_price"
//             value={product.old_price}
//             onChange={handleChange}
//             className="input input-bordered w-full max-w-full bg-white ring-1 ring-zinc-300"
//           />
//         </div>
//         <div className="w-full">
//           <p className="mb-2 text-black/80 font-semibold">Offer Price</p>
//           <input
//             type="text"
//             placeholder="Type here"
//             name="new_price"
//             value={product.new_price}
//             onChange={handleChange}
//             className="input input-bordered w-full max-w-full bg-white ring-1 ring-zinc-300"
//           />
//         </div>
//       </div>
//       <div className="md:py-2 py-2">
//         <p className="mb-2 text-black/80 font-semibold">Product Category</p>
//         <select
//           value={product.category}
//           onChange={handleChange}
//           name="category"
//           className="select select-ghost w-full max-w-40 ring-1 ring-zinc-300 bg-white"
//         >
//           <option className="w-fit" value="women">
//             Women
//           </option>
//           <option className="w-fit" value="men">
//             Men
//           </option>
//           <option className="w-fit" value="kid">
//             Kid
//           </option>
//         </select>
//       </div>
//       <div className="md:py-2 py-2 w-fit">
//         <label htmlFor="file-input">
//           <img
//             className="rounded-lg"
//             width={110}
//             src={image ? URL.createObjectURL(image) : Upload}
//             alt=""
//           />
//         </label>
//         <input
//           onChange={handleImage}
//           type="file"
//           name="image"
//           id="file-input"
//           hidden
//         />
//       </div>
//       <div>
//         <button
//           onClick={handleClick}
//           className="btn btn-primary w-32 text-white"
//         >
//           Add
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddProduct; -->

<!--
Product List Demo Code
// import React, { useEffect, useState } from "react";
// import cross_icon from "../../assets/cross_icon.png";

// const ListProduct = () => {
//   const [allProduct, setAllProduct] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchInfo = async () => {
//     try {
//       const response = await fetch("http://localhost:4000/allproduct");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       console.log("Fetched data:", data); // Debugging: Check the structure of the fetched data
//       setAllProduct(data);
//     } catch (error) {
//       console.error("Fetch error:", error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const remove_product = async (id) => {
//     alert("btn click");
//     await fetch("http://localhost:4000/removeproduct", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Contect-Type": "application/json",
//       },
//       body: JSON.stringify({ id: id }),
//     });

//     await fetchInfo();
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="md:w-[80%] md:ml-4 bg-white md:px-5 px-6 m-5">
//       <h1 className=" text-center text-black/75 font-bold text-2xl px-1 py-3">
//         All Products
//       </h1>
//       {/* Desktop View */}
//       <div className="hidden lg:grid grid-cols-6 py-4 font-bold">
//         <p>Product</p>
//         <p>Title</p>
//         <p>New Price</p>
//         <p>Old Price</p>
//         <p>Category</p>
//         <p>Remove</p>
//       </div>
//       <div className="md:h-[60vh] h-[75vh] overflow-auto">
//         <hr />
//         {allProduct.length === 0 ? (
//           <p>No products available</p>
//         ) : (
//           allProduct.map((item, index) => (
//             <div key={index} className="py-3 text-black/65 font-bold">
//               {/* Desktop Layout */}
//               <div className="hidden lg:grid grid-cols-6 items-center gap-4">
//                 <img
//                   src={item.image}
//                   className="w-14 lg:w-10"
//                   alt={item.name}
//                 />
//                 <p className="font-bold lg:text-[12px] text-black/65 lg:-ml-24">
//                   {item.name}
//                 </p>
//                 <p className="lg:ml-10 lg:text-[12px]">${item.new_price}</p>
//                 <p className="lg:ml-10 lg:text-[12px]">${item.old_price}</p>
//                 <p className="lg:text-[12px]">{item.category}</p>
//                 <img
//                   src={cross_icon}
//                   alt="Remove"
//                   onClick={() => remove_product(item.id)}
//                   className="w-3 h-3 cursor-pointer"
//                 />
//               </div>
//               {/* Mobile Layout */}
//               <div className="lg:hidden flex flex-col py-3 border-b border-gray-200">
//                 <div className="flex items-center relative">
//                   <img src={item.image} className="w-24" alt={item.name} />
//                   <img
//                     src={cross_icon}
//                     alt="Remove"
//                     className="absolute right-0 top-0 w-6 h-6 cursor-pointer"
//                   />
//                 </div>
//                 <p className="font-bold text-black/65 mt-2">{item.name}</p>
//                 <p className="text-black/65">New Price: ${item.new_price}</p>
//                 <p className="text-black/65">Old Price: ${item.old_price}</p>
//                 <p className="text-black/65">Category: {item.category}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default ListProduct; -->
