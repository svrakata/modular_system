import React, { useState } from 'react'
import styled from 'styled-components'

const StyledBlockSelector = styled.div`
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    flex: 0 0 25%;
    height: 32px;
    padding: 6px 12px;
    overflow: ${props => props.clicked ? 'initial' : 'hidden'};

`
const StyledItem = styled.div`
    font-size: 14px;
`


const BlockSelector = (props) => {
    const { blocksList = [] } = props
    const [clicked, setClicked] = useState(false)
    const onClickHandler = (ev) => {
        clicked ? setClicked(false) : setClicked(true)
    }


    return (
        <StyledBlockSelector clicked={clicked} onClick={onClickHandler}>
            {blocksList.map((e, i) => <StyledItem draggable={true} key={i} id={e.id}>{e.title}</StyledItem>)}
        </StyledBlockSelector>
    )
}

export default BlockSelector