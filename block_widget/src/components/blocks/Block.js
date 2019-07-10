import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SBlock = styled.div`
`
const Block = (props) => {
    const {
        id,
        position,
        title,
        column,
        active,
        draggedEl,
        setDraggedEl,
        swapPositions,
        onDrop,
        setDragNode
    } = props

    const dragRef = React.createRef()
    const [dragged, setDragged] = useState(props.dragged)
    const onDragOverHandler = (ev) => {
        ev.preventDefault()

        if (draggedEl.position === position) { return }
        if (draggedEl.column !== column) { return }


            const hoverMid = dragRef.current.getBoundingClientRect()

        //  downwards
        if (draggedEl.position < position && ev.clientY < hoverMid.top + hoverMid.height / 2) { return }

        // upwards 
        if (draggedEl.position > position && ev.clientY > hoverMid.top + hoverMid.height / 2) { return }
        swapPositions(draggedEl.position, position)
        setDraggedEl({ position, el: draggedEl.el, column })
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
        setDraggedEl({ position, el: dragRef.current, column })
        setDragNode(position)
    }

    const onDragEndHandler = (ev) => {
        setDraggedEl({ position: null, el: null })
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
        onDragLeave={onDragLeaveHandler}>

            {/* tears river spring */}
            <div className={`small-box ${active ? "bg-green" : "bg-red"}`}>
                <div className="inner">
                    <p>
                        {title}
                    </p>
                </div>
                <div className="small-box-footer"></div>
            </div>
        </SBlock>
}

export default Block