
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const { type } = require("os");
const port = 4000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Database connection with MongoDB
mongoose.connect("mongodb+srv://regiremiltan2002:Remiltan123@cluster1.r1mu7gg.mongodb.net/");

// Connect with homepage
app.get("/", (req, res) => {
  res.send("Express app is running");
});

// Image store engine
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});

const upload = multer({ storage: storage });

// Creating upload endpoint for images
app.use('/images', express.static('upload/images'));
app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// Creating schema for products
const Products = mongoose.model("Product", {
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  new_price: {
    type: Number,
    required: true
  },
  old_price: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: { // Product is available or not
    type: Boolean,
    default: true
  },
});

// Creating API for adding a product
app.post("/addproduct", async (req, res) => {
  // Generate automatically id
  const products_indb = await Products.find({});
  let id;
  // If there are existing products, find the last product's ID and increment it
  if (products_indb.length > 0) {
    const lastProduct = products_indb[products_indb.length - 1];
    id = lastProduct.id + 1;
  } else {
    id = 1; // If no products exist, start with ID 1
  }

  const new_product = new Products({ // Using the Product model to create a new product
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  // Save the new product in the MongoDB
  await new_product.save()
    .then(() => {
      console.log("Saved");
    })
    .catch((err) => {
      console.log("Error occurred: " + err);
    });

  res.json({
    success: true,
    name: req.body.name
  });
});

// Creating API for deleting a product
app.post("/removeproduct", async (req, res) => {
  await Products.findOneAndDelete({ id: req.body.id });
  console.log('Removed');
  res.json({
    success: true,
    name: req.body.name
  });
});

// Creating API for getting all products
app.get("/allproduct", async (req, res) => {
  let Allproducts = await Products.find({});
  console.log("All products fetched");
  // Send all products to frontend
  res.send(Allproducts);
});


//Creating the Schema for user
const Users = mongoose.model("Users",{
  name:{
    type:String
  },
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String
  },
  cartdata:{
    type:Object
  },
  date:{
    type:Date,
    default:Date.now,
  }
}) 

//Creating the API to registing the user
app.post("/Signup",async(req,res)=>{
  let check = await Users.findOne({email:req.body.email});
  if(check){
    return res.status(400).json({success:false,errors:"Existing user found with same emial address"})
  }
  let cart ={};
  for (let i=0;i<500;i++){
    cart[i]=0;
  }

  const user = new Users({  // craete the user using Users model
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    cartData:cart,
  })
  await user.save();
  //Security: JWTs can be digitally signed, providing integrity and authenticity to the transmitted data. This ensures that the token hasn't been tampered with and comes from a trusted source.
  const data={
    user:{
      id:user.id
    }
  }
  const token = jwt.sign(data,'secret_ecom') // when add the sold our dat encrpited not will readable 
  res.json({success:true,token})
})


// endpoint for user login
app.post('/Login', async(req,res)=>{
  let user = await Users.findOne({email:req.body.email})
  if(user){
    const checkpass = req.body.password === user.password
    if(checkpass){
      const data={
        user:{
          id:user.id
        }
      }
      const token = jwt.sign(data,'secret_ecom')
      res.json({success:true,token})
    }else{
      res.json({success:false,errors:"Wrong password"})
    }
  }else{
    res.json({success:false,errors:"Wrong email id"})
  }
})


// API creation
app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port: " + port);
  } else {
    console.log("Error: " + error);
  }
});
