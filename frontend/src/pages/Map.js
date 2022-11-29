import axios from "axios";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import React, { useEffect, useRef, useState } from "react";
import "../css/map.css";

export default function MapPage() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(77.53480664584247);
  const [lat] = useState(12.934137959637118);
  const [zoom] = useState(14);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/vendors/get");
      console.log(result.data);
      result.data.map((vendor) => {
        new maplibregl.Marker({ color: "green" })
          .setLngLat([vendor.longitude, vendor.latitude])
          .setPopup(
            new maplibregl.Popup({ offset: 25 }).setHTML(
              `<h3>First Name: <br></br> ${vendor.fname}</h3>
              <h3>Last Name: <br></br>${vendor.lname}</h3>
              <h3>Phone Number:<br></br> ${vendor.phno}</h3>
              <h3>Address: <br></br>${vendor.address}</h3>`
            )
          )
          .addTo(map.current);
        return null;
      });
    };

    fetchData();

    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://api.maptiler.com/maps/streets-v2/style.json?key=LdmU2sRXjPBQtW9tJa8G",
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-left");
  }, [lat, lng, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
