import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Block from './Block';

const SBlockList = styled.div`
    flex: 0 0 49%;
`

const BlockList = (props) => {
    const { blocks } = props
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

    useEffect(() => {
        let currBlocks = blocks.sort((a, b) => a.position - b.position)
        currBlocks.forEach((e, i) => e.position = i)
        resetOrder(currBlocks)
    }, [blocks])

    return (
        <SBlockList>
            {
                orderedBoxes.map((e, i) =>
                    <Block
                        key={i}
                        id={e.id}
                        position={e.position}
                        title={e.title}
                        column={e.column}
                        active={e.active}
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