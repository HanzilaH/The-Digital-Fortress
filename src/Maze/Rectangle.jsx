import React from 'react'
import './index.scss'

const Rectangle = ({left=true, right=true, up=true, down=true}) => {
  return (
    <>
    <div style={
        {
            borderLeft: `${left?'8x': '0px'}`,
            borderRight: `${right?'8x': '0px'}`,
            borderTop: `${up?'8x': '0px'}`,
            borderBottom: `${down?'8x': '0px'}`,

        }
    } className='rectangle-container'>
        

    </div>
    </>
  )
}

export default Rectangle