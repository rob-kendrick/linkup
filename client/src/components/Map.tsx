import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { LU_Event } from '../utilities/types/LU_Event';
import vector from '../Vector.png';

interface eventProps {
events : LU_Event[];
}

function Map({ events } : eventProps) {

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      const lat : number = location.coords.latitude;
      const lng : number = location.coords.longitude;
      console.log(lat, lng);

      const map = L.map('map').setView([lat, lng], 13);
      L.tileLayer('https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png').addTo(map);

      const myIcon = L.divIcon({
        className: 'my-div-icon',
        html: `<div> <img src=${vector} alt="marker" /></div>`,
      });

      events.map((event) => {
        const eventLat = typeof event.lat === 'string' ? parseFloat(event.lat) : event.lat;
        const eventLng = typeof event.lng === 'string' ? parseFloat(event.lng) : event.lng;
        return L.marker([eventLat, eventLng], { icon: myIcon }).addTo(map).bindPopup(`${event.title} <br> ${event.date_time}`).openPopup();
      });

      const myLocationIcon = L.divIcon({
        className: 'my-div-icon',
        html: '<div><h1>🤡</h1></div>',
      });

      L.marker([lat, lng], { icon: myLocationIcon }).addTo(map)
        .bindPopup('Current location')
        .openPopup();
    });
  }, []);

  return (

    <div>
      <div id="map" />

    </div>
  );
}

export default Map;
