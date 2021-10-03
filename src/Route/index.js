import React from 'react'
import {BrowserRouter as Router , Route , Switch , } from 'react-router-dom'
import {Main , Detail , Comments , Photos} from '../Components'

function Index() {
    return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/user/:id" exact component={Detail} />
                    <Route path="/user/posts/:id/comments" exact component={Comments} />
                    <Route path="/user/albums/:id/photos" exact component={Photos} />
                </Switch>
            </Router>
    )
}

export default Index
