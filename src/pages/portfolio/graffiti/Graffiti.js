import React, { Component } from 'react';
import Slider from 'react-slick';
import './Graffiti.css';

import ProjectPage from '../../../components/project-page/ProjectPage';
import ProjectSection from '../../../components/project-section/ProjectSection';
import front from '../../../media/graffiti/front.jpg';
import back from '../../../media/graffiti/back.jpg';
import screens from '../../../media/graffiti/screens.png';
import GraffitiMid from '../../../media/graffiti/graffiti_mid.jpg';
import GraffitiView from '../../../media/graffiti/graffiti_view.jpg';
import GraffitiOther from '../../../media/graffiti/view_other.jpg';

class Graffiti extends Component {

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
        title="Graffiti"
        github="https://github.com/sayalvarun/graffiti"
        prototype="http://share.framerjs.com/e5fgdt2bh6l9"
        devpost="https://devpost.com/software/graffiti-l3v85w"
        description="An augmented reality iOS app that allows you to draw virtual graffiti onto the real world"
        content={
          <span>

            <ProjectSection title="Origins"
              content={
                <p>
                  The concept of Graffiti came about by thinking about what avenues of social media haven't been explored to their full potential yet, and my friends and I all agreed we were most interested in the aspect of anonymous socializing, in the vein of YikYak or Secret, as well as the "in the moment" feeling of platforms like Snapchat and Twitter. We tried to think of the best way we could combine these two aspects, and add in a creative aspect to convey these ideas through art.
                </p>
              }
            />

            <ProjectSection title="What I Did"
              content={
                <p>
                  For this project I coded the front-end in Swift using AVFoundation and some invaluable cocoapods (<a href="https://github.com/SnapKit/SnapKit" target="_blanl">SnapKit</a>, <a href="https://github.com/gizmosachin/ColorSlider" target="_blank">ColorSlider</a>, jot, and <a href="https://github.com/scalessec/Toast-Swift" target="_blank">Toast-Swift</a>). I also created all the assets and screens you see. Much help to <a href="https://github.com/IFTTT/jot" target="_blank">IFTTT's jot library</a> which was instrumental in finishing the app within 48 hours.
                </p>
              }
            />

            <ProjectSection title="Implementation"
              content={
                <span>
                  <p className="starting-paragraph">
                    We eventually landed on an augmented reality app that allows you to draw on any surface around you, and when you or anyone else with the app comes by that same spot they can see what you drew! All drawings are anonymous, and can only be viewed by those in the same location as you looking at the same wall, ceiling, floor, what have you.
                  </p>
                  <p>
                    In order for graffiti to work we used the gyroscope and GPS to gather location and orientation data to maintain the context the graffiti is drawn on so that you don't see random drawings floating in the air (unless intended to be placed there!)
                  </p>
                </span>
              }
            />
            
            <ProjectSection title="Design Sketches"
              content={
                <Slider {...sliderSettings}>
                  <div>
                    <img src={front} alt="front end logic of graffiti" className="portrait"/>
                    <p className="sketches-description">Sketches of the initial screens of graffiti, and the front end logic of a drawing layer, a camera layer, and the main activity layer. Struggled for a bit to separate out the code for all three screens whilst displaying them all at the same time.</p>
                  </div>
                  <div>
                    <img src={back} alt="back end logic of graffiti" className="portrait"/>
                    <p className="sketches-description">The black magic that is the backend. Involves uploading the image you drew to the cloud along with all the geolocation data, and then pulling it down if a different user is at the same spot looking in the same direction.</p>
                  </div>
                </Slider>
              }
            />

            <ProjectSection title="Wireframes"
              content={
                <span>
                  <img src={screens} alt="drawing and tagging screens" className="extend" />
                  <p>
                    The end product, simply two screens, one to view others' graffiti with a spray can to start drawing, and another to actually create your art and then tag it into the world. Users can select stroke, color, and also add text to their graffiti.
                  </p>
                </span>
              }
            />
            

            <ProjectSection title="Prototype"
              content={
                <p>
                  <iframe className="framer-embed" src="https://framer.cloud/mbzbA/" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                </p>
              }
            />

            <ProjectSection title="In the Wild"
              content={

                <Slider {...sliderSettings}>
                  <div>
                    <img src={GraffitiMid} alt="real life use of graffiti"/>
                    <p className="caption">A person writing their own graffiti on a wall.</p>
                  </div>
                  <div>
                    <img src={GraffitiView} alt="viewing graffiti"/>
                    <p className="caption">Now they can view the graffiti they just drew.</p>
                  </div>
                  <div>
                    <img src={GraffitiOther} alt="viewing other's graffiti"/>
                    <p className="caption">Hey, they found someone else's graffiti!</p>
                  </div>
                </Slider>

              }
            />

            <ProjectSection title="Conclusion"
              content={
                <p>
                  Making graffiti taught me that AR on an iPhone isn't that tricky, all you do is simply overlay a screen over a camera view and bam, augmented reality. Interacting with that reality is much trickier though, and I had a tough time figuring out how to get the drawing working properly on the app. However I'm happy with the end product and also am not ashamed of being so inspired by Snapchat's design.
                </p>
              }
            />
          </span>
        }
      />
    );
  }
}

export default Graffiti;
