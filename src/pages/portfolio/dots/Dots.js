import React, { Component } from 'react';
import './Dots.css';

import ProjectPage from '../../../components/project-page/ProjectPage';

class Dots extends Component {

  render() {
    return (
      <ProjectPage
        title="Dots"
        customLinks={[
          {
            name: "Youtube ",
            link: "https://www.youtube.com/watch?v=I1TvCtP7g0s"
          }
        ]}
        content={
          <span>
            <h3>What is it?</h3>
            <p>
              An art video I made in After Effects for an undergraduate art class. It was inspired by Google's new branding and was <a href="http://zuccairegallery.stonybrook.edu/2016/05/senior-show-2016-awards/">bought by Stony Brook University’s president.</a>
            </p>

            <div className="aspect-keeper">
              <iframe src="https://www.youtube.com/embed/I1TvCtP7g0s" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
            </div>
          </span>
        }


      />
    );
  }
}

export default Dots;
