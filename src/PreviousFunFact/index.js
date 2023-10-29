import { useState } from "react";
import PuzzleTemplate from "../PuzzleTemplate";
import PreviousFunFactTile from "../PreviousFunFactTiles";
import "./index.scss";

const funFacts = [
    "Honey never spoils",
    "Octopuses have three hearts",
    "The Eiffel Tower can be 6 inches taller during the summer",
    "The world's largest desert is not the Sahara; it's Antarctica",
    "Wombat feces are cube-shaped",
    "Bananas are berries, but strawberries are not",
    "Sloths only poop once a week",
    "The world's oldest known recipe is for beer",
    "A day on Venus is longer than its year",
    "Honeybees can recognize human faces",
    "Armadillos always give birth to identical quadruplets",
    "The unicorn is Scotland's national animal",
    "There's a basketball court on the fifth floor of the U.S. Supreme Court building",
    "The Guinness World Record for the most T-shirts worn at once is 260",
    "The Mantis shrimp has the most complex eyes in the animal kingdom"
];

const PreviousFunFact = () => {
    const getArray = () => {
        const newSet = new Set();
        newSet.add(correctAnswer);
        while (newSet.size < 5) {
            newSet.add(Math.floor(Math.random() * funFacts.length));
        }
        return Array.from(newSet).sort(() => Math.random() - 0.5);
    };
    
    const [correctAnswer, setSelectedQuestion] = useState(3);
    const [solved, setSolved] = useState(false);
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
                    <PreviousFunFactTile funFact={ funFacts[item] } onTileClick={() => handleClick(item, index)} key={index} isCorrect={indexState === index} />
                ))}
          </div>
        } />
    )
}

export default PreviousFunFact;