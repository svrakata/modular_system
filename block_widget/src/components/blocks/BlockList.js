import React, { useState } from 'react'
import styled from 'styled-components'
import Block from './Block';

const SBlockList = styled.div`
`

const BlockList = ({ blocks = [] } = {}) => {
    const [draggedEl, setDraggedEl] = useState({ order: null, el: null })
    const [orderedBoxes, resetOrder] = useState(blocks.sort((a, b) => a.position - b.position))
    const [loading, setLoading] = useState(true)
    
    const setDragNode = (position, remove) => {
        const newOrder = [...orderedBoxes]
        newOrder[position].dragged = remove ? false : true
        resetOrder(newOrder)
    }   

    const swapPositions = (dragged, hovered) => {
        const newOrder = [...orderedBoxes]
        const temp = newOrder[dragged]
        temp.position = hovered
        newOrder[dragged] = newOrder[hovered]
        newOrder[dragged].position = dragged
        newOrder[hovered] = temp
        resetOrder(newOrder)
    }

    const onDrop = () => {
        // send the data for ordered boxes
        console.log(orderedBoxes)
    }

    return (
        <SBlockList>
            {
                orderedBoxes.map((e, i) =>
                    <Block
                        key={i}
                        id={e.id}
                        position={e.position}
                        label={e.label}
                        dragged={e.dragged || false}
                        draggedEl={draggedEl}
                        setDraggedEl={setDraggedEl}
                        swapPositions={swapPositions}
                        setDragNode={setDragNode}
                        onDrop={onDrop} />)}
        </SBlockList>
    )
}

export default BlockList