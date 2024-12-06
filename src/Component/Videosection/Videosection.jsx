import React from 'react';
import './Videosection.css';
import vdo from '../../assets/macvideo1.mp4'; // Import the video file

const Videosection = () => {
  return (
    <div className="videosection" id='video'>
      <video
        width="100%"
        height="auto"
        className="video-player"
        autoPlay
        loop
        muted
      >
        <source src={vdo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videosection;
