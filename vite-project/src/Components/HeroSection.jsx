import React, { useState } from 'react';
import "./Hero.css";

function HeroSection({ name, videoLink, profilePhoto }) {
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const toggleVideoPopup = () => {
    setShowVideoPopup(!showVideoPopup);
  };

  const handleVideoPlay = () => {
    setShowVideoPopup(true);
  };

  return (
    <section className="hero-section">
      <div className="content">
        <div className="left-side">
          <h1>Welcome, <span className="name">{name}!</span></h1>
          {profilePhoto && <img src={profilePhoto} alt="Profile" className="profile-photo" />}
        </div>
        <div className="right-side">
          <div className="video-container">
            <div className="video-thumbnail">
              <iframe src={videoLink} title="Video Thumbnail" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen onPlay={handleVideoPlay}></iframe>
            </div>
            {showVideoPopup && (
              <div className="video-popup">
                <span className="close-icon" onClick={toggleVideoPopup}>×</span>
                <iframe src={videoLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
