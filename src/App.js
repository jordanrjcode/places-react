import MapLeaft from "./components/MapLeaft";
import Navbar from "./components/Navbar";
import "./App.css";
import { useState } from "react";
function App() {
  const [ubication, setUbication] = useState([19.4356, -99.1413]);
  const clickUbicarme = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      setUbication([position.coords.latitude, position.coords.longitude]);
    });
  };
  return (
    <div className="App">
      <Navbar />
      <MapLeaft mapCenter={ubication} />
      <div class="toolbar">
        <button
          onClick={() => {
            clickUbicarme();
          }}
        >
          <img
            src="/ubicacion.svg"
            className="img-button"
            alt="ubicacion icono"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
