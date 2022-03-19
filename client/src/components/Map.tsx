import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import './Map.css';

function Map() {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    const api = '67582dfbec614217abadfb9fb11090c7';
    L.tileLayer(`https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey=${api}`).addTo(map);
  }, []);

  return (

    <div>
      {/* <!-- LEAFLET CSS --> */}
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />
      {/* <!-- LEAFLET JS --> */}
      <script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""
      />
      <h1>Map</h1>

      <div id="map" />
    </div>
  );
}

export default Map;
