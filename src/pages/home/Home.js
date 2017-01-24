import React, { Component } from 'react';
import Isvg from 'react-inlinesvg';
import './Home.css';

import Project from '../../components/project/Project';

import computers from '../../media/home/im_so_computers.png';
import dribbble from '../../media/social/dribbble.svg';
import github from '../../media/social/github.svg';
import twitter from '../../media/social/twitter.svg';
import untappd from '../../media/social/untappd.svg';
import linkedin from '../../media/social/linkedin.svg';
import instagram from '../../media/social/instagram.svg';
import mal from '../../media/social/MAL.svg';
import tree from '../../media/home/tree.png';
import graffiti from '../../media/home/graffiti-iphone.png';
import medi from '../../media/home/medi-iphone.png';
import argon from '../../media/home/argon-iphone.png';
import sous_chef from '../../media/home/sous-chef.png';
import rendezvous from '../../media/home/rendezvous-iphone.png';
import misc from '../../media/home/logo.png';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="intro">
          <a href="http://www.philkt.me/vapor" className="vapor">
            <img src={computers} alt="im so computers" width="30px"/>
          </a>
          <h1 className="name">Philippe Kimura-Thollander</h1>
          <h3 className="byline">A developer turned designer</h3>

          <div className="about">
          <span>
            About me:
          </span>
          <ul>
            <li>Master’s HCI at Georgia Tech, undergrad CS at Stony Brook</li>
            <li>UI design, UX engineering, with some UX research thrown in</li>
            <li>Passionate about emojis, mecha, and vaporwave</li>
            <li>Previously at HBO and Pypestream, seeking a summer 2017 internship</li>
          </ul>
          <p>Check out my work below, or if you're short for time&nbsp;
            <a href={process.env.PUBLIC_URL + '/philippe_kimura-thollander_resume.pdf'} target="_blank" id="resume">
              see my resume.</a>
          </p>
          </div>
        </div>

        <Project title="The Hive"
                 description="A case study about how to optimize finding a seat in Georgia Tech’s library"
                  link="/hive"
                  image={tree}
                  tags="UX Research, Prototyping"
                  />

        <Project title="Medi"
                 description="An application ecosystem to ensure that elderly patients take their prescription medications"
                 link="/medi"
                 image={medi}
                 tags="UI Design, Prototyping"
                 iPhone={true}/>

        <Project title="Understanding AR"
                 description="An augmented reality book about the history of augmented reality"
                 link="/argon"
                 image={argon}
                 tags="Research, Development"
                 iPhone={true}/>

        <Project title="Sous Chef"
                 description="An Amazon Echo skill that allows Alexa to be your companion cook in the kitchen"
                 link="/sous-chef"
                 image={sous_chef}
                 tags="VUI Design, Development"
                 />

        <Project title="Graffiti"
                 description="An augmented reality iOS app to draw virtual graffiti on real world objects"
                 link="/graffiti"
                 image={graffiti}
                 tags="UI Design, Development"
                 iPhone={true}
                 />

        <Project title="Rendezvous"
                 description="An iOS app to help you find your friends in a crowd or to promote spontaneous encounters"
                 link="/rendezvous"
                 image={rendezvous}
                 tags="UI Design, Development"
                 iPhone={true}/>

        <Project title="Miscellaneous"
                 description="Some other stuff I've made"
                 link="/miscellaneous"
                 image={misc}
                 tags=""/>



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
          <a href="http://github.com/linkcable/my-work">View it on Github</a>
        </footer>
      </div>
    )
  }
  
}

export default Home;