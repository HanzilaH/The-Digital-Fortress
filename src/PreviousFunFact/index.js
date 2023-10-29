import { useState } from "react";
import PuzzleTemplate from "../PuzzleTemplate";
import PreviousFunFactTile from "../PreviousFunFactTiles";
import "./index.scss";
import { useSelector } from "react-redux";

// DELETE LATER: fix navigation, link fun fact with landing page

const PreviousFunFact = () => {

    const funFactIndex = useSelector((state) => state.index.index);
    const FUN_FACTS = useSelector((state) => state.index.FUN_FACTS);
    const [correctAnswer, setSelectedQuestion] = useState(funFactIndex);
    const [solved, setSolved] = useState(false);

    const getArray = () => {
        const newSet = new Set();
        newSet.add(correctAnswer);
        while (newSet.size < 5) {
            newSet.add(Math.floor(Math.random() * FUN_FACTS.length));
        }
        return Array.from(newSet).sort(() => Math.random() - 0.5);
    };

    const [myArray, setMyArray] = useState(getArray());


    const handleClick = (index, idx) => {
        console.log(index);
        console.log(correctAnswer);
        if (index === correctAnswer) {
            console.log(index);
            // setSolved(true);// go to next page
            setIndexState(idx);
        }
        else {
            // Main Page
        }
    };

    const [indexState, setIndexState] = useState()

    return (
        <PuzzleTemplate title="Do you remember the fun fact?" puzzle={
            <div className="fun-facts">
                {myArray.map((item, index) => (
                    <PreviousFunFactTile funFact={ FUN_FACTS[item] } onTileClick={() => handleClick(item, index)} key={index} isCorrect={indexState === index} />
                ))}
          </div>
        } />
    )
}

export default PreviousFunFact;