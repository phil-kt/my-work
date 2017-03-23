import React, { Component } from 'react';
import './About.css';

import ProjectSection from '../../components/project-section/ProjectSection';

import Button from '../../components/button/Button';
import Projects from '../../components/projects/Projects';
import Project from '../../components/project/Project';
import HomeButton from '../../components/home-button/HomeButton';
import Social from '../../components/social/Social';

class About extends Component {

  constructor(props) {
    super(props);

    const proj = new Projects();

    this.state = {
      project: proj.getRandomProject()
    }
  }

  render() {
    return (
      <div className="about-page">

        <div className="about-content">

        <div className="my-face">
        </div>


        <ProjectSection title="About me"
                        content={
                          <span>
                            <p>
                              I'm flattered you want to know about me! 😊 Well I guess I'll start with the obvious, I'm currently a student at GaTech learning how to design everything from digital interfaces to customer experiences across an entire brand. I've gone from pushing code to pushing pixels, and have learned the importance of research in software development and design in general.
                            </p>
                            <p>
                               My design philosophies include complexity reduction, design by doing, as well as of course user-centered design. I'm also interested in the areas of service design, VR design, and AR design. My go to tools are Sketch, Framer, pen and paper, and sometimes Unity. I'm always on the lookout for more though!
                            </p>
                            <p>
                              As for outside of school and work, I spend a lot of time reading manga, playing video games, listening to future funk or building model kits, just like any typical half-🇯🇵 half-🇸🇪 raised in America. I also try to go to hackathons when I can, and have been attending conventions like New York Comic Con and PAX East for the better part of decade.
                            </p>
                            <p>
                              Feel free to stalk me on my various online presences if you'd, or drop me a line at <a href="mailto:hi@philkt.me">hi@philkt.me</a>.
                            </p>

                              <Social/>


                            <p style={{textAlign:"center"}}>
                              Orrrrrrr check out a random project!
                            </p>
                          </span>
                        }
        />
        </div>

      <HomeButton/>


        <Project title={this.state.project.name} description={this.state.project.description} link={this.state.project.link} image={this.state.project.image} tags={this.state.project.tags} iPhone={this.state.project.iPhone}/>

      </div>
    )
  }

}

export default About;
