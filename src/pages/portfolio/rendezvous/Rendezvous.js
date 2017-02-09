import React, { Component } from 'react';
import Slider from 'react-slick';
import './Rendezvous.css';

import ProjectPage from '../../../components/project-page/ProjectPage';

import leadin from '../../../media/rendezvous/rendezvous-leadin.png';
import wireframes from '../../../media/rendezvous/rendezvous_flow.png';
import phone_mockup from '../../../media/rendezvous/rendezvous_mockup.jpg';
import watch_mockup from '../../../media/rendezvous/rendezvous_apple_mockup.jpg';

class Rendezvous extends Component {

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
        title="Rendezvous"
        customLinks={[

          {
            name: "Github",
            link: "https://github.com/LinkCable/rendezvous"
          },

          {
            name: "Prototype",
            link: "https://framer.cloud/GrnUD/",
          }

        ]}
        content={
          <span>
            <h4>What is it?</h4>
            <p>
             An iOS app to help you find your friends in crowded places or, if left in the background, to encourage spontaneous meetings with your friends.
            </p>
            <img src={leadin} alt="rendezvous sneak peak"/>

            <h4>Origins</h4>
            <p>
              Rendezvous was inspired by the very hackathon it was created for. When our team first arrived at the huge Wells Fargo Center where PennApps XII was being held, we couldn't find each other and barely had cell service! This led us struggling for a solid hour to try and find where we as a team had settled down to work. Based on this, we thought an app which allowed you to find friends when you have no cell service would be awesome to have in certain situations.
            </p>
            <h4>What I Did</h4>
            <p>
              For this app I made the front-end in Swift, integrated it with the backend logic such as the accelerometer data, and designed all the screens you see below.
            </p>
            <h4>Implementation</h4>
            <p>
              At its core, Rendezvous is an app utilizing Apple's iBeacon/LBTE technology to discover friends around you who are also using it, and where you're close to each other Rendezvous will guide you to one another. Thus, when two friends happen to be close to each other, such as at the same dining hall or in the library, you can be notified that your friends are nearby! It's also useful if you lose a friend at a concert or in the woods where you have no cell service.
            </p>

            <h4>Wireframes</h4>
            <p>
              <img src={wireframes} alt="rendezvous wireframes" />
            </p>
            <p>
              A simple three screen user flow, a user signs up by using either Facebook or their contacts so we can know which one of their friends is on the platform. Once they do that, they simply leave the app running and the app will notify them when someone they know is around.
            </p>

            <h4>Prototype</h4>
            <iframe className="framer-embed" src="https://framer.cloud/GrnUD" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>

            <h4>Mockups</h4>
            <p>
             <Slider {...sliderSettings}>
               <div>
                 <img src={phone_mockup} alt="phone mockup"/>
                 <p className="caption">Use Rendezvous on your phone...</p>
               </div>
               <div>
                  <img src={watch_mockup} alt="watch mockup"/>
                  <p className="caption">Or your watch!</p>
               </div>
             </Slider>
            </p>

            <h4>Conclusion</h4>
            <p>Working on this project taught me that LBTE, or iBeacons for Apple, are still very limited in what information it can transmit and that the documentation is very convoluted. Much of our hackathon time was spent working with Apple engineers who were just as confused as we were on some things we tried to implement from the documentation. Overall it was one of my first successful hacks though and I'm pretty proud of it.</p>
          </span>
        }


      />
    );
  }
}

export default Rendezvous;
