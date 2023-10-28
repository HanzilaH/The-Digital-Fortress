import { useNavigate } from "react-router-dom";
import "./index.scss";

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
 * @param puzzle html/jsx: The actual puzzle html/jsx content
 */
const PuzzleTemplate = ({ title = "", nextStage = "/", alwaysShowButtons = false, isSolved = false, puzzle }) => {

    const navigate = useNavigate();

    const handleClick = (e) => {

        navigate(e);

    }

    return (
        <>
            <div className="text-center template-top">
                <h1 className="puzzle-template-title">{title}</h1>
            </div>

            <div className="d-flex justify-content-center">
                <div className="template-card">
                    {puzzle}
                </div>
            </div>

            <div className="template-footer d-flex justify-content-center">
                {(alwaysShowButtons || isSolved) && (
                    isSolved ? (
                        <>
                            <div>
                                <button onClick={() => {handleClick("/")}}>Restart</button>
                            </div>
                            <div>
                                <button onClick={() => {handleClick(nextStage)}}>Next Stage</button>
                            </div>
                        </>
                        ) : (
                        <>
                            <div>
                                <button onClick={() => {handleClick("/")}}>Restart</button>
                            </div>
                            <div>
                                <button onClick={() => {handleClick("/")}}>Next Stage</button>
                            </div>
                        </>
                    )
                )}
            </div>
        </>
    )

}

export default PuzzleTemplate;
