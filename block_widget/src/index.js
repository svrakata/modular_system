import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'
import GlobalStyle from './global_styles'
import BlockWidget from './BlockWidget'
import store from './redux/store'

// all the initiation will be here

// set some stuff to the store

// window.store = store

ReactDOM.render(

    <Provider store={store}>
        <GlobalStyle/>
            <BlockWidget />
    </Provider>,

    document.getElementById('bw__container'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/pages.json
// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/home.json
// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/bulgaria.json
// http://deelay.me/2000/http://test.dev.smakmedia.com/block_widget/world.json
