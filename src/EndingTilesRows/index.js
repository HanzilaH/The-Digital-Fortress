import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from './StrictModeDroppable';
import  { useState } from 'react';
let rickBool = false;
let rolledBool = false;

// DELETE LATER: remove console.log(), link with RickRollVideo

const EndingTilesRow = ({ array, originalArray, setSolved }) => {
    const areArraysEqual = (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
          return false;
        }

        for (let i = 0; i < arr1.length; i++) {
          if (arr1[i].name !== arr2[i].name) {
            return false;
          }
        }

        return true;
      }

    const checkDone = (arr1, arr2) => {
        if (arr1.length === 4 && areArraysEqual(arr1, arr2)) {
            rickBool = true;
        }
        else if (areArraysEqual(arr1, arr2)) {
            rolledBool = true;
        }

        if (rickBool && rolledBool) {
            console.log("done");
            setSolved(true);
        }
    }

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
                        {characters.map(({id, name, hint}, index) => {
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

export default EndingTilesRow;