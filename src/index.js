import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import ContactUs from './views/contact-us'
import Error404 from './views/error404'
import OurWork from './views/our-work'
import OurTeam from './views/our-team'
import Gallery from './views/gallery'
import Campaigns from './views/campaigns'
import AboutUs from './views/about-us'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={OurWork} exact path="/our-work" />
        <Route component={OurTeam} exact path="/our-team" />
        <Route component={Gallery} exact path="/gallery" />
        <Route component={Campaigns} exact path="/campaigns" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={Error404} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
