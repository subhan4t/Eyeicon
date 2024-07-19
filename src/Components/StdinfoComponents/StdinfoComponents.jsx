import React, { useState } from 'react';
import '../StdinfoComponents/StdinfoComponents.css';
import img from '../../assets/image/img1.jpeg';

const StdinfoComponents = () => {
  const [isvisible,setIsvisible] = useState(false)
  const togglevisibility = () => {
    setIsvisible(!isvisible)
  }
  
  
    return (
    <div className="container">
      <div className="card">
        <div className="icon">
           
          <img src={img} alt="Eye Icon" />
        </div>
        <p><h4>Name: SUBHAN S</h4></p>
        <p>Registration No: 212221080078</p>
        <button className="toggle-button" onClick={togglevisibility}>
          {isvisible ? 'Hide Details' : 'Show Details'}
        </button>
        <div className={`additional-content ${isvisible ? 'visible' : 'hidden'}`}>
            <p>I am from Dubai cross street and currently pursuing B.E(ROYAL MECH) at BATMAN UNIVERSITY OF SIGMA. I will go help people at midnight and i saved many people lives</p>
        </div>
    </div>
    </div>
  );
};

export default StdinfoComponents;