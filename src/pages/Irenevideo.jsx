import React, { useEffect, useRef } from 'react';
import irenevid from '../assets/irenevid.mp4';
import mymelody from '../assets/mymelody1.gif';
import mymelody2 from '../assets/mymelody2.gif';
import mymelody3 from '../assets/mymelody3.gif';
import mymelody4 from '../assets/mymelody4.gif';

const IreneVideo = () => {
  const videoContainerRef = useRef(null);

  const generateHeart = () => {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.cssText = `
      position: fixed;
      color: red;
      font-size: ${Math.random() * 20 + 10}px;
      user-select: none;
      left: ${Math.random() * window.innerWidth}px;
      animation: fall 5s linear forwards;
    `;
    videoContainerRef.current.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  };

  useEffect(() => {
    const interval = setInterval(generateHeart, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={videoContainerRef} style={{ backgroundColor: '#FFC0CB', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '10vh' }}>
      <h2 style={{ color: 'red', marginBottom: '20px', fontFamily: 'Lobster', fontSize: '60px' }}>You are my melody</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '80%', gap: '20px' }}>
        {/* GIFs on the left */}
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={mymelody} alt="My Melody" style={{ width: '50%', marginBottom: '10px' }} />
          <img src={mymelody2} alt="My Melody 2" style={{ width: '50%' }} />
        </div>
        {/* Video */}
        <div style={{ flexGrow: 2 }}>
          <video controls autoPlay style={{ width: '100%' }}>
            <source src={irenevid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* GIFs on the right */}
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={mymelody3} alt="My Melody 3" style={{ width: '50%', marginBottom: '10px' }} />
          <img src={mymelody4} alt="My Melody 4" style={{ width: '50%' }} />
        </div>
      </div>
    </div>
  );
};

export default IreneVideo;
