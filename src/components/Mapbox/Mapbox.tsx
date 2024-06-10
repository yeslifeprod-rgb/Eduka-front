import axios from "axios";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoieWVzbGlmZTEwIiwiYSI6ImNsdnV5amx3czFrN20ya29kcnIybXp4YzUifQ.w4zlwaAcEw8H-k8KO7JWow"; // Replace with your Mapbox access token

const MapBoxAddEvent: React.FC = () => {
  useEffect(() => {
    // Retrieve the address from local storage
    const storedDataString = localStorage.getItem("storedDataEvent");
    const address = storedDataString
      ? JSON.parse(storedDataString).address
      : "";

    if (!address) {
      console.error("No address found in local storage");
      return;
    }

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11", // Use a map style with streets and cities
      center: [0, 0],
      zoom: 1,
    });

    // Add the 3D buildings layer
    map.on("load", () => {
      map.addLayer({
        id: "3d-buildings",
        source: "composite",
        "source-layer": "building",
        filter: ["==", "extrude", "true"],
        type: "fill-extrusion",
        minzoom: 15,
        paint: {
          "fill-extrusion-color": "#aaa", // Building color
          "fill-extrusion-height": ["get", "height"], // Building height
          "fill-extrusion-base": ["get", "minheight"], // Building base
          "fill-extrusion-opacity": 0.8, // Building opacity
        },
      });
    });

    // Get the geographic coordinates of the specified address with Axios
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          address
        )}.json?access_token=${mapboxgl.accessToken}`
      )
      .then((response) => {
        const data = response.data;
        if (data.features.length === 0) {
          console.error("No features found for the specified address");
          return;
        }
        const coordinates = data.features[0].geometry.coordinates;
        const center = [coordinates[0], coordinates[1]];

        // Center the map on the specified location
        map.setCenter(center);
        map.setZoom(13); // Zoom in on the specified location

        // Add a marker at the specified location
        new mapboxgl.Marker().setLngLat(center).addTo(map);
      })
      .catch((error) => {
        console.error("Error retrieving coordinates:", error);
      });

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      id="map"
      className="my-5 rounded"
      style={{ height: "400px", width: "100%" }}
    ></div>
  );
};

export default MapBoxAddEvent;
