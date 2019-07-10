import { SET_PAGES, SET_CURRENT_PAGE, SET_PAGES_LOADED, SET_PAGES_ERROR, SET_BLOCKS_LIST } from "./types"

const initialState = {
    pages: [],
    current: '',
    loaded: false,
    error: false,
    blocksList: [],
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

        case SET_BLOCKS_LIST:
            return Object.assign({}, state, { blocksList: action.blocksList })

        default:
            return state
    }
}

export default pageSelectorReducer