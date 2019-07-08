import { SET_PAGES, SET_CURRENT_PAGE, SET_PAGES_LOADED, SET_PAGES_ERROR } from "./types"

const initialState = {
    pages: [],
    current: '',
    loaded: false,
    error: false,
}

const pageSelectorReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PAGES:
            return Object.assign({}, state, { pages: action.pages })

        case SET_CURRENT_PAGE:
            return Object.assign({}, state, { current: action.current })

        case SET_PAGES_LOADED:
            return Object.assign({}, state, { loaded: action.loaded })

        case SET_PAGES_ERROR:
            return Object.assign({}, state, { error: action.error })

        default:
            return state
    }
}

export default pageSelectorReducer