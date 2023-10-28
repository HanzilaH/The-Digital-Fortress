import React, { useEffect, useState } from 'react';
import SlidingPuzzleTile from '../SlidingPuzzleTile';
import PuzzleTemplate from '../PuzzleTemplate';

const SlidingPuzzle = () => {
  const createTile = (row, col, face) => {
    return {
      row,
      col,
      face,
    };
  };

  const initialiseTiles = () => {
    const initialContents = Array(3).fill(null).map(() => Array(3).fill(null));
    let counter = 1;
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        initialContents[r][c] = createTile(r, c, counter++);
      }
    }
    initialContents[2][2] = createTile(2, 2, '')
    return initialContents;
  }

  const shuffle = () => {
    // Mix up the board through a series of legal moves.
    const rand = Math.floor(Math.random() * 1000);
    for (let i = 0; i < rand; i++) {
      const r = Math.floor(Math.random() * 3);
      const c = Math.floor(Math.random() * 3);
      moveTile(r, c);
    }
  };

  const [contents, setContents] = useState(initialiseTiles());

  // Shuffle the tiles around to create a new game.
  const shuffleTwoTiles = () => {
    exchangeTiles(Math.floor(Math.random() * 3), Math.floor(Math.random() * 3), Math.floor(Math.random() * 3), Math.floor(Math.random() * 3))
  };

  useEffect(() => {
    shuffle();
    const intervalId = setInterval(shuffleTwoTiles, 60000);

    return () => {
      clearInterval(intervalId);
    }
  }, [])


  // Move a tile to an empty position beside it, if possible.
  // Return true if it was moved, false if not legal.
  const moveTile = (r, c) => {
    // It's a legal move if the empty cell is next to it.
    return checkEmpty(r, c, -1, 0) || checkEmpty(r, c, 1, 0) || checkEmpty(r, c, 0, -1) || checkEmpty(r, c, 0, 1);
  };

  // Check to see if there is an empty position beside the tile.
  // Return true and exchange if possible, else return false.
  const checkEmpty = (r, c, rdelta, cdelta) => {
    const rNeighbor = r + rdelta;
    const cNeighbor = c + cdelta;
    // Check to see if this neighbor is on the board and is empty.
    if (isLegalRowCol(rNeighbor, cNeighbor) && contents[rNeighbor][cNeighbor].face === '') {
      exchangeTiles(r, c, rNeighbor, cNeighbor);
      return true;
    }
    return false;
  };

  // Check for legal row, column
  const isLegalRowCol = (r, c) => {
    return r >= 0 && r < 3 && c >= 0 && c < 3;
  };

  // Exchange two tiles.
  const exchangeTiles = (r1, c1, r2, c2) => {
    // Create a copy of the current contents state
    const newContents = [...contents];
    const temp = contents[r1][c1];
    newContents[r1][c1] = newContents[r2][c2];
    newContents[r2][c2] = temp;

    // Set the state with the updated contents
    setContents(newContents);
  };

  const isInFinalPosition = (rowIn, columnIn, tile) => {
    return rowIn === tile.row && columnIn === tile.col;
  }

  // Check if the game is over.
  const gameOver = () => {
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        if (!isInFinalPosition(r, c, contents[r][c])) {
          return false;
        }
      }
    }
    return true;
  };

  const handleClick = (row, column) => {
    moveTile(row, column);
    if (gameOver()){
      setSolved(true);
    }
  }

  
  const [solved, setSolved] = useState(false);

  return (
    <PuzzleTemplate title = "Sliding Puzzle" isSolved = { solved } puzzle = {
      <div className="Model">
        <div className="board-row">
          <SlidingPuzzleTile value={contents[0][0].face} onTileClick={() => handleClick(0, 0)} />
          <SlidingPuzzleTile value={contents[0][1].face} onTileClick={() => handleClick(0, 1)} />
          <SlidingPuzzleTile value={contents[0][2].face} onTileClick={() => handleClick(0, 2)} />
        </div>
        <div className="board-row">
          <SlidingPuzzleTile value={contents[1][0].face} onTileClick={() => handleClick(1, 0)} />
          <SlidingPuzzleTile value={contents[1][1].face} onTileClick={() => handleClick(1, 1)} />
          <SlidingPuzzleTile value={contents[1][2].face} onTileClick={() => handleClick(1, 2)} />
        </div>
        <div className="board-row">
          <SlidingPuzzleTile value={contents[2][0].face} onTileClick={() => handleClick(2, 0)} />
          <SlidingPuzzleTile value={contents[2][1].face} onTileClick={() => handleClick(2, 1)} />
          <SlidingPuzzleTile value={contents[2][2].face} onTileClick={() => handleClick(2, 2)} />
        </div>
      </div>
    }/>
  );
};

export default SlidingPuzzle;
