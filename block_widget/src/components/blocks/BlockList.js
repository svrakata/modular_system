import React, { useState } from 'react'
import styled from 'styled-components'
import Block from './Block';


const SBlockList = styled.div`
`
const blocks = [
    {
        id: 34,
        order: 3,
        label: 'rum',
    },
    {
        id: 55,
        order: 1,
        label: 'vodka',
    },
    {
        id: 78,
        order: 2,
        label: 'wine',
    },
    {
        id: 88,
        order: 4,
        label: 'beer',
    },
    {
        id: 32,
        order: 5,
        label: 'coke',
    },
    {
        id: 21,
        order: 6,
        label: 'lsd',
    },
]

const BlockList = (props) => {
    const [draggedEl, setDraggedEl] = useState({ order: null, el: null })
    const [orderedBoxes, resetOrder] = useState(blocks.sort((a, b) => a.order - b.order))
    const swapPositions = (pos1, pos2) => {
        const newOrder = [...orderedBoxes];
        console.log(newOrder, pos1, pos2)
        const temp = newOrder[pos1] 
        console.log(temp)
        newOrder[pos1] = newOrder[pos2]
        console.log(newOrder)
        newOrder[pos2] = temp
        resetOrder(newOrder)
    }

    return (
        <SBlockList>
            {
                
                orderedBoxes.map((e, i) =>
                    <Block
                        key={i}
                        id={e.id}
                        order={e.order}
                        label={e.label}
                        draggedEl={draggedEl}
                        setDraggedEl={setDraggedEl}
                        swapPositions={swapPositions} />)}

        </SBlockList>
    )
}

export default BlockList