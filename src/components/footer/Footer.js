import React, { Component } from 'react';
import './Footer.css';

import Social from '../social/Social'

class Footer extends Component {


  render () {
    return (
      <footer>
        <Social/>
        <p style={{margin: "5px 0"}}>This website designed and developed by me</p>
        <a className="website-link" href="http://github.com/linkcable/my-work">View it on Github</a>
      </footer>
    )
  }
}

export default Footer;