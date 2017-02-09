import React, { Component } from 'react';
import Slider from 'react-slick';
import './Argon.css';

import ProjectPage from '../../../components/project-page/ProjectPage';

import live from '../../../media/argon/live.jpg';
import process from '../../../media/argon/process.svg';
import eyetap from '../../../media/argon/eyetap.png';
import vuforia from '../../../media/argon/vuforia.jpg';
import google_glass from '../../../media/argon/google_glass.jpg';
import quake_live from '../../../media/argon/quake_live.jpg';
import pokemon from '../../../media/argon/pokemon.png';
import flow from '../../../media/argon/flow.jpg';
import twine from '../../../media/argon/twine.png';
import argon_all from '../../../media/argon/argon_all.png';

class Argon extends Component {

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
        title="Understanding AR"
        github="https://github.com/LinkCable/understanding-ar-twine"
        content={
          <span>
            <h4>What is it?</h4>
            <p>
              An augmented reality storybook telling the history of augmented reality through a digital pop up storybook. (meta huh?)
            </p>
            <img src={live} alt="ar sneak peak" />
            <h4>Origins</h4>
            <p className="starting-paragraph">
              Over the summer, I, like many others, became obsessed with the augmented reality game known as Pokemon Go, and found myself every day after my internship trekking through Central Park to hunt some Pokemon. During this playtime, and after the craze died down, I was interested in designing and developing an augmented reality experience of my own for people to try out.
            </p>
            <p>
              Upon arriving to Georgia Tech, I discovered that there was a lab dedicated to augmented reality in the <a href="http://ael.gatech.edu/lab/" target="_blank">Augmented Environments lab</a>. One of my fellow classmates was going to work on a project for the lab and she invited me to come to her next meeting with the professor. I accompanied her, met <a href="http://www.jdbolter.net/" target="_blank">Jay Bolter</a>, and began work on Understanding AR.
            </p>
            <h4>What I Did</h4>
            <p>
              Determined the list of projects to represent, designed the concept of the book and how it would work, created 3D models in Blender, and developed code in Twine and Javascript for storybook features.
            </p>

            <h4>Process</h4>
            <img className="process" src={process} alt="Concept, history milestones, user flows, 3d modeling, javascript prototype, twine integration"/>

            <h4>Concept</h4>
            <p className="starting-paragraph">
              Understanding AR is a project inspired by Scott McCloud's book <a href="https://en.wikipedia.org/wiki/Understanding_Comics" target="blank">Understanding Comics</a>, which is a meta work that describes how to write and draw comics through the use of comics. Professor Bolter really liked this work, and wondered if we could do the same with augmented reality: create an augmented reality application about augmented reality. My partner, Victoria, and I took up this challenge and sought to create an AR book about the history and development of AR. We identified what we considered key moments in augmented history worth representing:
            </p>
            <ul className="list">
              <li><a href="https://en.wikipedia.org/wiki/The_Sword_of_Damocles_(virtual_reality)" target="_blank">Sword of Damocles by Ivan Sutherland (1968)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Videoplace" target="_blank">Videoplace by Myron Kreuger (1975)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/EyeTap" target="_blank">EyeTap by Steve Mann (1980)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Virtual_fixture" target="_blank">Virtual Fixtures by Louis Rosenburg for Air Force (1992)</a></li>
              <li><a href="http://artoolkit.org/" target="_blank">ARToolkit by Hirokazu Kato (1999)</a></li>
              <li><a href="http://wearables.unisa.edu.au/projects/arquake/" target="_blank">ARQuake by Bruce Thomas (2000)</a></li>
              <li><a href="https://en.wikipedia.org/wiki/Google_Glass" target="_blank">Google Glass beta test (2013)</a></li>
              <li><a href="https://www.microsoft.com/microsoft-hololens/en-us" target="_blank">Hololens (2015)</a></li>
              <li><a href="http://www.pokemongo.com/" target="_blank">PokemonGO (2016)</a></li>
              <li><a href="http://argonjs.io" target="_blank">ArgonJS Framework (2015 - now)</a></li>
            </ul>
            <p>
              With these 10 milestones in mind, we set out to develop a book that could tell this history of how augmented reality came to be in today's day and age.
            </p>
            <h4>Design</h4>
            <p>
              We had a couple different ways we could approach the book. We could keep it a traditional narrative where the reader has to flip through each history object one by one. However, because the reader can look at any image they want, and augmented reality to me inspires movement and spontaneity, we decided that <b>you can look at any piece you want to learn about it, much like a museum exhibition.</b> This keeps the app simple and easy to hop from piece to piece.
            </p>
            <img src={flow} alt="flow sketch"/>
            <p className="caption">User flow sketched by my <a href="http://victoriachai.me" target="_blank">teammate</a></p>
            <h4>Implementation</h4>
            <p className="starting-paragraph">
              In order to create our storybook, we used the augmented reality framework developed by the lab called <a href="http://argonjs.io/" target="_blank">Argon.js</a>. It's a javascript framework developed by <a href="https://blairmacintyre.me/" target="_blank">Blair MacIntyre</a>, the head of the Augmented Environments lab. We used Argon along with <a href="https://twinery.org/">Twine</a> and <a href="https://aframe.io/">a-frames</a> to create our AR experience.
            </p>
            <p>
  The general workflow was that I would create 3D models of the historical event we wanted to signify, and save them as .obj format so that they could be plugged into an a-frame and be rendered on the web. Once we had the model, we would write up a description of the event in Twine, and link it all up to a main storyline. We also had to save the images we wanted in <a href="https://www.vuforia.com/" target="_blank">Vuforia</a>, so that looking at an image would trigger the correct model to render.
            </p>

            <Slider {...sliderSettings}>
              <div>
                <img src={eyetap} alt="eyetap model"/>
                <p className="caption">3D model of EyeTap in Blender</p>
              </div>
              <div>
                <img src={vuforia} alt="vuforia ratings"/>
                <p className="caption">Sketches by my teammate to increase vuforia recognition</p>
              </div>
              <div>
                <img src={twine} alt="screenshot of twine"/>
                <p className="caption">A look at the Twine storyboard</p>
              </div>
            </Slider>
            <h4>The Exhibits</h4>
            <img src={argon_all} alt="all the storyboards" className="no-height-limit"/>
            <p className="caption">A look at all the models and articles for them</p>
            <h4>In Action</h4>
            <Slider {...sliderSettings}>
              <div>
                <img src={google_glass} alt="eyetap live" className="portrait"/>
                <p className="caption">Presenting to Professor Bolter with the Google Glass model</p>
              </div>
              <div>
                <img src={quake_live} alt="quake live" className="portrait"/>
                <p className="caption">Presenting to Professor Bolter with the Quake model</p>
              </div>
              <div>
                <img src={pokemon} alt="pokemon go" className="portrait"/>
                <p className="caption">What you actually see from the iPhone itself</p>
              </div>
            </Slider>
            <h4>Conclusion</h4>
            <p>Overall from this project I came to understand that AR on the web is still very much in its infancy, but that there are not very high barriers to entry from both the developer and the consumer side, which is promising for the future of mobile web augmented reality. I also learned a lot aout the history and how AR got to where it is today.</p>
          </span>
        }
      />
    );
  }
}

export default Argon;
