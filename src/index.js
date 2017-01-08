import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';

import App from './App';
import Hive from './pages/portfolio/hive/Hive';
import Argon from './pages/portfolio/argon/Argon';
import Medi from './pages/portfolio/medi/Medi';
import Graffiti from './pages/portfolio/graffiti/Graffiti';
import Dots from './pages/portfolio/dots/Dots';
import NotFound from './pages/not-found/NotFound';
import './index.css';


function logPageView() {
  //ReactGA.set({ page: window.location.pathname });
  //ReactGA.pageview(window.location.pathname);
  window.scrollTo(0,0);
}


ReactDOM.render((
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path="/" component={App}/>
    <Route path="/hive" component={Hive}/>
    <Route path="/argon" component={Argon}/>
    <Route path="/medi" component={Medi}/>
    <Route path="/graffiti" component={Graffiti}/>
    <Route path="/dots" component={Dots}/>

    <Route path='/404' component={NotFound} />
    <Redirect from='*' to='/404' />

    {/* add the routes here
    <Route path="/roam" component={Roam}/>
    <Route path="/safeny" component={Safeny}/>
    <Route path="/rendezvous" component={Rendezvous}/>
    <Route path="/stokr" component={Stokr}/>
    */

    }
  </Router>),
  document.getElementById('root')
);
