import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapLeaft.css";
import { useState, useEffect } from "react";
const MapLeaft = ({ mapCenter }) => {
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (map) {
      map.setView(mapCenter, 15);
    }
  }, [mapCenter]);
  console.log(mapCenter);
  return (
    <div className="map">
      <MapContainer center={mapCenter} zoom={15} whenCreated={setMap}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default MapLeaft;
