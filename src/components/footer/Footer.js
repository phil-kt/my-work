import React, { Component } from 'react';
import Isvg from 'react-inlinesvg';
import './Footer.css';

import dribbble from '../../media/social/dribbble.svg';
import github from '../../media/social/github.svg';
import twitter from '../../media/social/twitter.svg';
import untappd from '../../media/social/untappd.svg';
import linkedin from '../../media/social/linkedin.svg';
import instagram from '../../media/social/instagram.svg';
import mal from '../../media/social/MAL.svg';

class Footer extends Component {


  render () {
    return (
      <footer>
        <div className="social">

          <a href="http://dribbble.com/linkcable" target="_blank" id="dribbble">
            <Isvg src={dribbble}>
              <img src={dribbble} alt="dribbbble link" width="20px" />
            </Isvg>
          </a>

          <a href="http://github.com/linkcable" target="_blank" id="github">
            <Isvg src={github}>
              <img src={github} alt="github link" width="20px" />
            </Isvg>
          </a>

          <a href="http://twitter.com/link_cable" target="_blank" id="twitter">
            <Isvg src={twitter}>
              <img src={twitter} alt="twitter link" width="20px" />
            </Isvg>
          </a>

          <a href="http://linkedin.com/in/linkcable" target="_blank" id="linkedin">
            <Isvg src={linkedin}>
              <img src={linkedin} alt="linkedin link" width="20px" />
            </Isvg>
          </a>

          <a href="https://instagram.com/link_cable" target="_blank" id="instagram">
            <Isvg src={instagram}>
              <img src={instagram} alt="instagram link" width="20px" />
            </Isvg>
          </a>

          <a href="https://untappd.com/user/LinkCable" target="_blank" id="untappd">
            <Isvg src={untappd}>
              <img src={untappd} alt="untappd link" width="20px" />
            </Isvg>
          </a>

          <a href="https://myanimelist.net/profile/LinkCable" target="_blank" id="mal">
            <Isvg src={mal}>
              <img src={mal} alt="my anime list link" width="20px" />
            </Isvg>
          </a>
        </div>
        <span style={{margin: "5px 0"}}>This website designed and developed by me</span>
        <a className="website-link" href="http://github.com/linkcable/my-work">View it on Github</a>
      </footer>
    )
  }
}

export default Footer;