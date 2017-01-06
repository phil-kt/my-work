import React, { Component } from 'react';
import Isvg from 'react-inlinesvg';
import './Home.css';

import Project from '../../components/project/Project';

import dribbble from '../../media/social/dribbble.svg';
import github from '../../media/social/github.svg';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="intro">
          <h1 className="name">Philippe Kimura-Thollander</h1>
          <h3 className="byline">A developer turned designer</h3>

          <span>
            About me:
          </span>
          <ul className="about">
            <li>Master’s HCI at Georgia Tech, undergrad CS at Stony Brook</li>
            <li>UI design, UX engineering, with a some UX research thrown in</li>
            <li>Passionate about emojis, games, and vaporwave</li>
          </ul>

          <div className="social">

            <a href="http://dribbble.com/linkcable" target="_blank" id="dribbble">
              <Isvg src={dribbble}>
                <img src={dribbble} alt="dribbbble link" width="20px" />
              </Isvg>
            </a>

            <a href="http://github.com/linkcable" target="_blank" id="github">
              <Isvg src={github}>
                <img src={github} alt="dribbbble link" width="20px" />
              </Isvg>
            </a>
          </div>
        </div>

        <Project title="The Hive"
                 description="A case study about how to optimize finding a seat in Georgia Tech’s library "/>
      </div>
    )
  }
  
}

export default Home;