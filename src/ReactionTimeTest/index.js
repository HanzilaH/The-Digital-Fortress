import { useState, useEffect} from "react";
import PuzzleTemplate from "../PuzzleTemplate";
import { useNavigate } from "react-router";
import "./index.scss";

const ReactionTime = () => {
    const [showButton, setShowButton] = useState(false);
    // const [showText, setShowText] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [randomPosition, setRandomPosition] = useState({
        position: "relative",
        left: `${Math.floor(Math.random() * 60) - 30}vw`,
        top: `${Math.floor(Math.random() * 60) - 30}vh`
    });
    const [timerStarted, setTimerStarted] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {

        // setRandomPosition({
        //     position: "relative",
        //     left: `${Math.floor(Math.random() * 30)}vw`,
        //     top: `${Math.floor(Math.random() * 30)}vh`
        // });
        // Set the countdown and button visibility randomly after 1 to 5 seconds
        const randomTime = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        const timeout = setTimeout(() => {
            setShowButton(true);
        //   setShowText(true);
            setTimeLeft(1);
            setTimerStarted(true);
        }, randomTime);

        return () => {

            clearTimeout(timeout);

        };

    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else {
                setShowButton(false);
                // setShowText(false);
                if (timerStarted) {

                    navigate("/");

                }
            }
        }, 1000);

        return () => {
            clearTimeout(timer)
        };
    }, [timeLeft]);

    const handleClick = () => {

        navigate("/test"); // link to next page

    };

    return(
        <PuzzleTemplate title="Think Fast!" puzzle={
            <div>
                <div className="d-flex justify-content-center">
                    <div className="template-card">
                        <div style={randomPosition}>
                            {/* {showText && (
                                <p>Time left: {timeLeft}s</p>
                            )} */}
                            {showButton && (
                            <button className="button-style" onClick={handleClick}>
                                <span>Click Me!</span>
                            </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        }/>

    );
};

export default ReactionTime;