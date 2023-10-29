import { useEffect, useState } from 'react'
import MazeSquare from '../MazeSquare';
import PuzzleTemplate from '../PuzzleTemplate';
import "./index.scss";

const Maze = () => {

    const MAZE_WIDTH = 15;
    const MAZE_HEIGHT = 15;

    let [squares, setSquares] = useState(Array(MAZE_HEIGHT).fill(0).map(() => Array(MAZE_WIDTH).fill({
        "left": true,
        "top": true,
        "right": true,
        "bottom": true,
        "playerIn": false
    })));
    let [currentPosition, setCurrentPosition] = useState([0, 0]);
    let [endSquare, setEndSquare] = useState([0, 0]);
    let [isSolved, setIsSolved] = useState(false);
    let [controlsFlipped, setControlsFlipped] = useState(true);

    // initialise maze
    useEffect(() => {

        // generate end point on edge of maze

        // 0 = top
        // 1 = right
        // 2 = bottom
        // 3 = left
        const endSide = Math.floor(Math.random() * 4);

        // tracking variables
        let visitedSquares = Array(MAZE_HEIGHT).fill(0).map(() => Array(MAZE_WIDTH).fill(false));
        let numOfSquaresToVisit = MAZE_WIDTH * MAZE_HEIGHT;
        let nextSquares;
        let currentPosition;

        // initialise currentPosition and nextSquares based on end point
        switch (endSide) {

            case 0:
                currentPosition = [0, Math.floor(Math.random() * MAZE_WIDTH)];
                setEndSquare([currentPosition, 0]);
                nextSquares = squares.map((value, index) => {

                    if (index === currentPosition[0]) {

                        return value.map((value, index) => {

                            if (index === currentPosition[1]) {

                                return {
                                    ...value,
                                    "top": false
                                };

                            } else {

                                return value;

                            }

                        })

                    } else {

                        return value;

                    }

                });
                break;

            case 1:
                currentPosition = [Math.floor(Math.random() * MAZE_HEIGHT), MAZE_WIDTH - 1];
                setEndSquare([currentPosition, 1]);
                nextSquares = squares.map((value, index) => {

                    if (index === currentPosition[0]) {

                        return value.map((value, index) => {

                            if (index === currentPosition[1]) {

                                return {
                                    ...value,
                                    "right": false
                                };

                            } else {

                                return value;

                            }

                        })

                    } else {

                        return value;

                    }

                });
                break;

            case 2:
                currentPosition = [MAZE_HEIGHT - 1, Math.floor(Math.random() * MAZE_WIDTH)];
                setEndSquare([currentPosition, 2]);
                nextSquares = squares.map((value, index) => {

                    if (index === currentPosition[0]) {

                        return value.map((value, index) => {

                            if (index === currentPosition[1]) {

                                return {
                                    ...value,
                                    "bottom": false
                                };

                            } else {

                                return value;

                            }

                        })

                    } else {

                        return value;

                    }

                })
                break;

            case 3:
                currentPosition = [Math.floor(Math.random() * MAZE_HEIGHT), 0];
                setEndSquare([currentPosition, 3]);
                nextSquares = squares.map((value, index) => {

                    if (index === currentPosition[0]) {

                        return value.map((value, index) => {

                            if (index === currentPosition[1]) {

                                return {
                                    ...value,
                                    "left": false
                                };

                            } else {

                                return value;

                            }

                        })

                    } else {

                        return value;

                    }

                })
                break;

            default:
                break;

        }

        visitedSquares[currentPosition[0]][currentPosition[1]] = true;
        numOfSquaresToVisit--;

        // in form [[outer index, inner index], direction to go from that position]
        let squareVisitingStack = [];
        let squaresToVisit = [];
        if (currentPosition[0] !== 0) {

            if (visitedSquares[currentPosition[0] - 1][currentPosition[1]] === false) {

                squaresToVisit.push([currentPosition, 0]);

            }

        }
        if (currentPosition[1] !== MAZE_WIDTH - 1) {

            if (visitedSquares[currentPosition[0]][currentPosition[1] + 1] === false) {

                squaresToVisit.push([currentPosition, 1]);

            }

        }
        if (currentPosition[0] !== MAZE_HEIGHT - 1) {

            if (visitedSquares[currentPosition[0] + 1][currentPosition[1]] === false) {

                squaresToVisit.push([currentPosition, 2]);

            }

        }
        if (currentPosition[1] !== 0) {

            if (visitedSquares[currentPosition[0]][currentPosition[1] - 1] === false) {

                squaresToVisit.push([currentPosition, 3]);

            }

        }
        while (squaresToVisit.length > 0) {

            squareVisitingStack.push(squaresToVisit.splice(Math.floor(Math.random() * squaresToVisit.length), 1)[0]);

        }

        // dfs by randomly picking edges at each node to create maze
        while (numOfSquaresToVisit > 0) {

            let squareToVisit = squareVisitingStack.pop();

            // get position of newly visited square
            switch (squareToVisit[1]) {

                case 0:
                    currentPosition = [squareToVisit[0][0] - 1, squareToVisit[0][1]];
                    break;

                case 1:
                    currentPosition = [squareToVisit[0][0], squareToVisit[0][1] + 1];
                    break;

                case 2:
                    currentPosition = [squareToVisit[0][0] + 1, squareToVisit[0][1]];
                    break;

                case 3:
                    currentPosition = [squareToVisit[0][0], squareToVisit[0][1] - 1];
                    break;

                default:
                    break;

            }

            // check that square hasn't already been visited
            if (visitedSquares[currentPosition[0]][currentPosition[1]]) {

                continue;

            }

            // change borders of maze
            switch (squareToVisit[1]) {

                case 0:
                    nextSquares = nextSquares.map((value, index) => {

                        if (index === squareToVisit[0][0]) {

                            return value.map((value, index) => {

                                if (index === squareToVisit[0][1]) {

                                    return {
                                        ...value,
                                        "top": false
                                    };

                                } else {

                                    return value;

                                }

                            })

                        } else if (index === currentPosition[0]) {

                            return value.map((value, index) => {

                                if (index === currentPosition[1]) {

                                    return {
                                        ...value,
                                        "bottom": false
                                    }

                                } else {

                                    return value;

                                }

                            })

                        } else {

                            return value;

                        }

                    });
                    break;

                case 1:
                    nextSquares = nextSquares.map((value, index) => {

                        if (index === squareToVisit[0][0]) {

                            return value.map((value, index) => {

                                if (index === squareToVisit[0][1]) {

                                    return {
                                        ...value,
                                        "right": false
                                    };

                                } else if (index === currentPosition[1]) {

                                    return {
                                        ...value,
                                        "left": false
                                    };

                                } else {

                                    return value;

                                }

                            });

                        } else {

                            return value;

                        }

                    });
                    break;

                case 2:
                    nextSquares = nextSquares.map((value, index) => {

                        if (index === squareToVisit[0][0]) {

                            return value.map((value, index) => {

                                if (index === squareToVisit[0][1]) {

                                    return {
                                        ...value,
                                        "bottom": false
                                    };

                                } else {

                                    return value;

                                }

                            })

                        } else if (index === currentPosition[0]) {

                            return value.map((value, index) => {

                                if (index === currentPosition[1]) {

                                    return {
                                        ...value,
                                        "top": false
                                    }

                                } else {

                                    return value;

                                }

                            })

                        } else {

                            return value;

                        }

                    });
                    break;

                case 3:
                    nextSquares = nextSquares.map((value, index) => {

                        if (index === squareToVisit[0][0]) {

                            return value.map((value, index) => {

                                if (index === squareToVisit[0][1]) {

                                    return {
                                        ...value,
                                        "left": false
                                    };

                                } else if (index === currentPosition[1]) {

                                    return {
                                        ...value,
                                        "right": false
                                    };

                                } else {

                                    return value;

                                }

                            });

                        } else {

                            return value;

                        }

                    });
                    break;

                default:
                    break;

            }

            // update variables
            visitedSquares[currentPosition[0]][currentPosition[1]] = true;
            numOfSquaresToVisit--;
            squaresToVisit = [];
            if (currentPosition[0] !== 0) {

                if (visitedSquares[currentPosition[0] - 1][currentPosition[1]] === false) {

                    squaresToVisit.push([currentPosition, 0]);

                }

            }
            if (currentPosition[1] !== MAZE_WIDTH - 1) {

                if (visitedSquares[currentPosition[0]][currentPosition[1] + 1] === false) {

                    squaresToVisit.push([currentPosition, 1]);

                }

            }
            if (currentPosition[0] !== MAZE_HEIGHT - 1) {

                if (visitedSquares[currentPosition[0] + 1][currentPosition[1]] === false) {

                    squaresToVisit.push([currentPosition, 2]);

                }

            }
            if (currentPosition[1] !== 0) {

                if (visitedSquares[currentPosition[0]][currentPosition[1] - 1] === false) {

                    squaresToVisit.push([currentPosition, 3]);

                }

            }

            while (squaresToVisit.length > 0) {

                squareVisitingStack.push(squaresToVisit.splice(Math.floor(Math.random() * squaresToVisit.length), 1)[0]);

            }

        }

        // set initial position to middle of maze
        nextSquares = nextSquares.map((value, index) => {

            if (index === Math.floor(MAZE_HEIGHT/2)) {

                return value.map((value, index) => {

                    if (index === Math.floor(MAZE_WIDTH/2)) {

                        return {
                            ...value,
                            "playerIn": true
                        }

                    } else {

                        return value;

                    }

                })

            } else {

                return value;

            }

        });
        setCurrentPosition([Math.floor(MAZE_HEIGHT/2), Math.floor(MAZE_WIDTH/2)]);

        setSquares(nextSquares);

    }, []);

    // constantly flip controls
    useEffect(() => {

        const interval = setInterval(() => {

            setControlsFlipped((controlsFlipped) => !controlsFlipped);

        }, 5000);

        return () => {

            clearInterval(interval);

        }

    }, []);

    // constantly teleports player to random position in maze
    // useEffect(() => {

    //     const interval = setInterval(() => {

    //         teleportPlayerToRandomPosition();

    //     }, 30000);

    //     return () => {

    //         clearInterval(interval);

    //     }

    // }, []);

    // const teleportPlayerToRandomPosition = () => {

    //     let randomPosition = [1 + Math.floor(Math.random() * (MAZE_HEIGHT - 2)), 1 + Math.floor(Math.random() * (MAZE_WIDTH - 2))];
    //     let nextSquares;

    //     if (randomPosition[0] === currentPosition[0]) {

    //         nextSquares = squares.map((value, index) => {

    //             if (index === currentPosition[0]) {

    //                 return value.map((value, index) => {

    //                     if (index === currentPosition[1]) {

    //                         return {

    //                             ...value,
    //                             "playerIn": false

    //                         };

    //                     } else if (index === randomPosition[1]) {

    //                         return {

    //                             ...value,
    //                             "playerIn": false

    //                         };

    //                     } else {

    //                         return value;

    //                     }

    //                 });

    //             } else {

    //                 return value;

    //             }

    //         });

    //     } else {

    //         nextSquares = squares.map((value, index) => {

    //             if (index === currentPosition[0]) {

    //                 return value.map((value, index) => {

    //                     if (index === currentPosition[1]) {

    //                         return {
    //                             ...value,
    //                             "playerIn": false
    //                         };

    //                     } else {

    //                         return value;

    //                     }

    //                 });

    //             } else if (index === randomPosition[0]) {

    //                 return value.map((value, index) => {

    //                     if (index === randomPosition[1]) {

    //                         return {
    //                             ...value,
    //                             "playerIn": true
    //                         };

    //                     } else {

    //                         return value;

    //                     }

    //                 });

    //             } else {

    //                 return value;

    //             }

    //         });

    //     }

    //     setSquares((squares) => nextSquares);
    //     setCurrentPosition((currentPosition) => randomPosition);

    // }

    const handleKeyDown = (e) => {

        if ((!controlsFlipped && e.key === "ArrowDown") || (controlsFlipped && e.key === "ArrowUp")) {

            // check for game win
            if ((JSON.stringify(currentPosition) === JSON.stringify(endSquare[0])) && (endSquare[1] === 2)) {

                setIsSolved(true);

            } else if ((currentPosition[0] !== MAZE_HEIGHT - 1) && (squares[currentPosition[0]][currentPosition[1]]["bottom"] === false)) {

                let nextSquares = squares.map((value, index) => {

                    if (index === currentPosition[0]) {

                        return value.map((value, index) => {

                            if (index === currentPosition[1]) {

                                return {
                                    ...value,
                                    "playerIn": false
                                };

                            } else {

                                return value;

                            }

                        });

                    } else if (index === currentPosition[0] + 1) {

                        return value.map((value, index) => {

                            if (index === currentPosition[1]) {

                                return {
                                    ...value,
                                    "playerIn": true
                                };

                            } else {

                                return value;

                            }

                        });

                    } else {

                        return value;

                    }

                });
                setSquares(nextSquares);
                setCurrentPosition([currentPosition[0] + 1, currentPosition[1]]);

            }

        } else if ((!controlsFlipped && e.key === "ArrowLeft") || (controlsFlipped && e.key === "ArrowRight")) {

            // check for game win
            if ((JSON.stringify(currentPosition) === JSON.stringify(endSquare[0])) && (endSquare[1] === 3)) {

                setIsSolved(true);

            } else if ((currentPosition[1] !== 0) && (squares[currentPosition[0]][currentPosition[1]]["left"] === false)) {

                let nextSquares = squares.map((value, index) => {

                    if (index === currentPosition[0]) {

                        return value.map((value, index) => {

                            if (index === currentPosition[1]) {

                                return {
                                    ...value,
                                    "playerIn": false
                                };

                            } else if (index === currentPosition[1] - 1) {

                                return {
                                    ...value,
                                    "playerIn": true
                                };

                            } else {

                                return value;

                            }

                        });

                    } else {

                        return value;

                    }

                });
                setSquares(nextSquares);
                setCurrentPosition([currentPosition[0], currentPosition[1] - 1]);

            }

        } else if ((!controlsFlipped && e.key === "ArrowRight") || (controlsFlipped && e.key === "ArrowLeft")) {

            // check for game win
            if ((JSON.stringify(currentPosition) === JSON.stringify(endSquare[0])) && (endSquare[1] === 1)) {

                setIsSolved(true);

            } else if ((currentPosition[1] !== MAZE_WIDTH - 1) && (squares[currentPosition[0]][currentPosition[1]]["right"] === false)) {

                let nextSquares = squares.map((value, index) => {

                    if (index === currentPosition[0]) {

                        return value.map((value, index) => {

                            if (index === currentPosition[1]) {

                                return {
                                    ...value,
                                    "playerIn": false
                                };

                            } else if (index === currentPosition[1] + 1) {

                                return {
                                    ...value,
                                    "playerIn": true
                                };

                            } else {

                                return value;

                            }

                        });

                    } else {

                        return value;

                    }

                });
                setSquares(nextSquares);
                setCurrentPosition([currentPosition[0], currentPosition[1] + 1]);

            }

        } else if ((!controlsFlipped && e.key === "ArrowUp") || (controlsFlipped && e.key === "ArrowDown")) {

            // check for game win
            if ((JSON.stringify(currentPosition) === JSON.stringify(endSquare[0])) && (endSquare[1] === 0)) {

                setIsSolved(true);

            } else if ((currentPosition[0] !== 0) && (squares[currentPosition[0]][currentPosition[1]]["top"] === false)) {

                let nextSquares = squares.map((value, index) => {

                    if (index === currentPosition[0]) {

                        return value.map((value, index) => {

                            if (index === currentPosition[1]) {

                                return {
                                    ...value,
                                    "playerIn": false
                                };

                            } else {

                                return value;

                            }

                        });

                    } else if (index === currentPosition[0] - 1) {

                        return value.map((value, index) => {

                            if (index === currentPosition[1]) {

                                return {
                                    ...value,
                                    "playerIn": true
                                };

                            } else {

                                return value;

                            }

                        });

                    } else {

                        return value;

                    }

                });
                setSquares(nextSquares);
                setCurrentPosition([currentPosition[0] - 1, currentPosition[1]]);

            }

        }

    }

    return (
        <PuzzleTemplate title="Click inside the maze to start" nextStage="/reactionTime" isSolved={ isSolved } puzzle={
            <div className="maze-grid" tabIndex="0" onKeyDown={ (e) => {handleKeyDown(e)} }>
                {
                    squares.map((value, outerIndex) => (

                        <div className="maze-row" key={outerIndex}>
                            {
                                value.map((value, innerIndex) => <MazeSquare rectangles={squares} outerIndex={outerIndex} innerIndex={innerIndex} key={[outerIndex, innerIndex]} />)
                            }
                        </div>

                    ))
                }
            </div>
        } />
    )
}

export default Maze;
