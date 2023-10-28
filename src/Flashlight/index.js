import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Flashlight = () => {

    let [cursorX, setCursorX] = useState(0);
    let [cursorY, setCursorY] = useState(0);



    const handleMouseMove = (e) => {

        setCursorX(e.clientX);
        setCursorY(e.clientY);

    }

    return (
        <div className="flashlight" onMouseMove={(e) => handleMouseMove(e)} style={
            {
                "--cursorX": cursorX + "px",
                "--cursorY": cursorY + "px"
            }
        }>
            <div>
                <Link to="/">
                    <button>Restart</button>
                </Link>
                <Link to="/test">
                    <button>Next Stage</button>
                </Link>
            </div>
        </div>
    )

}

export default Flashlight;
