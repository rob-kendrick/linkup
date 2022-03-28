// @ts-nocheck
import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer, TileLayer, Marker,
} from 'react-leaflet';
import './MapCreate.css';

interface FindAdress {
  findEventAddress: any;
}

const formatAddress = (input) => ({
  lat: input.latitude,
  lng: input.longitude,
  street_number: input.number,
  street_name: input.name,
  postcode: input.postal_code,
  city: input.locality,
  country: input.country,
});

function MapCreate({ findEventAddress } : FindAdress) {
  const [lat, setLat] = useState(52.520008);
  const [lng, setLng] = useState(13.404954);

  const [markerLat, setMarkerLat] = useState(lat);
  const [markerLng, setMarkerLng] = useState(lng);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (location) => {
      await setLat(location.coords.latitude);
      await setLng(location.coords.longitude);
    });
  }, []);

  const handleAddLocation = (e : MouseEvent) => {
    setMarkerLat(e.latlng.lat);
    setMarkerLng(e.latlng.lng);
  };

  const getRevGeoLocation = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(`http://api.positionstack.com/v1/reverse?access_key=196a66c8284773cffe2741c9b5e1f321&query=${markerLat},${markerLng}&limit=1`, requestOptions)
      .then((response) => response.json())
      .then((result) => findEventAddress(formatAddress(result.data[0])))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    getRevGeoLocation();
  }, [markerLat, markerLng]);

  const myIcon = L.divIcon({
    iconSize: [35, 35],
    iconAnchor: [13, 26],
    popupAnchor: [0, -32],
    html: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 492.452 492.452" style="enable-background:new 0 0 492.452 492.452;" xml:space="preserve">
    <path id="XMLID_152_" d="M246.181,0C127.095,0,59.533,102.676,84.72,211.82c17.938,77.722,126.259,280.631,161.462,280.631
      c32.892,0,143.243-202.975,161.463-280.631C432.996,103.74,365.965,0,246.181,0z M246.232,224.97
      c-34.38,0-62.244-27.863-62.244-62.244c0-34.381,27.864-62.244,62.244-62.244c34.38,0,62.244,27.863,62.244,62.244
      C308.476,197.107,280.612,224.97,246.232,224.97z"/>
    </svg>`,
    className: 'marker-pin',
  });

  return (

    <MapContainer
      tap={false}
      className="mc__container"
      center={[lat, lng]}
      zoom={13}
      scrollWheelZoom={false}
      whenCreated={(map) => {
        // setMyMap(map);
        map.on('click', handleAddLocation);
      }}
    >
      <TileLayer
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
      />
      <Marker
        position={[markerLat, markerLng]}
        icon={myIcon}
      />
    </MapContainer>
  );
}

export default MapCreate;
