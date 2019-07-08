import React from 'react'
import PageSelector from './components/page_selector/PageSelector'
import BlocksContainer from './components/blocks/BlocksContainer';
import { connect } from 'react-redux';


const mapPropsToState = (state) => ({
    pagesLoaded: state.pageSelector.loaded,
    error: state.pageSelector.error,
})

const BlockWidget = ({ pagesLoaded, error }) => {
    return (
        <React.Fragment>
            <PageSelector/>
            {pagesLoaded && !error && <BlocksContainer/>}
        </React.Fragment>
    )
}

export default connect(mapPropsToState)(BlockWidget)