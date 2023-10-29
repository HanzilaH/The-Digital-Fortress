import React from 'react'
import './index.scss'
import { useState, useEffect } from 'react';

// import Pillar from './Pillar';

const PillarCatching = () => {

    // const [pillars, setPillars] = useState([]);

    // const handleMouseMove = (e) => {
    //   const { clientX, clientY } = e;
    //   setPillars([{ x: clientX - 10, y: clientY - 50 }]);
    // };
    // const [pillar, setPillar] = useState(null)
    const [pillarArray, setPillarArray] = useState([false,false,false,false,false]) 

    const [pillarCoord, setPillarCoord] = useState({ x: 0, y: 0 })
    const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });




    useEffect(()=>{



      // const items = [pillarCoord.x, window.innerWidth];
      // const itemsT = [pillarCoord.y, window.innerHeight];

      // const randomIndex = Math.floor(Math.random() * items.length);

      // // console.log(items[randomIndex]
      //   // );
      // setPillar(null)
      // setPillar(<Pillar x={items[randomIndex]} y = {itemsT[randomIndex % 2]} left={false} top={false} ></Pillar>)
      const verticalPositionRatio = pillarCoord.y / window.innerHeight;
      let interval = 0

      if (verticalPositionRatio <= 0.2) {
        // setPillarArray(arr=>)
        interval = 0;
      } else if (verticalPositionRatio <= 0.4) {
        interval = 1;
      } else if (verticalPositionRatio <= 0.6) {
        interval = 2;
      } else if (verticalPositionRatio <= 0.8) {
        interval = 3;
      } else {
        interval = 4;
      }

      console.log('interval is'+ interval);


      setPillarArray((arr) =>{
        console.log('undef here');
        return arr.map((value, index) => (index === interval ? true : false))}
      );

    }, [pillarCoord])

    useEffect(() => {
      const intervalId = setInterval(() => {
        const { x, y } = mouseCoords;
        // console.log('hi');
        setPillarCoord({ x, y });
      }, 1000); 
  
      return () => {
        clearInterval(intervalId); // Clean up the interval when the component unmounts
      };
    }, [mouseCoords]); 
  

      // Event handler to update mouse coordinates
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMouseCoords({ x: clientX, y: clientY });
  };

  return (
    <div className='pillar-container' onMouseMove={handleMouseMove}  >
      <h1 >Mouse Coordinates: {pillarCoord.x}, {pillarCoord.y}</h1>
      <div className="
        container">
            <div className={`pillar-row ${pillarArray[0] ? "grow-animation" : ""}`}></div>

            <div className={`pillar-row ${pillarArray[1] ? "grow-animation" : ""}`}></div>
            <div className={`pillar-row ${pillarArray[2] ? "grow-animation" : ""}`}></div>
            <div className={`pillar-row ${pillarArray[3] ? "grow-animation" : ""}`}></div>
            <div className={`pillar-row ${pillarArray[4] ? "grow-animation" : ""}`}></div>
            {/* <div className={`pillar-row ${pillarArray[5] ? "grow-animation" : ""}`}></div> */}


        </div>

        <div className='player'>

        </div>
      {
        // <Pillar></Pillar>
        // pillar
      }

    </div>
  )
}

export default PillarCatching