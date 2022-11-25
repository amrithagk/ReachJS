const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const routesUrls = require("./routes/route.js");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, ()=>console.log("DB connected"))
    .then(()=>{console.log("Connection successful");})
    .catch((err)=>{console.log("Connection unsuccessful\n", err.message);}
);

const app = express();
const port = process.env.PORT || 3000;
console.log(process.env.PORT);

app.use(express.json()) //getting body parser in the application
app.use(cors())
app.use("/", routesUrls) //whatever is in routeUrls will be appended to /
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});