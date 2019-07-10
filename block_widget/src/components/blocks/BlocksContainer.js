import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import axios from 'axios';
import BlockList from './BlockList';

const StyledContainer = styled.div`
    margin-top: 20px;
    min-height: calc(100vh - 200px);

    display: flex;
    justify-content: space-between;
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
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (currentPage !== '') {
            setLoading(true)
            axios.get(`http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/${currentPage}.json`)
                .then((response) => {
                    setCurrentPageBlocks(response.data)
                    setLoading(false)
                })
                .catch((err) => {
                    setError(true)
                    setLoading(false)
                })
        }
    }, [currentPage])

    if(error) {
        // style this div in div
        return <div>Something went wrong</div>
    }

    if (loading) {
        // style this with proper loader
        
        return (
            <div>Loading baby...</div>
        )
    }
    
    return (
        <StyledContainer>
            <BlockList blocks={currentPageBlocks.filter(e => e.column === 'left')}/>
            <BlockList blocks={currentPageBlocks.filter(e => e.column === 'right')}/>
        </StyledContainer>
    )
}

export default connect(mapPropsToState)(BlocksContainer)