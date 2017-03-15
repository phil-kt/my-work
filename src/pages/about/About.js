import React, { Component } from 'react';
import './About.css';

import ProjectSection from '../../components/project-section/ProjectSection';

import Button from '../../components/button/Button';
import Projects from '../../components/projects/Projects';
import Project from '../../components/project/Project';

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
                              In terms of design, I believe in design by doing, by making quickly, testing quickly, and iterating quickly. Design can't predict everything a user will do, so you have to be ready to constantly improve your product, through research, design, and development.
                            </p>
                            <p>
                              As for outside of school and work, I spend a lot of time reading manga, playing video games, listening to future funk or building model kits, just like any typical half-🇯🇵 half-🇸🇪 raised in America. I also try to go to hackathons when I can, and have been attending conventions like New York Comic Con and PAX East for the better part of decade.
                            </p>
                            <p>
                              Feel free to stalk me on my various online presences if you'd, or drop me a line at <a href="mailto:hi@philkt.me">hi@philkt.me</a>.
                            </p>


                            <p className="go-home">
                              <Button content="Go Home" link="/"/>
                            </p>
                            <p style={{textAlign:"center"}}>
                              Orrrrrrr check out a random project!
                            </p>
                          </span>
                        }
        />
        </div>


        <Project title={this.state.project.name} description={this.state.project.description} link={this.state.project.link} image={this.state.project.image} tags={this.state.project.tags} iPhone={this.state.project.iPhone}/>

      </div>
    )
  }

}

export default About;
