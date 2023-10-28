import React, { useEffect, useState } from 'react'

import Rectangle from './Rectangle';
// import random


const Maze = () => {
    const [rectangles, setRectanglesDisplay] = useState([])
    const [rectanglesVisited, setRectanglesVisited] = useState([])

    const [backtracking, setBacktracking] = useState(false)
    const [running, setRunning] = useState(true)

    // const rectangles = [];
    const [stack, setStack] = useState([])
    // const stack = []

    const SCREEN_WIDTH = 208;
    const SCREEN_HEIGHT = 208;

    // You can edit these variables to produce a maze of any number of rectangles
    const RECT_WIDTH = 50;
    const RECT_HEIGHT = 50;

    const RECT_NUM_HOR = Math.floor(SCREEN_WIDTH / RECT_WIDTH);
    const RECT_NUM_VER = Math.floor(SCREEN_HEIGHT / RECT_HEIGHT);

    const matrixSize = RECT_NUM_VER * RECT_NUM_HOR

    const [currentRect, setCurrentRect] = useState(null)
    const [dir, setDir] = useState(0)
    const [currentRectIndex, setCurrentRectIndex] = useState(0)


    const moveTop = (currentPos) => {
        if (currentPos - RECT_NUM_HOR >= 0) {
          return currentPos - RECT_NUM_HOR;
        } else {
          return currentPos;
        }
      };
      
      const moveBottom = (currentPos) => {
        if (currentPos + RECT_NUM_HOR < matrixSize) {
          return currentPos + RECT_NUM_HOR;
        } else {
          return currentPos;
        }
      };
      
      const moveLeft = (currentPos) => {
        if (currentPos % RECT_NUM_HOR !== 0) {
          return currentPos - 1;
        } else {
          return currentPos;
        }
      };
      
      const moveRight = (currentPos) => {
        if ((currentPos + 1) % RECT_NUM_HOR !== 0) {
          return currentPos + 1;
        } else {
          return currentPos;
        }
      };
    
      const backTrack=()=>{
        if (stack.length >0){
            setCurrentRect(stack.pop())
            setStack(stack.slice(0, stack.length - 1));
        }

        setCurrentRectIndex(rectangles.indexOf(currentRect))


        if ( rectanglesVisited[moveLeft(currentRectIndex)]  == false ||  rectanglesVisited[moveTop(currentRectIndex)] == false ||  rectanglesVisited[moveBottom(currentRectIndex)] ==false ||  rectanglesVisited[moveRight(currentRectIndex)] == false){

            setBacktracking(false)
        }


      }

      const removeWalls=(prev, next)=>{
        switch(dir){
            // left
            case 1:
                const newRectangles = rectangles.map((rectangle) => {
                    if (rectangle.equals(prev)) {
                        rectangle.left = false
                    //   return (<Rectangle left=false);
                    }else if(rectangle.equals(next)){
                        rectangle.right = false
                    }
                    
                    else {
                      return rectangle;
                    }
                  });

                setRectanglesDisplay(newRectangles)

            }
        

      }
      


useEffect(() => {
    const rectanglesDisplay = [];
    for (let i = 0; i < 16; i++) {
      rectanglesDisplay.push(<Rectangle />);
    }
  
    setRectanglesDisplay(rectanglesDisplay);
  }, []);

const interval = setInterval(() => {
    // Make Smith run

    const li = [ moveTop(currentRectIndex), moveLeft(currentRectIndex), moveRight(currentRectIndex), moveBottom(currentRectIndex)];
    while (true){

        if( li.length == 0){
            setBacktracking(true)
            backTrack()
            break
        }

    
        setCurrentRectIndex(li[Math.floor(Math.random() * li.length) ])



        
        
        if   ( rectanglesVisited[rectangles.indexOf(currentRect)] == true ){

            li.remove(currentRectIndex)
        }else{
            break;
        }
    }

    const next_rect = rectangles[currentRectIndex]
    setCurrentRect(rectangles[currentRectIndex])
    removeWalls(currentRect, next_rect, )
    
    if (!backtracking){
        setStack(s=>[...currentRect])
    }



  }, 500);
  
  setTimeout(() => {
    clearInterval(interval);
  }, 5000);
  

  return (
    <div className='maze-container d-flex flex-wrap'>
        {/* <Rectangle></Rectangle> */}
        {rectangles}
        
    </div>
  )
}

export default Maze