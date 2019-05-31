import { PagesState, SetPagesTypes, SET_PAGES, SET_CURRENT } from "./types"

const initialState: PagesState = {
    pages: [],
    current: '',
}

const pageSelectorReducer = (state = initialState, action: SetPagesTypes) => {
    switch(action.type) {
        case SET_PAGES:
            return Object.assign({}, state, { pages: action.pages })

        case SET_CURRENT:
            return Object.assign({}, state, { current: action.current })

        default:
            return state
    }
}

export default pageSelectorReducer