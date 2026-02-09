
import React, { useState } from "react";
import NearbyTaxis from "./NearbyTaxis";
import "./taxi.css";


const TaxiAssistant = ({ initialPickup = "", initialDropoff = "" }) => {
  const [service, setService] = useState("Uber");
  const [pickup, setPickup] = useState(initialPickup);
  const [dropoff, setDropoff] = useState(initialDropoff);
  const [roundTrip, setRoundTrip] = useState(false);
  const [showNearby, setShowNearby] = useState(false);
  const handleBook = () => {
    setShowNearby(true);
  };

  if (showNearby) {
    return <NearbyTaxis pickup={pickup} dropoff={dropoff} onBack={() => setShowNearby(false)} />;
  }

  return (
    <div className="taxi-assistant">
      <h2>Taxi Assistant</h2>
      <div className="taxi-form">
        <label>Service:
          <select value={service} onChange={e => setService(e.target.value)}>
            <option value="Uber">Uber</option>
            <option value="Lyft">Lyft</option>
            <option value="Ola">Ola</option>
          </select>
        </label>
        <label>Pickup Location:
          <input value={pickup} onChange={e => setPickup(e.target.value)} placeholder="e.g. Current location" />
        </label>
        <label>Dropoff Location:
          <input value={dropoff} onChange={e => setDropoff(e.target.value)} placeholder="e.g. Airport or address" />
        </label>
        <label>
          <input type="checkbox" checked={roundTrip} onChange={e => setRoundTrip(e.target.checked)} />
          Round Trip
        </label>
        <button onClick={handleBook}>Book Taxi</button>
      </div>
    </div>
  );
};

export default TaxiAssistant;
