import React, { Component } from 'react';
import './About.css';

import Button from '../../components/button/Button';
import ProjectSection from '../../components/project-section/ProjectSection';

class About extends Component {

  render() {
    return (
      <div className="about-page">
        <div className="my-face">
        </div>

        <ProjectSection title="About me"
                        content={
                          <span>
                            <p>
                              I'm flattered you want to know about me! 😊 Well I guess I'll start with the obvious, I'm currently a student at GaTech learning how to design everything from digital interfaces to customer experiences across an entire brand. I've gone from pushing code to pushing pixels, and have learned the importance of research in software development and design in general.
                            </p>
                            <p>
                              As for outside of school. I spend a lot of time reading manga, playing video games, listening to future funk or building model kits, just like any typical half-🇯🇵 half-🇸🇪 raised in America. I also try to go to hackathons when I can, and have been attending conventions like New York Comic Con and PAX East for the better part of decade.
                            </p>
                            <p>
                              Feel free to stalk me on my various online presences if you really want, or drop me a line at <a href="mailto:hi@philkt.me">hi@philkt.me</a>. Don't forget to check out my projects too!
                            </p>
                            <Button content="Go Home" link="/"/>
                          </span>
                        }
        />


      </div>
    )
  }

}

export default About;
