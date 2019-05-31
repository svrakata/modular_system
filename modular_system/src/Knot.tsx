import React from 'react'
import { boundSetPages } from './components/page_selector/actions';

const Knot = () => {

    boundSetPages(['home'])

    return (
        <React.Fragment>
            <div>SETUP ONGOING</div>

        </React.Fragment>
    )
}

export default Knot