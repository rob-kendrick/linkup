// @ts-nocheck
import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import type { LuEvent } from '../../utilities/types/Event';
// import eventMarker from '../../assets/IoLocationSharp.svg';
// import userMarker from '../../assets/BiCurrentLocation.svg';
import './MapLarge.css';

interface eventProps {
  filteredEvents : LuEvent[];
}

export default function MapLarge({ filteredEvents } : eventProps) {
  // const [events, setEvents] = useState(eventList);

  const [position, setPosition] = useState<number[]>([52.520008, 13.404954]);
  const [eventArray, setEventArray] = useState(filteredEvents);

  useEffect(() => {
  }, [eventArray]);

  // useEffect(() => {
  //   const userPosition = [];
  //   navigator.geolocation.getCurrentPosition((location) => {
  //     userPosition.push(location.coords.latitude);
  //     userPosition.push(location.coords.longitude);
  //     setPosition(userPosition);
  //   });
  // }, []);

  const myIcon = L.divIcon({
    iconSize: [35, 35],
    iconAnchor: [17.5, 35],
    popupAnchor: [0, -35],
    html: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 492.452 492.452" style="enable-background:new 0 0 492.452 492.452;" xml:space="preserve">
    <path id="XMLID_152_" d="M246.181,0C127.095,0,59.533,102.676,84.72,211.82c17.938,77.722,126.259,280.631,161.462,280.631
      c32.892,0,143.243-202.975,161.463-280.631C432.996,103.74,365.965,0,246.181,0z M246.232,224.97
      c-34.38,0-62.244-27.863-62.244-62.244c0-34.381,27.864-62.244,62.244-62.244c34.38,0,62.244,27.863,62.244,62.244
      C308.476,197.107,280.612,224.97,246.232,224.97z"/>
    </svg>`,
    className: 'marker-pin',
  });

  const allMarkers = filteredEvents.map((filteredEvent) => {
    const eventPosition = [filteredEvent.lat, filteredEvent.lng];
    return (
      <Marker
        key={filteredEvent.id_event}
        position={eventPosition}
        icon={myIcon}
      >
        <Popup>
          <img src={filteredEvent.creator.profile_picture} alt={filteredEvent.creator.username} style={{ width: '48px', borderRadius: '50%' }} />
          <h3>{filteredEvent.title}</h3>
          <h4>{filteredEvent.creator.first_name}</h4>
        </Popup>
      </Marker>
    );
  });

  return (
    <MapContainer
      tap={false}
      className="ml__container"
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <div>{allMarkers}</div>
    </MapContainer>
  );
}
