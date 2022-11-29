import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/vendors.css";

export default function Vendors() {
  const [Vendors, setVendors] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get("/vendors/get");
      setVendors(data);
    };
    fetchdata();
  }, []);

  return (
    <div className="Vendors">
      <h1>VENDORS</h1>
      {/* display all the details of all vendors one below the other in a box and if no vendors are there display a message*/}
      {Vendors.data &&
        Vendors.data.map((vendor) => (
          <div>
            <table className="vendorbox">
              <tr>
                <td>First Name:</td>
                <td>{vendor.fname}</td>
              </tr>
              <tr>
                <td>Last Name: </td>
                <td>{vendor.lname}</td>
              </tr>
              <tr>
                <td>Phone Number: </td>
                <td>{vendor.phno}</td>
              </tr>
              <tr>
                <td>Address: </td>
                <td>{vendor.address}</td>
              </tr>
              <tr>
                <td>Products: </td>
                <td>{vendor.products}</td>
              </tr>
              <tr>
                <td>Categories: </td>
                <td>{vendor.categories.toString()}</td>
              </tr>
            </table>
          </div>
        ))}
      {Vendors.data && Vendors.data.length === 0 && (
        <div>
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
