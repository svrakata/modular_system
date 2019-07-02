import React, { useState } from 'react'
import { boundSetPages } from './components/page_selector/actions'
import PageSelector from './components/page_selector/PageSelector'
import BlockList from './components/blocks/BlockList';

const BlockWidget = () => {

    // const handle


    return (
        <React.Fragment>
            <PageSelector/>
            <BlockList/>
        </React.Fragment>
    )
}

export default BlockWidget