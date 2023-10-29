import { useState, useEffect} from "react";
import PuzzleTemplate from "../PuzzleTemplate";

const ReactionTime = () => {
    const [showButton, setShowButton] = useState(false);
    // const [showText, setShowText] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [randomPosition, setRandomPosition] = useState({});

    useEffect(() => {

        setRandomPosition({
            position: "relative",
            left: `${Math.floor(Math.random() * 30)}vw`,
            top: `${Math.floor(Math.random() * 30)}vh`
        });
        // Set the countdown and button visibility randomly after 1 to 5 seconds
        const randomTime = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        setTimeout(() => {
          setShowButton(true);
        //   setShowText(true);
          setTimeLeft(1);
        }, randomTime);
      }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
          if (timeLeft > 0) {
            setTimeLeft(timeLeft - 1);
          }else {
            setShowButton(false);
            // setShowText(false);
          }
        }, 1000);
        return () => clearTimeout(timer);
      }, [timeLeft]);

    const Click = () => {
        if(timeLeft>0) {
            window.location.href = "/"; //link to next page
        } //else return to landing page
    };

    return(
        <PuzzleTemplate title="Think Fast!" puzzle={
            <div>
                <div className="d-flex justify-content-center">
                    <div className="template-card" style={{ display: "block"}}>
                        <div style={randomPosition}>
                        {/* <div> */}
                            {/* {showText && (
                                <p>Time left: {timeLeft}s</p>
                            )} */}
                            {showButton && (
                            <button className="button-style" onClick={Click}>
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