import { Link } from "react-router-dom";
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

    return (

        <>
            <h1 className="puzzle-template-title">{title}</h1>
            {puzzle}
            {(alwaysShowButtons || isSolved) && (
                isSolved ? (
                    <div>
                        <Link to="/">
                            <button>Restart</button>
                        </Link>
                        <Link to={nextStage}>
                            <button>Next Stage</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Link to="/">
                            <button>Restart</button>
                        </Link>
                        <Link to="/">
                            <button>Next Stage</button>
                        </Link>
                    </div>
                )
            )}
        </>

    )

}

export default PuzzleTemplate;