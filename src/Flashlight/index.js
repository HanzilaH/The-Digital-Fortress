import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./index.scss";

const Flashlight = () => {

    let [cursorX, setCursorX] = useState(0);
    let [cursorY, setCursorY] = useState(0);
    let [animationTimes, setAnimationTimes] = useState({
        "restartXAnimationTime": (Math.random() + 4) + "s",
        "nextStageXAnimationTime": (Math.random() + 4) + "s",
        "restartYAnimationTime": (Math.random() + 5) + "s",
        "nextStageYAnimationTime": (Math.random() + 5) + "s"
    });
    const navigate = useNavigate();

    const handleMouseMove = (e) => {

        setCursorX(e.clientX);
        setCursorY(e.clientY);

    }

    const handleOnClick = (e) => {


        console.log("hi");
        navigate(e);

    }

    return (
        <>
        
        <div className="flashlight"  onMouseMove={(e) => handleMouseMove(e)} style={
        // <div onMouseMove={(e) => handleMouseMove(e)} style={
            {
                "--cursorX": cursorX + "px",
                "--cursorY": cursorY + "px"
            }
        }>
            <button className="bouncingRestartButton" style={
                {
                    "--x-animation-time": animationTimes.restartXAnimationTime,
                    "--y-animation-time": animationTimes.restartYAnimationTime
                }
            } onClick={() => {handleOnClick("/")}}>
                Restart
            </button>
            <button className="bouncingNextStageButton" style={
                {
                    "--x-animation-time": animationTimes.nextStageXAnimationTime,
                    "--y-animation-time": animationTimes.nextStageYAnimationTime
                }
            } onClick={() => {handleOnClick("/test")}}>
                Next Stage
            </button>
        </div>
        </>
    )

}

export default Flashlight;
