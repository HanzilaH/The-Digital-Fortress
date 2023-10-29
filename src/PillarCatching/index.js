import React from 'react'
import './index.scss'
import { useState, useEffect } from 'react';
import { logDOM } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

// import Pillar from './Pillar';

const gear = require('../assets/gear1.png')

const PillarCatching = () => {

  const navigate = useNavigate();

    // const [pillars, setPillars] = useState([]);

    // const handleMouseMove = (e) => {
    //   const { clientX, clientY } = e;
    //   setPillars([{ x: clientX - 10, y: clientY - 50 }]);
    // };
    // const [pillar, setPillar] = useState(null)
    const [message, setMessage] = useState("MIND THE PILLARS!!!")
    const [liveLeft, setLivesLeft] = useState(5)
    const [pillarArray, setPillarArray] = useState([false,false,false,false,false, false, false, false, false, false]) 
    const [showColumn, setShowColumn] = useState(true)


    const [buttonPosition, setButtonPosition] = useState({ left: '50%', top: '50%' });


    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });





    useEffect(() => {
      const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * pillarArray.length);
        const updatedArray = pillarArray.map((value, index) => index === randomIndex);
        setPillarArray(updatedArray);
        setShowColumn(e=>!e)

        const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      const newLeft = Math.random() * (screenWidth - 30); // 30 is the button width
      const newTop = Math.random() * (screenHeight - 30); // 30 is the button height
      setButtonPosition({ left: `${newLeft}px`, top: `${newTop}px` });

      }, 1000); 
    
      return () => {
        clearInterval(intervalId);
      };
    }, [pillarArray]); 


    const handlePillarMouseOver = (e)=>{
      setLivesLeft(liveLeft-1);
      if(liveLeft<=0){
        //redirect here
        navigate("/")
      }else{
        setMessage(liveLeft+" lives left! BE CAREFUL!")
      }


    }

  

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMouseCoords({ x: clientX, y: clientY });
  };

  const handleNextStage =()=>{
console.log("next");
  }


  const drawColumns =()=>{
    return(
      <div className=" d-flex flex-nowrap column-container
      ">
      {pillarArray.map((pillar, index) => (
        <div
          key={`column-${index}`}
          onMouseEnter={handlePillarMouseOver} // Removed unnecessary arrow function
          className={`pillar-column ${pillar ? "grow-animation-column" : ""}`}
        ></div>
      ))}
      </div>

    )
  }


  const drawRows = ()=>{
    return(
      <div className="
      row-container">
      {pillarArray.map((pillar, index) => (
        <div
          key={`row-${index}`}
          onMouseEnter={handlePillarMouseOver} // Removed unnecessary arrow function
          className={`pillar-row ${pillar ? "grow-animation" : ""}`}
        ></div>
      ))}
      </div>
    )

  }

  return (
<>

    <div className='pillar-container' onMouseMove={handleMouseMove}  >
    <div id="player" style={{ left: `${mouseCoords.x-15}px`, top: `${mouseCoords.y-15}px` }}>
    </div>


    <button onClick={()=>handleNextStage()} className='pillar-catching-button' style={{ position: 'absolute', ...buttonPosition }}>
        Next
      </button>
          {/* <h1 >Mouse Coordinates: {mouseCoords.x}, {mouseCoords.y}</h1> */}

          {
            showColumn? drawColumns()
            :
            drawRows()
          }

            <div className='pillar-catching-gear-1'><img src={gear}></img></div>
            <div className='pillar-catching-gear-2'><img src={gear}></img></div>

            <div className='pillar-catching-message'>{message}</div>

        </div>
      </>
  )
}

export default PillarCatching