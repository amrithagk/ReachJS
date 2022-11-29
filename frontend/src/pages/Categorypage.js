import axios from "axios";
import React, { useEffect, useState } from "react";
import "../css/categorypage.css";

export default function Category(props) {
  const [Vendors, setVendors] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/vendors/get");
      setVendors(data);
    };
    fetchdata();
  }, []);
  var flag = 0;
  return (
    <div>
      <h1>Vendors who sell {props.name}</h1>
      {Vendors.data &&
        Vendors.data.map((vendor) => {

          if (vendor.categories.includes(props.name)) {
            flag = 1;
            return (
              <div>
                <table className="vendorbox">
                <tr><td>First Name:</td><td>{vendor.fname}</td></tr>
                <tr><td>Last Name: </td><td>{vendor.lname}</td></tr>
                <tr><td>Phone Number: </td><td>{vendor.phno}</td></tr>
                <tr><td>Address: </td><td>{vendor.address}</td></tr>
                <tr><td>Products: </td><td>{vendor.products}</td></tr>
                <tr><td>Categories: </td><td>{vendor.categories.toString()}</td></tr>
                </table>
              </div>
            );
          } else {
            return null;
          }
        })}
      {flag === 0 && (
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h3>No Vendors found</h3>
        </div>
      )}
    </div>
  );
}
