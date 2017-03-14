import React, { Component } from 'react';
import {Link} from 'react-router';
import './Home.css';

import Project from '../../components/project/Project';
import Footer from '../../components/footer/Footer';

import computers from '../../media/home/im_so_computers.png';
import untappd_phone from '../../media/home/untappd-phone.png';
import tree from '../../media/home/tree.png';
import graffiti from '../../media/home/graffiti-iphone.png';
import medi from '../../media/home/medi-iphone.png';
import argon from '../../media/home/argon-iphone.png';
import sous_chef from '../../media/home/sous-chef.png';
import rendezvous from '../../media/home/rendezvous-iphone.png';
import misc from '../../media/home/logo.png';

class Home extends Component {

  state = {
    headlines: [
      "UX Designer and Developer 💻",
      "Advocate for the User 🗣️",
      "Total Otaku 🔰",
      "Craft Beer Aficionado 🍺",
      "Emoji Lover 😍"
    ],
    index : 0
  }


  cycle = (e) => {
    if (this.state.index > this.state.headlines.length - 2){
      this.state.index = 0
    }
    else{
      this.state.index += 1
    }

    let header = e.target
    header.style.opacity = 0;

    let self = this

    // Wait for the transition
    setTimeout(function(){
      header.innerHTML = self.state.headlines[self.state.index];
      header.style.opacity = 1;
    },300);

    }

  render() {
    return (
      <div className="home">
        <div className="intro">
          <a href="http://www.philkt.me/vapor" className="vapor">
            <img src={computers} alt="im so computers" width="30px"/>
          </a>
          <h1 className="name">Philippe Kimura-Thollander</h1>
          <h3 className="byline" onClick={this.cycle}>{this.state.headlines[this.state.index]}</h3>

          <div className="about">
          <span>
            About me:
          </span>
          <ul>
            <li><span>Master’s HCI at Georgia Tech, undergrad CS at Stony Brook</span></li>
            <li><span>UI design, UX engineering, with some UX research thrown in</span></li>
            <li><span>Passionate about emojis, mecha, and vaporwave</span></li>
            <li><span>Previously at HBO and Pypestream, seeking a summer 2017 internship</span></li>
            <li><span><Link to="/about">Wanna learn more?</Link></span></li>
          </ul>
          <p>Check out my work below, or if you're short for time&nbsp;
            <a href={process.env.PUBLIC_URL + '/philippe_kimura-thollander_resume.pdf'} target="_blank" id="resume">
              see my resume.</a>
          </p>
          </div>
        </div>

        <Project title="Untappd Redesign"
                 description="A case study and Material redesign of the popular beer app Untappd"
                 link="/untappd"
                 image={untappd_phone}
                 iPhone={true}
                 tags="UX Research, UI Design"
        />

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
                 tags="UX Design, Prototyping"
                 iPhone={true}/>

        <Project title="Understanding AR"
                 description="An augmented reality book about the history of augmented reality"
                 link="/understanding-ar"
                 image={argon}
                 tags="UX Design, Development"
                 iPhone={true}/>

        <Project title="Sous Chef"
                 description="An Amazon Echo skill that allows Alexa to be your companion cook"
                 link="/sous-chef"
                 image={sous_chef}
                 tags="VUI Design, Development, Hackathon"
        />


        <Project title="Graffiti"
                 description="An augmented reality iOS app to draw virtual graffiti on real world objects"
                 link="/graffiti"
                 image={graffiti}
                 tags="UI Design, Development, Hackathon"
                 iPhone={true}
                 />

        <Project title="Rendezvous"
                 description="An iOS app to help you find your friends in a crowd or to promote spontaneous encounters"
                 link="/rendezvous"
                 image={rendezvous}
                 tags="UI Design, Development, Hackathon"
                 iPhone={true}/>

        <Project title="Miscellaneous"
                 description="Some other stuff I've made"
                 link="/miscellaneous"
                 image={misc}
                 tags="Otaku, Hackathon"/>

        <Footer />

      </div>
    )
  }

}

export default Home;
