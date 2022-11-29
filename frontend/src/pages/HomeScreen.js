import "../css/styling.css";
import { Map } from "react-map-gl";
import maplibregl from "maplibre-gl";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function HomeScreen() {
  const openTab = (url) => {
    window.open(url, "_self", "noopener,noreferrer");
  };

  return (
    <div>
      <h2>MAP</h2>
      <div
        className="map-container"
        onClick={() => openTab("/map")}
      >
        <Map
          mapLib={maplibregl}
          initialViewState={{
            longitude: 77.53480664584247,
            latitude: 12.934137959637118,
            zoom: 14,
          }}
          style={{ width: "100%", height: "100vh", borderRadius: "50px" }}
          mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=LdmU2sRXjPBQtW9tJa8G"
        />
      </div>
      <h2>CATEGORIES</h2>
      <div className="container-category">
      <Link to="/Fruits">
        <div className="categoryCard fruit"><p className="textmiddle">FRUITS</p></div>
      </Link>

      <Link to="/categories/Vegetables">
        <div className="categoryCard vegetable"><p className="textmiddle">VEGETABLES</p></div>
      </Link>

      <Link to="/categories/Greens">
        <div className="categoryCard greens"><p className="textmiddle">GREENS</p></div>
      </Link>

      <Link to="/categories/Groceries">
        <div className="categoryCard groceries"><p className="textmiddle">GROCERIES</p></div>
      </Link>

      <Link to="/categories/Accessories">
        <div className="categoryCard accessories"><p className="textmiddle">ACCESSORIES</p></div>
      </Link>

      <Link to="/categories/HomeEssentials">
        <div className="categoryCard homessentials"><p className="textmiddle">HOME ESSENTIALS</p></div>
      </Link>
      </div>
      <br></br>
      <br></br>
      <div className="footer">
          <div className="footer-card">
            <h4>ReachJS</h4>
            <p className="footer-cardp">all rights reserved</p>
            <hr/>
          <div className="footer-links">
          <CustomLink to="/categories">Categories</CustomLink>
          <CustomLink to="/vendors">Vendors</CustomLink>
          <CustomLink to="/map">Map</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/register">Register</CustomLink>
          <CustomLink to="/support">Support</CustomLink>
          </div>
          <hr/>
          <br/>
          </div>
      </div>
    </div>
  );
}

export default HomeScreen;


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active li-space" : "li-space"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

