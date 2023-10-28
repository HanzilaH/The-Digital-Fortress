import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from './StrictModeDroppable';
import { useState } from 'react';
import './index.scss';

const finalSpaceCharacters = [
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
    },
    {
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
  
const shuffledCharacters = shuffleArray(finalSpaceCharacters);

const EndingTiles = () => {
    const [characters, updateCharacters] = useState(finalSpaceCharacters);

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
        console.log(items);
    }

    return (
        <div className="EndingTiles">
        <header className="EndingTiles-header">
            <h1>Final Stage</h1>
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
        <p>
            Decode the code and rearrange the binaries to spell the code
        </p>
        </div>
    );
};

export default EndingTiles;
