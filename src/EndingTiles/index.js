import { useState } from 'react';
import './index.scss';
import PuzzleTemplate from '../PuzzleTemplate';
import EndingTilesRow from '../EndingTilesRows';

const rickArray = [
    {
        id: 'tile0',
        hint: 'R',
        name: '01010010',
    },
    {
        id: 'tile1',
        hint: 'I',
        name: '01001001',
    },
    {
        id: 'tile2',
        hint: 'C',
        name: '01100011',
    },
    {
        id: 'tile3',
        hint: 'K',
        name: '01001011',
    }
];
const rolledArray = [{
        id: 'tile4',
        hint: 'R',
        name: '01010010',
    },
    {
        id: 'tile5',
        hint: 'O',
        name: '01001111',
    },
    {
        id: 'tile6',
        hint: 'L',
        name: '01001100',
    },
    {
        id: 'tile7',
        hint: 'L',
        name: '01001100',
    },
    {
        id: 'tile8',
        hint: 'E',
        name: '01000101',
    },
    {
        id: 'tile9',
        hint: 'D',
        name: '01000100',
    }
];

const shuffleArray = (array) => {
    const shuffledArray = [...array];
    return shuffledArray.sort(() => Math.random() - 0.5);
}
  
const shuffledRickArray = shuffleArray(rickArray);
const shuffledRolledArray = shuffleArray(rolledArray);

const EndingTiles = () => {
    const [solved, setSolved] = useState(false);

    return (
        <PuzzleTemplate title = "Final Stage" isSolved = { solved } puzzle = {
            <div className="EndingTiles">
                <div>
                    <EndingTilesRow array = { shuffledRickArray } originalArray = { rickArray } setSolved = { setSolved } />
                    <EndingTilesRow array = { shuffledRolledArray } originalArray = { rolledArray } setSolved = { setSolved } />
                </div>
                <p>
                    Decode the code and rearrange the binaries to spell the code
                </p>
            </div>
        }/>

    )
}

export default EndingTiles;
