import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SBlock = styled.div`
    border: 2px solid crimson;
    background-color: salmon;
    min-height: 50px;
    margin: 20px 0;
`
const Block = (props) => {
    const { id, position, label, draggedEl, setDraggedEl, swapPositions, onDrop, setDragNode } = props
    const dragRef = React.createRef()
    const [dragged, setDragged] = useState(props.dragged)
    const onDragOverHandler = (ev) => {
        ev.preventDefault()

        if (draggedEl.position === position) { return }

        const hoverMid = dragRef.current.getBoundingClientRect()

        //  downwards
        if (draggedEl.position < position && ev.clientY < hoverMid.top + hoverMid.height / 2) { return } 

        // upwards 
        if (draggedEl.position > position && ev.clientY > hoverMid.top + hoverMid.height / 2) { return }
        swapPositions(draggedEl.position, position)
        setDraggedEl({position, el: draggedEl.el})
    }
    
    const onDropHandler = (ev) => {
        ev.stopPropagation()
        onDrop()

        // console.log(ev.target)
    }

    const onDragHandler = (ev) => {
    } 

    const onDragStartHandler = (ev) => {
        const crt = dragRef.current
        const elDimensions = dragRef.current.getBoundingClientRect()
        ev.dataTransfer.effectAllowed = 'move'
        ev.dataTransfer.setDragImage(crt, -(elDimensions.x - ev.clientX), -(elDimensions.y - ev.clientY))
        setDraggedEl({ position, el: dragRef.current })
        setDragNode(position)
    }

    const onDragEndHandler = (ev) => {
        setDraggedEl({position: null, el: null})
        setDragNode(draggedEl.position, true)
    }

    const onDragLeaveHandler = (ev) => {
    }
    
    useEffect(() => {
        setDragged(props.dragged)
    }, [props.dragged])

return <SBlock
    ref={dragRef}
    draggable
    style={dragged ? { opacity: 0 } : { opacity: 1 }}
    onDrop={onDropHandler} 
    onDragOver={onDragOverHandler} 
    onDrag={onDragHandler} 
    onDragStart={onDragStartHandler} 
    onDragEnd={onDragEndHandler}
    onDragLeave={onDragLeaveHandler}>{label}</SBlock>
}

export default Block