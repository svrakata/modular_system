import { SET_PAGES, SET_CURRENT_PAGE } from "./types"

const initialState = {
    pages: [],
    current: '',
}

const pageSelectorReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PAGES:
            return Object.assign({}, state, { pages: action.pages })

        case SET_CURRENT_PAGE:
            return Object.assign({}, state, { current: action.current })

        default:
            return state
    }
}

export default pageSelectorReducer