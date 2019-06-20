import React, { useState } from 'react'
import { boundSetPages, boundSetCurrentPage } from './actions';
import { connect } from 'react-redux';

boundSetPages([{id: 1, label: 'home'}, {id: 7, label: 'article'}])

const mapPropsToState = (state) => ({
    pages: state.pageSelector.pages,
})

const handleChange = (e) => {
    boundSetCurrentPage(e.target.value)
}

const PageSelector = (props) => {
    const { pages } = props

    return (
        <select onChange={handleChange} defaultValue={0} className="form-control">
            <option value="0" disabled>Select page</option>
            {pages.map((e, i) => (<option value={e.id} key={i}>{e.label}</option>))}
        </select>
    )
}

export default connect(mapPropsToState)(PageSelector)