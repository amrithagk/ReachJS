const express = require("express");
const router = express.Router();
const Vendor = require("../models/vendorModel");

console.log(process.env.PORT)

router.post("/register", (req, res)=>{
    res.send("response sent");
    const newVendor = new Vendor({
        fname: req.body.fname,
        lname: req.body.lname,
        phno: req.body.phno,
        location: req.body.location,
        products: req.body.products,
        idproof: req.body.idproof
    })
    newVendor.save()
    .then(details => {
        res.json(details);
    })
    .catch(error => console.log(error));
});

module.exports = router;