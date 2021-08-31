import React from 'react'
import { ItemTypes } from './constant'
import { useDrag, DragPreviewImage } from 'react-dnd'
import bojeke from './bojieke.png'
function Knight() {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  const knightImage = bojeke
  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
      <div
        ref={drag}
        style={{
          opacity: isDragging ? 0.5 : 1,
          fontSize: 25,
          fontWeight: 'bold',
          cursor: 'move',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        ♘
    </div>
    </>
  )
}

export default Knight