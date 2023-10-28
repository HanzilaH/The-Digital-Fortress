import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from './StrictModeDroppable';
import { useState } from 'react';
import './index.scss';

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
  ]

const shuffleArray = (array) => {
    const shuffledArray = [...array];
    return shuffledArray.sort(() => Math.random() - 0.5);
}

const areArraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      // Compare the serial (name) property
      if (arr1[i].name !== arr2[i].name) {
        return false;
      }
    }
  
    return true;
  }

const checkDone = (arr1, arr2) => {
    if (arr1.length == 4 && areArraysEqual(arr1, arr2)) {
        rickBool = true;
    }
    else if (areArraysEqual(arr1, arr2)) {
        rolledBool = true;
    }

    if (rickBool && rolledBool) {
        console.log('solved');
        // Next Component
    }
}
  
const shuffledRickArray = shuffleArray(rickArray);
const shuffledRolledArray = shuffleArray(rolledArray);
let rickBool = false;
let rolledBool = false;

const Row = ({ array, originalArray }) => {
    const [characters, updateCharacters] = useState(array);

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);

        checkDone(items, originalArray);
    }

    return (
        <header className="EndingTiles-header">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <StrictModeDroppable droppableId="characters" direction="horizontal">
                    {(provided) => (
                    <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                        {characters.map(({id, name}, index) => {
                        return (
                            <Draggable draggableId={id} index={index} key={id} direction="horizontal">
                            {(provided) => (
                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <p>
                                    { name }
                                </p>
                                </li>
                            )}
                            </Draggable>
                        );
                        })}
                        {provided.placeholder}
                    </ul>
                    )}
                </StrictModeDroppable>
            </DragDropContext>
        </header>
    );
};

const EndingTiles = () => {
    return (
        <div className="EndingTiles">
            <h1>Final Stage</h1>
            <div>
                <Row array = { shuffledRickArray } originalArray = { rickArray } />
                <Row array = { shuffledRolledArray } originalArray = { rolledArray } />
            </div>
            <p>
                Decode the code and rearrange the binaries to spell the code
            </p>
        </div>
    )
}

export default EndingTiles;
