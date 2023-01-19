import './App.css';
import React, { useState, useEffect } from 'react';
//import crypto from './assets/crypto.jpg';
import logo from './assets/exeter_logo.jpg';
import campus from './assets/exeter_pic.png';
import background from './assets/background1.jpg';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [logoSize, setLogoSize] = useState({});
  const [campusSize, setCampusSize] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (width > 768) {
      setLogoSize({width: '500px', height: '100px'});
      setCampusSize({width: '500px', height: '200px'});
    } else {
      setLogoSize({width: '80%', height: '10%'});
      setCampusSize({width: '80%', height: '20%'});
    }
  }, [width]);

  return (
    <div className="font-link" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
      height: '100vh',
      //background:  "#e9c46a",
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      color: "#264653"
      
    }}>
{/*       <div>
      <img src={crypto} alt="crypto" style={{height: "500px"}}/>
      </div> */}

        <h1>12th International Conference on Cryptococcus & Cryptococcosis </h1>
        <h2>May/June 2026</h2>
        <h2>Exeter, UK</h2>
        <img src={logo} alt="exeter logo" style={logoSize}/>
        <img src={campus} alt="exeter campus pic" style={campusSize}/>
        <h3>More information to come, be sure to check back periodically!</h3>
      </div>
  );
}

export default App;
