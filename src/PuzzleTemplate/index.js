import { Link } from "react-router-dom";
import "./index.scss";

/**
 * General puzzle template
 *
 * @param title String: The title displayed at the top of the page
 * @param nextStage String: The URL to the next stage of the puzzle (e.g. "/nextStage")
 * @param isSolved boolean: Whether the puzzle is solved or not (false will hide the restart and next stage button whilst true will show them)
 * @param puzzle html/jsx: The actual puzzle html/jsx content
 */
const PuzzleTemplate = ({ title = "", nextStage = "/", isSolved = false, puzzle }) => {

    return (

        <>
            <h1 className="puzzle-template-title">{title}</h1>
            {puzzle}
            {isSolved && (
                <div>
                    <Link to="/">
                        <button>Restart</button>
                    </Link>
                    <Link to={nextStage}>
                        <button>Next Stage</button>
                    </Link>
                </div>
            )}
        </>

    )

}

export default PuzzleTemplate;
