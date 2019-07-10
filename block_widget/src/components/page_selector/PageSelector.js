import React, { useEffect } from 'react'
import styled from 'styled-components';
import { setPagesError, setPagesLoaded, setPages, setCurrentPage, setBlocksList} from './actions';
import { connect } from 'react-redux';
import axios from 'axios'
import BlockSelector from '../block_selector/BlockSelector';

const SelectorsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledSelector = styled.select`
    flex: 0 0 73%;
`



const mapPropsToState = (state) => ({
    pages: state.pageSelector.pages,
    loaded: state.pageSelector.loaded,
    error: state.pageSelector.error,
    blocksList: state.pageSelector.blocksList,
})

const mapDispatchToProps = (dispatch) => {
    return {
        errorFetching: (error) => dispatch(setPagesError(error)),
        setLoaded: (loaded) => dispatch(setPagesLoaded(loaded)),
        setPages: (pages) => dispatch(setPages(pages)),
        setCurrentPage: (page) => dispatch(setCurrentPage(page)),
        setBlocksList: (blocksList) => dispatch(setBlocksList(blocksList))
    }
}

const PageSelector = (props) => {
    const { pages, loaded, error, blocksList } = props
    const { errorFetching, setLoaded, setPages, setCurrentPage, setBlocksList } = props

    const onChangeHandler = (e) => {
        setCurrentPage(parseInt(e.target.value))
    }

    useEffect(() => {
        // make the api endpoint set at initiation
        const getPages = axios.get('http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/pages.json')
        const getBlocks = axios.get('http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/blocks.json')

        Promise.all([getPages, getBlocks])
            .then((response) => {
                setLoaded(true)
                setPages(response[0].data)
                setBlocksList(response[1].data)

            })
            .catch((err) => {
                setLoaded(true)
                errorFetching(true)
                console.log(err)
            })
    },[errorFetching, setLoaded, setPages, setBlocksList])

    if (!loaded) {
        // style it
        return <div>LOADER...</div>
    }

    if (error) {
        // style it
        return <div>Sorry somethig went wrong. Try again later</div>
    }
    
    return (
        <SelectorsContainer>
            <StyledSelector onChange={onChangeHandler} defaultValue={0} className="form-control">
                <option value="0" disabled>Select page</option>
                {pages.map((e, i) => (<option value={e.id} key={i}>{e.name}</option>))}
            </StyledSelector>
            <BlockSelector blocksList={blocksList}/>
        </SelectorsContainer>
    )
}


export default connect(mapPropsToState, mapDispatchToProps)(PageSelector)