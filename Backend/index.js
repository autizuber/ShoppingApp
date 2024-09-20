

require('dotenv').config(); // Load environment variables

const PORT = process.env.PORT || 4000;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

const Url = "http://localhost:4000";

// MongoDB connection
const mongoURI = process.env.MONGODB_URI; // Use the environment variable
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Ensure the 'upload/images' directory exists
const uploadDir = path.join(__dirname, 'upload/images');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const Storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: Storage });

// Product Schema
const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true }
});

// User Schema
const Users = mongoose.model('User', {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cartData: { type: Object, default: {} },
  date: { type: Date, default: Date.now }
});

// Routes
app.get("/", (req, res) => {
  res.send("Express App is Running on Server");
});

app.post("/addproduct", async (req, res) => {
  try {
    const { name, image, category, new_price, old_price } = req.body;

    if (!name || !image || !category || !new_price || !old_price) {
      return res.status(400).json({ success: false, message: 'Please fill all required fields.' });
    }

    let prod = await Product.find({});
    let id = prod.length > 0 ? prod.slice(-1)[0].id + 1 : 1;

    const product = new Product({ id, name, image, category, new_price, old_price });
    await product.save();
    res.json({ success: true, message: 'Product Added Successfully' });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ success: false, message: 'An error occurred while adding the product.', error: error.message });
  }
});

app.post("/removeproduct", async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    res.json({ success: true, message: 'Product removed successfully' });
  } catch (error) {
    console.error("Error removing product:", error);
    res.status(500).json({ success: false, message: 'An error occurred while removing the product.' });
  }
});

app.get("/allproduct", async (req, res) => {
  try {
    let products = await Product.find({});
    res.send(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: 'An error occurred while fetching the products.' });
  }
});

app.get("/newcollection", async (req, res) => {
  let product = await Product.find({});
  let newCollection = product.slice(1).slice(-8);
  console.log("New Collection Product fetched");
  res.send(newCollection);
});

app.get("/popularinwomen", async (req, res) => {
  let product = await Product.find({ category: 'women' });
  let popular_product_in_women = product.slice(0, 4);
  console.log("Popular product in Women is Fetched");
  res.send(popular_product_in_women);
});

const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ errors: "Please authenticate using a valid user token" });
  } 
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET); // Use the environment variable
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ errors: "Please authenticate using a valid user token" });
  }
}

app.post("/addtocart", fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] = (userData.cartData[req.body.itemId] || 0) + 1; // Ensure item exists
  await Users.findByIdAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("Added");
});

app.post("/removefromcart", fetchUser, async (req, res) => {
  console.log("Removed", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0) {
    userData.cartData[req.body.itemId] -= 1;
  }
  await Users.findByIdAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("Removed");
});

app.post("/getcart", fetchUser, async (req, res) => {
  console.log("get cart");
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});


app.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields.' });
    }

    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User with this email already exists.' });
    }

    const cart = {};
    for (let i = 0; i < 300; i++) {
      cart[i] = 0;
    }

    const user = new Users({ name, email, password, cartData: cart });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Use the environment variable
    res.json({ success: true, token });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ success: false, message: 'An error occurred while signing up.', error: error.message });
  }
});

// User login endpoint
app.post('/login', async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = { user: { id: user.id } };
      const token = jwt.sign(data, process.env.JWT_SECRET); // Use the environment variable
      res.json({ success: true, token });
    } else {
      res.json({ success: false, errors: "Wrong Password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong Email Id" });
  }
});

app.use("/images", express.static(uploadDir));

app.post("/upload", upload.single('product'), (req, res) => {
  if (req.file) {
    res.json({
      success: 1,
      image_url: `${Url}/images/${req.file.filename}`
    });
  } else {
    res.status(400).json({ success: 0, message: 'Image upload failed' });
  }
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server Running on ${PORT}`);
  } else {
    console.error(`Error: ${error}`);
  }
});
