import { combineReducers } from "redux"
import pageSelectorReducer from '../../components/page_selector/reducer'

const rootReducer = combineReducers({
    pageSelector: pageSelectorReducer,
})

export default rootReducer