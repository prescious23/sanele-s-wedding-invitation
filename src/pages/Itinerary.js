import React from 'react';

export default function Itinerary() {
  return (
    <div className="itinerary-page">
      <div className="itinerary-container">
        <h2>Wedding Itinerary</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>3:00 PM – Ceremony Begins</li>
          <li>4:00 PM – Cocktail Hour</li>
          <li>5:30 PM – Dinner & Toasts</li>
          <li>7:00 PM – First Dance</li>
          <li>8:00 PM – Cake Cutting</li>
          <li>9:00 PM – Dancing & Celebration</li>
        </ul>
      </div>
    </div >
  );
}
