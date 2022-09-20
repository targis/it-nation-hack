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

