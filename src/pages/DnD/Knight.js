import React from 'react'
import { ItemTypes } from './constant'
import { useDrag, DragPreviewImage } from 'react-dnd'

function Knight() {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  const knightImage = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAADaCAIAAADGwgvMAAAEOUlEQVR4Ae3TARUAIAyEUGcIK9i/oc8c/DWAGzPnLsdA1cCuguNm4BsQgD9IGxBAen7wAvADaQMCSM8PXgB+IG1AAOn5wQvAD6QNCCA9P3gB+IG0AQGk5wcvAD+QNiCA9PzgBeAH0gYEkJ4fvAD8QNqAANLzgxeAH0gbEEB6fvAC8ANpAwJIzw9eAH4gbUAA6fnBC8APpA0IID0/eAH4gbQBAaTnBy8AP5A2IID0/OAF4AfSBgSQnh+8APxA2oAA0vODF4AfSBsQQHp+8ALwA2kDAkjPD14AfiBtQADp+cELwA+kDQggPT94AfiBtAEBpOcHLwA/kDYggPT84AXgB9IGBJCeH7wA/EDagADS84MXgB9IGxBAen7wAvADaQMCSM8PXgB+IG1AAOn5wQvAD6QNCCA9P3gB+IG0AQGk5wcvAD+QNiCA9PzgBeAH0gYEkJ4fvAD8QNqAANLzgxeAH0gbEEB6fvAC8ANpAwJIzw9eAH4gbUAA6fnBC8APpA0IID0/eAH4gbQBAaTnBy8AP5A2IID0/OAF4AfSBgSQnh+8APxA2oAA0vODF4AfSBsQQHp+8ALwA2kDAkjPD14AfiBtQADp+cELwA+kDQggPT94AfiBtAEBpOcHLwA/kDYggPT84AXgB9IGBJCeH7wA/EDagADS84MXgB9IGxBAen7wAvADaQMCSM8PXgB+IG1AAOn5wQvAD6QNCCA9P3gB+IG0AQGk5wcvAD+QNiCA9PzgBeAH0gYEkJ4fvAD8QNqAANLzgxeAH0gbEEB6fvAC8ANpAwJIzw9eAH4gbUAA6fnBC8APpA0IID0/eAH4gbQBAaTnBy8AP5A2IID0/OAF4AfSBgSQnh+8APxA2oAA0vODF4AfSBsQQHp+8ALwA2kDAkjPD14AfiBtQADp+cELwA+kDQggPT94AfiBtAEBpOcHLwA/kDYggPT84AXgB9IGBJCeH7wA/EDagADS84MXgB9IGxBAen7wAvADaQMCSM8PXgB+IG1AAOn5wQvAD6QNCCA9P3gB+IG0AQGk5wcvAD+QNiCA9PzgBeAH0gYEkJ4fvAD8QNqAANLzgxeAH0gbEEB6fvAC8ANpAwJIzw9eAH4gbUAA6fnBC8APpA0IID0/eAH4gbQBAaTnBy8AP5A2IID0/OAF4AfSBgSQnh+8APxA2oAA0vODF4AfSBsQQHp+8ALwA2kDAkjPD14AfiBtQADp+cELwA+kDQggPT94AfiBtAEBpOcHLwA/kDYggPT84AXgB9IGBJCeH7wA/EDagADS84MXgB9IGxBAen7wAvADaQMCSM8PXgB+IG1AAOn5wQvAD6QNCCA9P3gB+IG0AQGk5wcvAD+QNiCA9PzgBeAH0gYEkJ4fvAD8QNqAANLzgxeAH0gbEEB6fvAC8ANpAwJIzw9eAH4gbUAA6fnBC8APpA0IID0/+Af2ugHy33WVwgAAAABJRU5ErkJggg==`
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