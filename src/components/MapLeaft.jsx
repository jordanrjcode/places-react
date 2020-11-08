import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import "./MapLeaft.css";
import { useState, useEffect } from "react";
const MapLeaft = ({ mapCenter }) => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (map) {
      // map.setView(mapCenter, 15);
      map.flyTo(mapCenter, map.getZoom()); //animacion
    }
  }, [map, mapCenter]);
  return (
    <div className="map">
      <MapContainer
        center={mapCenter}
        scrollWheelZoom={false}
        zoom={15}
        whenCreated={setMap}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={mapCenter}>
          <Popup>You are here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapLeaft;
