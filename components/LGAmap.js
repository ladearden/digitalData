import React from 'react'
import { MapContainer, TileLayer, SVGOverlay, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const bounds = [
    [-30.17, -208.09]
  ]

function LGAmap() {
    return (
        <div>
            <h2>Armidale Regional LGA and New England North West planning region</h2>
            <MapContainer center={[-30.17, -208.09]} zoom={8} scrollWheelZoom={false}
                // zoomControl={false}
                style={{height: 400, width: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
                {/* <path class="leaflet-interactive" stroke="#ccc" strokeOpacity="2" strokeWidth="1" strokeLinecap="round" stroke-linejoin="round" fill="#5374b9" fill-opacity="0.8" fill-rule="evenodd" d="M609 -67L610 -74L607 -75L607 -81L609 -81L608 -86L618 -86L619 -83L624 -84L626 -82L628 -85L638 -85L640 -83L638 -79L642 -79L643 -81L646 -80L648 -76L652 -76L664 -81L668 -77L670 -77L669 -76L671 -73L685 -75L691 -73L693 -75L708 -74L710 -76L713 -73L714 -76L712 -80L716 -81L718 -79L719 -80L719 -77L723 -77L725 -81L725 -79L727 -79L726 -78L729 -76L729 -72L727 -70L728 -69L726 -65L728 -63L727 -60L729 -60L729 -54L732 -51L732 -38L734 -38L739 -31L736 -28L738 -24L735 -21L736 -20L729 -13L729 -11L734 -6L733 -3L735 3L732 6L733 7L730 8L728 12L726 12L728 16L727 23L719 21L718 22L714 16L711 17L710 15L707 14L705 16L705 14L703 14L702 9L697 10L697 8L696 9L694 5L688 7L687 6L685 8L675 8L675 1L677 -2L680 -3L674 -3L670 -5L670 -7L668 -7L668 -13L666 -13L662 -18L663 -22L657 -28L658 -29L651 -28L651 -32L639 -40L640 -45L637 -48L638 -58L635 -57L634 -50L631 -52L631 -56L620 -55L621 -61L613 -62L610 -65L611 -66L609 -66z"></path> */}
                </SVGOverlay>
            </MapContainer>
        </div>
    )
}

export default LGAmap
