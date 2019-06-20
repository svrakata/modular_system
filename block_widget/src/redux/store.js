import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducer from './reducers/root'

const loggerMiddleware = createLogger()
const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(thunkMiddleware)
    }
    return applyMiddleware(thunkMiddleware, loggerMiddleware)
}

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 })

const store = createStore(
    rootReducer,
    composeEnhancers(getMiddleware())
)

export default store