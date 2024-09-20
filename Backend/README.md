<!-- this is the demo code first we use

// const PORT = 4000;
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');
// const { log } = require('console');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// const mongoURI = "mongodb+srv://autizuber789:autizuber789@cluster0.isnyx.mongodb.net/e-commerce?retryWrites=true&w=majority";


// mongoose.connect(mongoURI)
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Routes Testing
// app.get("/", (req, res) => {
//   res.send("Express App is Running on Server");
// });

// // Ensure the 'upload/images' directory exists
// const uploadDir = path.join(__dirname, 'upload/images');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// const Storage = multer.diskStorage({
//   destination: uploadDir,
//   filename: (req, file, cb) => {
//     cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//   }
// });

// const upload = multer({ storage: Storage });

// //Product Schema

// const Product =mongoose.model("Product",{
//   id:{
//     type : Number,
//     required : true,
//   },
//   name:{
//     type : String,
//     required : true,
//   },
//   image : {
//     type : String,
//     required : true,
//   },
//   category : {
//     type : String,
//     required : true,
//   },
//   new_price : {
//     type : Number,
//     required : true,
//   },
//   old_price : {
//     type : Number,
//     required : true,
//   },
//   date : {
//     type : Date,
//     default : Date.now,
//   },
//   alivable : {
//     type : Boolean,
//     default : true,
//   }
// })

// app.post("/addproduct",async (req,res)=>{

//   let prod = await Product.find({});
//   let id;
//   if(prod.length>0){
//     let letest_product_arr = prod.slice(-1);
//     let last_product = letest_product_arr[0];
//     id = last_product.id +1;
//   } else {
//     id = 1;
//   }

//   const product = new Product({
//     id:id,
//     name:req.body.name,
//     image : req.body.image,
//     category : req.body.category,
//     new_price : req.body.new_price,
//     old_price : req.body.old_price,
//   })
//   console.log(product);
//   await product.save();
//   console.log("Save");
//   res.json({
//     success : true,
//     name : req.body.name,
//   })
// })

// // Crating API For deleting Product

// app.post("/removeproduct",async (req,res)=>{
//   await Product.findOneAndDelete({id:req.body.id});
//   console.log("Remove");
//   res.json({
//     success :true,
//     name:req.body.name,
//   })
// })

// //Creating Api For Gating All Product

// app.get("/allproduct",async (req,res)=>{
//       let products = await Product.find({});
//       console.log("All Product Fetched");
//       res.send(products);
// })

// // Serve static files from 'upload/images'
// app.use("/images", express.static(uploadDir));

// // Upload endpoint for image
// app.post("/upload", upload.single('product'), (req, res) => {
//   res.json({
//     success: 1,
//     image_url: `http://localhost:${PORT}/images/${req.file.filename}`
//   });
// });

// // Start server
// app.listen(PORT, (error) => {
//   if (!error) {
//     console.log(`Server Running on ${PORT}`);
//   } else {
//     console.error(`Error: ${error}`);
//   }
// });


// const PORT = 4000;
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// const mongoURI = "mongodb+srv://autizuber789:autizuber789@cluster0.isnyx.mongodb.net/e-commerce?retryWrites=true&w=majority";

// mongoose.connect(mongoURI)
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => console.error('MongoDB connection error:', err));

// // Routes Testing
// app.get("/", (req, res) => {
//   res.send("Express App is Running on Server");
// });

// // Ensure the 'upload/images' directory exists
// const uploadDir = path.join(__dirname, 'upload/images');
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// const Storage = multer.diskStorage({
//   destination: uploadDir,
//   filename: (req, file, cb) => {
//     cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
//   }
// });

// const upload = multer({ storage: Storage });

// // Product Schema
// const Product = mongoose.model("Product", new mongoose.Schema({
//   id: {
//     type: Number,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   new_price: {
//     type: Number,
//     required: true,
//   },
//   old_price: {
//     type: Number,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   alivable: {
//     type: Boolean,
//     default: true,
//   }
// }));

// app.post("/addproduct", async (req, res) => {
//   try {
//     // Validate request body
//     const { name, image, category, new_price, old_price } = req.body;

//     if (!name || !image || !category || !new_price || !old_price) {
//       return res.status(400).json({
//         success: false,
//         message: 'Missing required fields'
//       });
//     }

//     let prod = await Product.find({});
//     let id;
//     if (prod.length > 0) {
//       let latest_product_arr = prod.slice(-1);
//       let last_product = latest_product_arr[0];
//       id = last_product.id + 1;
//     } else {
//       id = 1;
//     }

//     const product = new Product({
//       id: id,
//       name: name,
//       image: image,
//       category: category,
//       new_price: new_price,
//       old_price: old_price,
//     });

//     await product.save();
//     res.json({
//       success: true,
//       name: name,
//     });
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({
//       success: false,
//       message: 'An error occurred while adding the product.'
//     });
//   }
// });

// // Creating API For deleting Product
// app.post("/removeproduct", async (req, res) => {
//   try {
//     await Product.findOneAndDelete({ id: req.body.id });
//     res.json({
//       success: true,
//       name: req.body.name,
//     });
//   } catch (error) {
//     console.error("Error removing product:", error);
//     res.status(500).json({
//       success: false,
//       message: 'An error occurred while removing the product.'
//     });
//   }
// });

// // Creating API For Getting All Products
// app.get("/allproduct", async (req, res) => {
//   try {
//     let products = await Product.find({});
//     res.send(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({
//       success: false,
//       message: 'An error occurred while fetching the products.'
//     });
//   }
// });

// // Serve static files from 'upload/images'
// app.use("/images", express.static(uploadDir));

// // Upload endpoint for image
// app.post("/upload", upload.single('product'), (req, res) => {
//   res.json({
//     success: 1,
//     image_url: `http://localhost:${PORT}/images/${req.file.filename}`
//   });
// });

// // Start server
// app.listen(PORT, (error) => {
//   if (!error) {
//     console.log(`Server Running on ${PORT}`);
//   } else {
//     console.error(`Error: ${error}`);
//   }
// }); -->
