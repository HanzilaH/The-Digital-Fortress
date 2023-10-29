import React from "react";
import "./index.scss";

const Pillar = ({ x, y, left, top }) => {
  console.log(x);
  console.log(y);

  const pillarHeight = left ? "20px" : `${x}px`;
  const pillarWidth = top ? `${y}px` : "100px";

  return (

    <>
    
    {/* <div className="pillar grow-animation" style={{ height: pillarHeight, width: pillarWidth }} /> */}


    <div className="pillar-container">
      <div className="pillar north-pillar"></div>
      <div className="pillar east-pillar"></div>
      <div className="pillar west-pillar"></div>
      <div className="pillar south-pillar"></div>
    </div>
    </>

  );
};

export default Pillar;
