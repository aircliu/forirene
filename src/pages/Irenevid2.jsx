import React, { useState, useRef } from 'react';
import '../App.css'; // Make sure your CSS file is imported
import slide from '../assets/slide.mp4';
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.mp4';
import slide4 from '../assets/slide4.mp4';

const mediaList = [
  { type: 'video', src: slide },
  { type: 'image', src: slide1 },
  { type: 'video', src: slide3 },
  { type: 'video', src: slide4 },
  { type: 'image', src: slide2 },
];

const IreneVid2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideshowContainerRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaList.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaList.length) % mediaList.length);
  };

  const renderMedia = (media) => {
    if (media.type === 'image') {
      return <img src={media.src} alt="Slideshow" style={{ width: '100%', height: 'auto' }} />;
    } else if (media.type === 'video') {
      return (
        <video controls style={{ width: '100%' }}>
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
  };

  return (
    <div className="slideshow-container">
      <header className="slideshow-header">45 days since I met you...</header>
      <div ref={slideshowContainerRef} className="slideshow-background">
        {renderMedia(mediaList[currentIndex])}
        <div className="slideshow-controls">
          <button onClick={prevSlide} className="slide-button">Previous</button>
          <button onClick={nextSlide} className="slide-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default IreneVid2;
