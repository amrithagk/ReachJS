import React from "react";
import { Link } from "react-router-dom";
//import axios from "axios";
import "../css/categories.css";

export default function Categories() {
  return (
    <div className="container-category">
      <Link to="/Fruits">
        <div className="categoryCard fruit">
          <p className="textmiddle">FRUITS</p>
        </div>
      </Link>

      <Link to="/categories/Vegetables">
        <div className="categoryCard vegetable">
          <p className="textmiddle">VEGETABLES</p>
        </div>
      </Link>

      <Link to="/categories/Greens">
        <div className="categoryCard greens">
          <p className="textmiddle">GREENS</p>
        </div>
      </Link>

      <Link to="/categories/Groceries">
        <div className="categoryCard groceries">
          <p className="textmiddle">GROCERIES</p>
        </div>
      </Link>

      <Link to="/categories/Accessories">
        <div className="categoryCard accessories">
          <p className="textmiddle">ACCESSORIES</p>
        </div>
      </Link>

      <Link to="/categories/HomeEssentials">
        <div className="categoryCard homessentials">
          <p className="textmiddle">HOME ESSENTIALS</p>
        </div>
      </Link>
    </div>
  );
}
