import React, { useEffect, useRef } from "react";
import { Map, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import zipUrl from "./TM_WORLD_BORDERS_SIMPL-0.3.zip";
import Shapefile from "./Shapefile";
import { Marker } from "leaflet";

function Leaflet() {
  const mapRef = useRef();

  useEffect(() => {
    const map = mapRef.current.leafletElement;
    map.setView([34.74161249883172, 18.6328125], 2);
  }, []);

  const position = [51.505, -0.09];
  return (
    <Map center={position} zoom={13} style={{ height: "100vh" }} ref={mapRef}>
      {/* <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      >
      </TileLayer> */}

      <Shapefile zipUrl={zipUrl} />
    </Map>
  );
}

export default Leaflet;
