import React from 'react'
import PageSelector from './components/page_selector/PageSelector'
import BlocksContainer from './components/blocks/BlocksContainer';
import { connect } from 'react-redux';


const mapPropsToState = (state) => ({
    pagesLoaded: state.pageSelector.loaded,
    error: state.pageSelector.error,
    current: (state.pageSelector.pages.find(e => e.id === state.pageSelector.current) || { name: 'Моля изберете страница' }),
})

const BlockWidget = ({ pagesLoaded, error, current }) => {
    console.log(current)

    return (
        <React.Fragment>
            <h4 className="page-header">{pagesLoaded && !error && current.name.toUpperCase()}</h4>
            <PageSelector/>
            {pagesLoaded && !error && <BlocksContainer/>}
        </React.Fragment>
    )
}

export default connect(mapPropsToState)(BlockWidget)