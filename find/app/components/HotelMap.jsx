"use client";
import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function HotelMap({ late, lone }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(lone);
  const [lat] = useState(late);
  const [zoom] = useState(14);
  const [API_KEY] = useState("TFI1Mx0NHI56xq8jf9DB");

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.addControl(new maplibregl.NavigationControl(), "top-right");
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([lng, lat])
      .addTo(map.current);
  });

  return (
    <div className="w-[100%] h-[90%] mt-5">
      <div
        ref={mapContainer}
        className="w-[100%] h-[100%] rounded-lg shadow-md"
      />
    </div>
  );
}
