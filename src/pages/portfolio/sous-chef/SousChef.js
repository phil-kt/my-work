import React, { Component } from 'react';
import './SousChef.css';

import ProjectPage from '../../../components/project-page/ProjectPage';
import example from '../../../media/sous-chef/example.jpg';
import vui_draft from '../../../media/sous-chef/vui_draft.jpg';
import vui_flow from '../../../media/sous-chef/vui_flow.jpg';
import iphone from '../../../media/sous-chef/iphone.png';

class SousChef extends Component {

  render() {

    return (
      <ProjectPage
        title="Sous Chef"
        github="https://github.com/abapat/alexa-sous-chef"
        content={
          <span>
            <h4>What is it?</h4>
            <p>
              An Alexa skill that allows you to ask your Amazon Echo for recipes, have it read out ingredients to you, and get step by step instructions, all with your voice!
            </p>
            <div className="aspect-keeper">
             <iframe src="https://www.youtube.com/embed/Wj2yhEfdTZQ" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
            </div>
            <h4 style={{marginTop: "40px"}}>Origins</h4>
            <p>
              For PennApps XV, my friend and I knew we wanted to do a hack regarding Alexa or chatbots, since they are the newest and most rapidly developing areas of software right now. After some deliberation, we decided to go with the Amazon Echo, as it is an increasingly more ubiquitous device and voice was an input we had never worked with before.
            </p>
            <h4>Problem Space</h4>
            <p>
              Ever tried to cook a new recipe and find yourself coming back to the computer after each instruction to figure out what to do next? Find yourself washing your hands of flour or meat every time you need to check the next step? I have, so me and my team decided to harness the power of Alexa to make cooking a new (or old!) recipe a hands-free experience.
            </p>
            <img src={example} alt="flour on an ipad"/>
            <p className="caption">Don't you hate it when this happens?</p>

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
            <img src={vui_draft} alt="a draft of a vocal flow" />
            <p className="caption">An early sketch of the VUI flow</p>

            <p>
              After experimenting many different ways to use the power of Alexa, I realied that it was talking a lot more than was necessary. You are unable to interrupt Alexa, which means you have to wait for it to read a list of recipes or ingredients. In response to that, I decided to limit Alexa to list five ingredients at a time because if it told you all at once it was overwhelming. I also incorporated the Alexa app so you would get a list of ingredients on your phone so you could skip Alexa listing out ingredients entirely.
            </p>
            <p>Other tweaks to this flow I made include:</p>
            <ul>
              <li>Removing the timer and conversion functions due to technical limitations</li>
              <li>Options to search for a new recipe if you don't like what Alexa gives you</li>
              <li>Increasing the amount of recipes Alexa reads out so the user has a bit more choice</li>
            </ul>
            <img src={vui_flow} alt="a more finalized flow"/>
            <p className="caption">A look at a more finalized VUI flow</p>
            <h4>Implementation</h4>
            <p>
              Sous Chef was developed using <a href="https://github.com/johnwheeler/flask-ask" target="_blank">Flask-Ask</a>, a Python framework for making Alexa apps using Flask, and <a href="https://github.com/dgtony/afg" target="_blank">Alexa Flask Guide</a> to maintain the user flow as Alexa does not have a native state handler. The recipes database was created by scraping the Food Network website, and to display images we used the Bing Image Search API to find pictures associated with the food.
            </p>
            <img src={iphone} alt="a look at sous chef on your phone"/>
            <p className="caption">The cards that show up on your device from Sous Chef</p>
            <h4>Demonstration</h4>
            <div className="aspect-keeper" style={{marginBottom: '60px'}}>
              <iframe src="https://www.youtube.com/embed/wuWsyD-bAOk" allowFullScreen="allowFullScreen" frameBorder="0"></iframe>
            </div>
          </span>
        }
      />
    );
  }
}

export default SousChef;
