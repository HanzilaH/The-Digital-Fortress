import { useNavigate } from "react-router-dom";
import "./index.scss";
import { useState } from "react";
import videoSource from '../assets/rickRolled.mp4';

const gearImageOne = require("../assets/gear1.png");
const gearImageTwo = require("../assets/gear2.png");
const gearImageThree = require("../assets/gear3.png");


/**
 * General puzzle template
 *
 * @param title String: The title displayed at the top of the page
 *                    : default = ""
 * @param nextStage String: The URL to the next stage of the puzzle (e.g. "/nextStage")
 *                        : default = "/"
 * @param alwaysShowButtons boolean: Whether the restart and next stage buttons will always be shown
 *                                 : default = false
 * @param isSolved boolean: Whether the puzzle is solved or not
 *                        : If alwaysShowButtons is false, then a value of false will hide the restart and next stage button
 *                        : If alwaysShowButtons is true, then a value of false will always redirect back to the starting page
 *                        : default = false
 * @param swappedButtons boolean: To show swapped restart and next buttons
 * @param puzzle html/jsx: The actual puzzle html/jsx content
 */
const PuzzleTemplate = ({ title = "", nextStage = "/", alwaysShowButtons = false, isSolved = false, swappedButtons = false, lastStage = false, puzzle }) => {

    const navigate = useNavigate();

    const [showVideo, setShowVideo] = useState(false)

    const RickRollVideo = ()=>{
        setShowVideo(true)
        
    }
    if(showVideo){
        return (
            <video
                controls
                autoPlay
                src={videoSource}
                style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
            />
        )
    }

    const handleClick = (e) => {

        navigate(e);

    }

    return (
        <>
        <div className="image-two-small">
            <img className="image-gear-two-small" src={gearImageTwo} alt="gear1" />
        </div>
        <div className="image-one">
            <img className="image-gear-one" src={gearImageOne} alt="gear1" />
        </div>


        <div className="text-center template-top">
            <h1 className="puzzle-template-title">{title}</h1>
        </div>

        <div className="d-flex justify-content-center">

            <div className="template-card">
            {puzzle}
            </div>

        </div>
        <div className="image-one-translucent">
            <img className="image-gear-one-translucent" src={gearImageOne} alt="gear1" />
        </div>
        <div className="image-two">
            <img className="image-gear-two" src={gearImageTwo} alt="gear2" />
        </div>
        <div className="image-one-small">
            <img className="image-gear-one-small" src={gearImageOne} alt="gear1" />
        </div>
        <div className="image-three">
            <img className="image-gear-three" src={gearImageThree} alt="gear2" />
        </div>
        <div className="image-three-translucent">
            <img className="image-gear-three-translucent" src={gearImageThree} alt="gear2" />
        </div>
        <div className="template-footer d-flex justify-content-center">

            {(alwaysShowButtons || isSolved) && !lastStage && (
                isSolved ? (
                    <>


                    <div>
                            <button className="button-style" onClick={() => {handleClick("/")}}><span>Restart</span></button>

                    </div>
                    <div>
                            <button className="button-style" onClick={() => {handleClick(nextStage)}}><span>Next Stage</span></button>
                    </div>
                    </>
                ) : (
                    <>

                    <div>
                        <button className="button-style" onClick={() => {handleClick("/")}}><span>Restart</span></button>
                        </div>
                    <div>
                    <button className="button-style" onClick={() => {handleClick("/")}}><span>Next Stage</span></button>
                    </div>
                    </>

                )
            )}
            {isSolved && swappedButtons && (
                    <>
                        <div>
                            <button className="button-style" onClick={() => {handleClick(nextStage)}}><span>Next Stage</span></button>
                        </div>
                        <div>
                            <button className="button-style" onClick={() => {handleClick("/")}}><span>Restart</span></button>
                        </div>
                    </>
            )}
            {isSolved && lastStage && (
                    <>
                        <div>
                            <button className="button-style" onClick={() => {RickRollVideo()}}><span>Collect your reward</span></button>
                        </div>
                    </>
            )}
        </div>
        </>
    )
}

export default PuzzleTemplate;
