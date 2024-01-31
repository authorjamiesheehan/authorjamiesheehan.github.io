/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import { Route, HashRouter } from '@solidjs/router'
import App from './AppLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BookPage from './pages/BookPage'
import ContactPage from './pages/ContactPage'

const root = document.getElementById('root')

render(() => (
    <HashRouter root={App}>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/books" component={BookPage} />
        <Route path="/contact" component={ContactPage} />
    </HashRouter>
), root)
