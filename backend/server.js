const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routesUrls = require("./routes/route.js");
const cors = require("cors");
const Vendors = require("./models/vendorModel.js");

dotenv.config();

mongoose.connect("mongodb+srv://amrithagk:fjoSNAQxsIBtvenG@cluster0.skymq2d.mongodb.net/VendorDetails?retryWrites=true&w=majority")
    .then(()=>{console.log("Connection successful");})
    .catch((err)=>{console.log("Connection unsuccessful\n", err.message);}
);

const app = express(); 
const port = process.env.PORT || 1000;

app.use(express.json()) //getting body parser in the application
app.use(express.urlencoded({extended: true})) //getting body parser in the application
app.use(cors())
app.use("/", routesUrls) //whatever is in routeUrls will be appended to /

app.post("/register/add", (req, res) => {
  const vendordetails = req.body;
  console.log("vendordetails", vendordetails);

  Vendors.create(vendordetails, (err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(201).send(data);
    }
  });
});

app.get("/vendors/get", (req, res) => {
  Vendors.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});