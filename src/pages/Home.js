import React from "react";
import Slideshow from "../components/Slideshow";
import Countdown from "../components/Countdown";
import QRCodeRSVP from "../components/QRCodeRSVP";
import { weddingData } from "../data/weddingData";

export default function Home() {
  const { couple, event, rsvp, slideshow } = weddingData;

  return (
    <div>
      {/* Fullscreen Hero Slideshow with Countdown overlay */}
      <div className="fullscreen-slideshow">
        <Slideshow slides={slideshow} />

        {/* Countdown at bottom-right */}
        <div className="countdown-overlay">
          <Countdown targetDate={event.date} />
        </div>
      </div>

      {/* Content below the slideshow */}
      <div className="container fade-in">
        <h2>Our Story: Written by Grace, Sealed in Love 💛</h2>
        <p style={{ fontSize: '18px'}}>{couple.story}</p>

        <h3>Venue</h3>
        <p>{event.venue}</p>

        <h3>RSVP</h3>
        <QRCodeRSVP formLink={rsvp.formLink} />
      </div>
    </div>
  );
}

