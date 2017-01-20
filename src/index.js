import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import ReactGA from 'react-ga';
import { useBasename } from 'history'


import App from './App';
import Hive from './pages/portfolio/hive/Hive';
import Argon from './pages/portfolio/argon/Argon';
import Medi from './pages/portfolio/medi/Medi';
import Graffiti from './pages/portfolio/graffiti/Graffiti';
import Rendezvous from './pages/portfolio/rendezvous/Rendezvous';
import Misc from './pages/misc/Misc'
import NotFound from './pages/not-found/NotFound';
import './index.css';

ReactGA.initialize('UA-36903668-3');


function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  window.scrollTo(0,0);
}

/*
 useBasename(() => borwserHistory)({ basename: process.env.PUBLIC_URL })
 */


ReactDOM.render((
  <Router history={browserHistory} onUpdate={logPageView}>
    <Route path="/" component={App}/>
    <Route path="/hive" component={Hive}/>
    <Route path="/argon" component={Argon}/>
    <Route path="/medi" component={Medi}/>
    <Route path="/graffiti" component={Graffiti}/>
    <Route path="/rendezvous" component={Rendezvous}/>
    <Route path="/miscellaneous" component={Misc}/>
    <Route path="/my-work" component={App}/>
    <Route path="/*" component={NotFound}/>

    {/* add the routes here
    <Route path="/roam" component={Roam}/>
    <Route path="/safeny" component={Safeny}/>
    <Route path="/stokr" component={Stokr}/>
    */

    }
  </Router>),
  document.getElementById('root')
);
