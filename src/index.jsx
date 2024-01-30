/* @refresh reload */
import { render } from 'solid-js/web'

// import './index.css'
import { Route, Router } from '@solidjs/router'
import App from './AppLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

const root = document.getElementById('root')

render(() => (
    <Router root={App}>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
    </Router>
), root)
