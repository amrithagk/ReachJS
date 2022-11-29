const express = require("express");
const Vendor = require("../models/vendorModel");
const router = express.Router();

router.post("/register", (req, res)=>{
    const newVendor = new Vendor({
        fname: req.body.fname,
        lname: req.body.lname,
        phno: req.body.phno,
        address: req.body.address,
        products: req.body.products,
        categories: req.body.categories,
        // idproof: req.body.idproof,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    })
    newVendor.save()
    .then(details => {
        res.json(details);
    })
    .catch(error => console.log(error));
});


module.exports = router;