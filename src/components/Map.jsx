<<<<<<< HEAD
import React from 'react';
import styled from 'styled-components';

import MapPin from '../icons/contacts/map_pin.svg';

const Map = ({location, ...props}) => {
    return (
        <>
            <MapContainer 
                src={location?.url} 
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </MapContainer>
            <MapPointer />
        </>

    );
}

export default Map;

const MapContainer = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const MapPointer = styled.img.attrs({
    src: MapPin,
    alt: ''
})`
    height: 48px;
    width: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% - 24px));
    z-index: 2;
`;
=======
import React from 'react'
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'


const Map = ({ coords }) => {
  return (
    <MapContainer center={[50.401699, 30.2525114]} zoom={13} scrollWheelZoom={false}>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>

      </Marker>
    </MapContainer>
  )
}

export default Map

>>>>>>> 1f7957f8f44214ab73b56e47fe543e71a348b608
