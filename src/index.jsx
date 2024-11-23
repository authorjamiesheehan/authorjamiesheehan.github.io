/* @refresh reload */
import { render } from 'solid-js/web'

import { HashRouter, Route } from '@solidjs/router'
import App from './AppLayout'
import './index.css'
import AboutPage from './pages/AboutPage'
import BookPage from './pages/BookPage'
import ContactPage from './pages/ContactPage'
import FablesPage from './pages/FablesPage'
import HomePage from './pages/HomePage'

const root = document.getElementById('root')

render(() => (
    <HashRouter root={App}>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/books" component={BookPage} />
        <Route path="/fables" component={FablesPage} />
        <Route path="/contact" component={ContactPage} />
    </HashRouter>
), root)
