import React, { useState } from "react";
import "./taxi.css";

const dummyTaxis = [
  { id: 1, driver: "Alex Rider", car: "Toyota Prius", distance: "0.3 mi", rating: 4.9 },
  { id: 2, driver: "Sam Lee", car: "Honda Civic", distance: "0.5 mi", rating: 4.7 },
  { id: 3, driver: "Priya Patel", car: "Hyundai i20", distance: "0.7 mi", rating: 4.8 },
];


const NearbyTaxis = ({ pickup, dropoff, onBack }) => {
  const [confirmed, setConfirmed] = useState(null);

  if (confirmed) {
    return (
      <div className="taxi-assistant">
        <h2>Booking Confirmed!</h2>
        <div className="taxi-driver">
          <p>Driver: {confirmed.driver}</p>
          <p>Car: {confirmed.car}</p>
          <p>Distance: {confirmed.distance}</p>
          <p>Rating: {confirmed.rating} ⭐</p>
        </div>
        <div className="taxi-result" style={{marginTop: '1.5rem'}}>Your taxi is on the way!</div>
        <button onClick={onBack} style={{marginTop: '1rem'}}>Back to Booking</button>
      </div>
    );
  }

  return (
    <div className="taxi-assistant">
      <h2>Nearby Taxis</h2>
      <div className="taxi-form">
        <p><b>Pickup:</b> {pickup}</p>
        <p><b>Dropoff:</b> {dropoff}</p>
      </div>
      <div className="taxi-list">
        {dummyTaxis.map(taxi => (
          <div key={taxi.id} className="taxi-driver taxi-driver-clickable" onClick={() => setConfirmed(taxi)}>
            <p>Driver: {taxi.driver}</p>
            <p>Car: {taxi.car}</p>
            <p>Distance: {taxi.distance}</p>
            <p>Rating: {taxi.rating} ⭐</p>
            <p style={{color:'#4f8cff',fontWeight:600,cursor:'pointer'}}>Click to book</p>
          </div>
        ))}
      </div>
      <button onClick={onBack} style={{marginTop: '1rem'}}>Back to Booking</button>
    </div>
  );
};

export default NearbyTaxis;
