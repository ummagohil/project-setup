import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
//import App from './App';
import './styles/tailwind.css'
import * as serviceWorker from './serviceWorker'
import { renderRoutes } from 'react-router-config'
import routes from './config/routes'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
