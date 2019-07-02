import React, { useState } from 'react'
import styled from 'styled-components'

const SBlock = styled.div`
    border: 2px solid crimson;
    background-color: salmon;
    min-height: 50px;
    margin: 20px 0;
    opacity: ${props => props.dragged ? 0 : 1 };
`
const Block = (props) => {
    const [dragged, setDragged] = useState(false)
    const dragRef = React.createRef()
    const { id, order, label, draggedEl, setDraggedEl, swapPositions } = props

    const onDragOverHandler = (ev) => {
        ev.preventDefault()
        if (draggedEl.el !== ev.target) {
            swapPositions(order - 1, draggedEl.order - 1)
        }

        // console.log(draggedEl)
    }
    
    const onDropHandler = (ev) => {
        ev.preventDefault()
        // console.log(ev.target)
    }

    const onDragHandler = (ev) => {
        setDragged(true)
    } 

    const onDragStartHandler = (ev) => {
        const crt = dragRef.current
        const elDimensions = dragRef.current.getBoundingClientRect()
        ev.dataTransfer.effectAllowed = 'move'
        ev.dataTransfer.setDragImage(crt, -(elDimensions.x - ev.clientX), -(elDimensions.y - ev.clientY))
        setDraggedEl({ order, el: dragRef.current })
    }

    const onDragEndHandler = (ev) => {
        setDragged(false)
    }

return <SBlock
    ref={dragRef}
    dragged={dragged} 
    draggable 
    onDrop={onDropHandler} 
    onDragOver={onDragOverHandler} 
    onDrag={onDragHandler} 
    onDragStart={onDragStartHandler} 
    onDragEnd={onDragEndHandler}>{label}</SBlock>
}

export default Block