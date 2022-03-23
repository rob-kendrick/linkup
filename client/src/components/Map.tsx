import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { LU_Event } from '../utilities/types/LU_Event';
import eventMarker from '../assets/IoLocationSharp.svg';
import userMarker from '../assets/BiCurrentLocation.svg';

interface eventProps {
events : LU_Event[];
}

function Map({ events } : eventProps) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      const lat : number = location.coords.latitude;
      const lng : number = location.coords.longitude;
      const map = L.map('map').setView([lat, lng], 13);

      const myIcon = L.divIcon({
        className: 'my-div-icon',
        html: `<div> <img src=${eventMarker} alt="marker" style="width:30px;"/></div>`,
      });

      const myLocationIcon = L.divIcon({
        className: 'my-div-icon',
        html: `<div><img src=${userMarker} alt="marker" style="width:30px;" /></div>`,
      });

      setTimeout(() => {
        L.marker([lat, lng], { icon: myLocationIcon }).addTo(map)
          .bindPopup('Current location')
          .openPopup();

        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png').addTo(map);

        events.map((event) => {
          console.log(event);
          const eventLat = typeof event.lat === 'string' ? parseFloat(event.lat) : event.lat;
          const eventLng = typeof event.lng === 'string' ? parseFloat(event.lng) : event.lng;
          return L.marker([eventLat, eventLng], { icon: myIcon }).addTo(map).bindPopup(`${event.title} <br> ${event.date_time}`).openPopup();
        });
      }, 100);
    });
  }, []);

  return (

    <div className="map-container">

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
        integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        crossOrigin=""
      />

      <script
        src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
        integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
        crossOrigin=""
      />
      <div id="map" />
    </div>
  );
}

export default Map;
