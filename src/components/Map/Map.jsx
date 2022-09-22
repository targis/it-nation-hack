
import React, { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import Leaflet, { latLng } from 'leaflet'
import {
  MapContainer,
  TileLayer,
  useMap, useMapEvents, Marker, Popup
} from 'react-leaflet'

import PowercodeMarker from '../../icons/powercode-marker.svg'
import iconShadow from "leaflet/dist/images/marker-shadow.png";


import styled from 'styled-components'

const Map = ({ coords }) => {

  let DefaultIcon = Leaflet.icon({
    ...Leaflet.Icon.Default.prototype.options,
    iconUrl: PowercodeMarker,

    shadowUrl: iconShadow

  });
  Leaflet.Marker.prototype.options.icon = DefaultIcon;

  return (
    <MapContainerSC center={coords} zoom={16} scrollWheelZoom={false} dragging={true} zoomControl={false}>
      <TileLayerSC
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={coords}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      {/* <Marker attributes={{ stroke: 'red' }} bounds={bounds}>
      </Marker> */}
      {coords && (<ChangeView coords={coords} />)}
    </MapContainerSC>
  )


}

export default Map


function ChangeView({ coords }) {
  const map = useMap();
  console.log(coords)
  const latlng = new latLng(coords[0], coords[1])
  map.setView(latlng, map.getZoom(), { duration: 1 });
  return null;
}


const MapContainerSC = styled(MapContainer)`
    position: absolute;
    top: 50%;
    left: 48%;
    height: 800px;
    width: 104%;
    border-radius: 20px;
    overflow: hidden;
    transform: translate(-50%, -50%);
    z-index: -1;
    @media (max-width: 1170px) {
      top: 80%;
    }
`

const MapPlaceholder = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ placeholderColor }) => placeholderColor ? placeholderColor : 'none'};
  z-index: -2;
`

const TileLayerSC = styled(TileLayer)`
  filter: brightness(20%) saturate(0);
`