import React, { useEffect, useRef, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../App.css';

import irene from '../assets/irene.jpg';
import irene1 from '../assets/irene1.JPG';
import irene2 from '../assets/irene2.jpg';
import irene3 from '../assets/irene3.jpg';
import irene4 from '../assets/irene4.jpg';
import irene5 from '../assets/irene5.jpg';
import irene6 from '../assets/irene6.jpg';
import irene7 from '../assets/irene7.jpg';
import irene8 from '../assets/irene8.jpg';
import irene9 from '../assets/irene9.jpg';
import irene10 from '../assets/irene10.jpg';
import irene11 from '../assets/irene11.jpg';
import irene12 from '../assets/irene12.jpg';
import irene13 from '../assets/irene13.JPG';
import irene14 from '../assets/irene14.jpg';
import irene15 from '../assets/irene15.jpg';
import irene16 from '../assets/irene16.jpg';
import irene17 from '../assets/irene17.jpg';
import irene18 from '../assets/irene18.jpg';
import irene19 from '../assets/irene19.jpg';
import irene20 from '../assets/irene20.jpg';
import irene21 from '../assets/irene21.jpg';
import irene22 from '../assets/irene22.jpg';
import irene23 from '../assets/irene23.jpg';
import irene24 from '../assets/irene24.jpg';
import irene25 from '../assets/irene25.jpg';
import irene26 from '../assets/irene26.jpg';
import irene27 from '../assets/irene27.jpg';
import irene28 from '../assets/irene28.jpg';
import irene29 from '../assets/irene29.jpg';
import irene30 from '../assets/irene30.jpg';
import irene31 from '../assets/irene31.jpg';
import irene32 from '../assets/irene32.jpg';
import irene33 from '../assets/irene33.jpg';
import irene34 from '../assets/irene34.jpg';

const ireneImages = [ irene, irene1, irene2, irene3, irene4, irene5, irene6, irene7, irene8, irene9, irene10, irene11, irene12, irene13, irene14, irene15, irene16, irene17, irene18, irene19, irene20, irene21, irene22, irene23, irene24, irene25, irene26, irene27, irene28, irene29, irene30, irene31, irene32, irene33, irene34, ];

function App() {
  const rootRef = useRef(null);
  const [popupImage, setPopupImage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupStyle, setPopupStyle] = useState({});
  const [popups, setPopups] = useState([]);
  const mainContentRef = useRef(null); // Ref for the hero section
  const [yesButtonSize, setYesButtonSize] = useState(100); // Initial size for "Yes" button text
  const [noButtonScale, setNoButtonScale] = useState(1); // Scale factor for "No" button
  const navigate = useNavigate();




  const generatePopup = () => {
    if (mainContentRef.current) {
      const mainRect = mainContentRef.current.getBoundingClientRect();
      const randomIndex = Math.floor(Math.random() * ireneImages.length);
      const randomTop = Math.floor(Math.random() * (mainRect.height - 150)); // Adjust based on main content height
      const randomLeft = Math.floor(Math.random() * (mainRect.width - 150)); // Adjust based on main content width
      const newPopup = {
        id: Date.now(),
        image: ireneImages[randomIndex],
        style: {
          top: `${randomTop}px`,
          left: `${randomLeft}px`,
          position: 'absolute', // Use absolute within the relative container
        }
      };
      setPopups(currentPopups => [...currentPopups, newPopup]);

      setTimeout(() => {
        setPopups(currentPopups => currentPopups.filter(popup => popup.id !== newPopup.id));
      }, 3000); // Remove the popup after 3 seconds
    }
  };

  useEffect(() => {
    const interval = setInterval(generatePopup, 2000); // Adjust timing as needed
    return () => clearInterval(interval);
  }, []);

  const generateHearts = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    heart.style.animationTimingFunction = 'linear';
    heart.style.animationFillMode = 'forwards';
    heart.innerHTML = '&hearts;';
    heart.style.color = 'red';
    heart.style.fontSize = '20px';

    if (rootRef.current) {
      rootRef.current.appendChild(heart);
    }

    setTimeout(() => {
      heart.remove();
    }, Math.max(...[heart.style.animationDuration.slice(0, -1)]) * 1000 + 1000);
  };

  useEffect(() => {
    const interval = setInterval(generateHearts, 300);
    return () => clearInterval(interval);
  }, []);

  const handleYesClick = () => {
    navigate('/video'); // Assuming '/video' is the path you want to redirect to
  };
  

  const handleNoClick = () => {
    setYesButtonSize(currentSize => currentSize + 150); // Increase "Yes" button size
    setNoButtonScale(currentScale => currentScale * 0.75); // Decrease size by 25%
  };

  

  return (
    <div className="App" ref={rootRef}>
      <header className="header">Happy Valentine's Day!</header>
      <div className="main-content">
        <div className="centered-text">Irene, will you be my valentine?</div>
        <div className="response-buttons">
        <button
            className="yes-button"
            onClick={handleYesClick}
            style={{ fontSize: `${yesButtonSize}%` }} // Dynamically adjust font size
          >
            Yes
          </button>         
           <button className="no-button" onClick={handleNoClick} style={{ transform: `scale(${noButtonScale})` }}>No</button>
        </div>
        {/* Popup images container */}
        <div className="popups-container" ref={mainContentRef}>
          {popups.map(popup => (
            <img key={popup.id} src={popup.image} alt="Popup" className="popup-image" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
