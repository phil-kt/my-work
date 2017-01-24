import React, { Component } from 'react';
import Slider from 'react-slick';
import './SousChef.css';

import ProjectPage from '../../../components/project-page/ProjectPage';
import example from '../../../media/sous-chef/example.jpg';

class SousChef extends Component {

  render() {

    let sliderSettings = {
      dots: true,
      draggable: true,
      accessibility: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };


    return (
      <ProjectPage
        title="Sous Chef"
        github="https://github.com/abapat/alexa-sous-cheg"
        content={
          <span>
            <h4>What is it?</h4>
            <p>
              An Alexa skill that allows you to ask your Amazon Echo for recipies, have it read out ingredients to you, and get step by step instructions, all with your voice!
            </p>
            <div className="aspect-keeper">
             <iframe src="https://www.youtube.com/embed/Wj2yhEfdTZQ" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
            </div>
            <h4>Origins</h4>
            <p>
              For PennApps XV, my friend and I knew we wanted to do a hack regarding Alexa or chatbots, since they are the newest and most rapidly developing areas of software right now. After some deliberation, we decided to go with the Amazon Echo, as it is an increasingly more ubiquitous device and voice was an input we had never worked with before.
            </p>
            <h4>Problem Space</h4>
            <p>
              Ever tried to cook a new recipe and find yourself coming back to the computer after each instruction to figure out what to do next? Find yourself washing your hands of flour or meat every time you need to check the next step? I have, so me and my team decided to harness the power of Alexa to make cooking a new (or old!) recipe a hands-free experience.
            </p>
            <img src={example} alt="flour on an ipad"/>
            <p className="caption">What we were trying to solve</p>
            <p>
              When demoing our skill at the end of the hackathon, many others voiced the same frustrations I had and explained their complicated setups with an iPad for cooking.
            </p>
            <h4>Design</h4>
            <p>
              This was my first time designing a VoiceUser Interface (VUI), so it was a pretty fun challenge to design and implement within 36 hours. I first read the docs on <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-voice-design-handbook" target="_blank">Alexa Skills Design Handbook</a> and took away some important factors:
            </p>
            <ul>
              <li>Present information in consumable pieces</li>
              <li>Make sure users now where they are in the flow</li>
              <li>Get one piece of info from the user at a time</li>
            </ul>
            <p>
              With these and other principles in mind I started drawing up some potential user flows for a user asking Alexa for recipes. I made sure to include options to undo and go back in the flow in case a user selected a recipe they didn't like, or didn't have the ingredients needed for the recipe.
            </p>

          </span>
        }
      />
    );
  }
}

export default SousChef;
