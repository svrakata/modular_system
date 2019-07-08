import React, { useEffect } from 'react'
import { setPagesError, setPagesLoaded, setPages, setCurrentPage } from './actions';
import { connect } from 'react-redux';
import axios from 'axios'

const mapPropsToState = (state) => ({
    pages: state.pageSelector.pages,
    loaded: state.pageSelector.loaded,
    error: state.pageSelector.error,
})

const mapDispatchToProps = (dispatch) => {
    return {
        errorFetching: (error) => dispatch(setPagesError(error)),
        setLoaded: (loaded) => dispatch(setPagesLoaded(loaded)),
        setPages: (pages) => dispatch(setPages(pages)),
        setCurrentPage: (page) => dispatch(setCurrentPage(page)),
    }
}

const PageSelector = (props) => {
    const { pages, loaded, error } = props
    const { errorFetching, setLoaded, setPages, setCurrentPage } = props

    const onChangeHandler = (e) => {
        setCurrentPage(parseInt(e.target.value))
    }

    useEffect(() => {
        // make the api endpoint set at initiation
        axios.get('http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/pages.json')
            .then((response) => {
                setLoaded(true)
                setPages(response.data)
            })
            .catch((err) => {
                setLoaded(true)
                errorFetching(true)
            })
    },[errorFetching, setLoaded, setPages])

    if (!loaded) {
        // style it
        return <div>LOADER...</div>
    }

    if (error) {
        // style it
        return <div>Sorry somethig went wrong. Try again later</div>
    }
    
    return (
        <select onChange={onChangeHandler} defaultValue={0} className="form-control">
            <option value="0" disabled>Select page</option>
            {pages.map((e, i) => (<option value={e.id} key={i}>{e.name}</option>))}
        </select>
    )
}


export default connect(mapPropsToState, mapDispatchToProps)(PageSelector)