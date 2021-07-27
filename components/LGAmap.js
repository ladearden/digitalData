import React from 'react'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const bounds = [
    [-30.17, -208.09]
  ]

function LGAmap(props) {
    return (
        <div>
            <h2>Armidale Regional LGA and New England North West planning region</h2>
            <MapContainer center={[-30.37, 152.09]} zoom={9} scrollWheelZoom={false}
                // zoomControl={false}
                style={{height: 500, width: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON key={props.geo.type} data={props.geo.features}></GeoJSON>
            </MapContainer>
        </div>
    )
}

export default LGAmap
