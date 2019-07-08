import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import axios from 'axios';
import BlockList from './BlockList';

const StyledContainer = styled.div`
    border: 2px solid crimson;

    margin-top: 20px;
    
    min-height: calc(100vh - 200px);
`

const Loader = styled.div`

`

const mapPropsToState = (state) => ({
    currentPage: state.pageSelector.current,
})

const BlocksContainer = (props) => {
    const { currentPage } = props
    const [currentPageBlocks, setCurrentPageBlocks] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        if (currentPage !== '') {
            axios.get(`http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/${currentPage}.json`)
                .then((response) => {
                    setCurrentPageBlocks(response.data)
                })
                .catch((err) => {
                    setError(true)
                })
        }
    }, [currentPage])

    if(error) {
        // style this div in div
        return <div>Something went wrong</div>
    }

    return (
        <StyledContainer>
            <BlockList blocks={currentPageBlocks.filter(e => e.column === 'left')}/>
            <BlockList blocks={currentPageBlocks.filter(e => e.column === 'right')}/>
        </StyledContainer>
    )
}

export default connect(mapPropsToState)(BlocksContainer)