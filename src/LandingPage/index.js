import React from "react";
import "./index.scss";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_INDEX } from "../reducers/indexReducer";

const Button = ({ onHover }) => {
  const [position, setPosition] = useState({
    x: 48,
    y: 70,
  });

  const handleClick = () => {
  };

  const moveButton = () => {
    const newPosition = {
      x: Math.floor(Math.random() * 69) + 1,
      y: Math.floor(Math.random() * 69) + 1,
    };

    onHover();

    setPosition(newPosition);
  };

  return (
    <button
      id="begin-button"
      style={{
        height: "3em",
        width: "5em",
        border: "none",
        borderRadius: "7em",
        background: "#044543",
        fontSize: "17px",
        color: "#ffffff",
        fontFamily: "inherit",
        fontWeight: 500,
        position: "absolute",
        zIndex: 1000,
        left: position.x + "vw",
        top: position.y + "vh",
      }}
      onClick={handleClick}
      onMouseOver={moveButton}
    >
      Begin
    </button>
  );
};

const GearBox = () => {
  return (
    <div className="gearbox">
      <div className="overlay"></div>
      <div className="gear one">
        <div className="gear-inner">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="gear two">
        <div className="gear-inner">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="gear three">
        <div className="gear-inner">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <div className="gear four large">
        <div className="gear-inner">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.focus();
  }, []);

  const dispatch = useDispatch();
  const FUN_FACTS = useSelector((state) => state.index.FUN_FACTS);
  const [index, setIndex] = useState(
    Math.floor(Math.random() * FUN_FACTS.length)
  );
  dispatch(SET_INDEX(index));
  const [hoverNumber, setHoverNumber] = useState(0);
  const [sentence, setSentence] = useState("Did you know?\n" + FUN_FACTS[index]);

  const navigate = useNavigate();

  const handleOnPress = (e) => {

        if (e.key === 'Enter') {
            navigate("/fakeCaptcha");
        }

    }

  const handleHover = () => {
    setHoverNumber(hoverNumber + 1);

    if (hoverNumber >= 10) {
      setSentence("You dummy, just press Enter!");
    }
  };
  return (
    <div
      className="landing-page-container"
      ref={divRef}
      tabIndex={0}
      onKeyDown={handleOnPress}
    >
      <div className="landing-page-title d-flex align-items-center justify-content-center">
        The Digital Fortress
      </div>

      <div className="gear-container">
        <GearBox />
      </div>

      <Button onHover={handleHover} />
      <div><pre className="text-center">{sentence}</pre></div>
    </div>
  );
}

export default LandingPage;
