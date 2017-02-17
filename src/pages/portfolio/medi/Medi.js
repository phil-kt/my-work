import React, { Component } from 'react';
import Collapse from 'react-collapse';
import './Medi.css';

import PortfolioPage from '../../../components/project-page/ProjectPage';
import ProjectSection from '../../../components/project-section/ProjectSection';
import Slider from 'react-slick';

import ecosystem from '../../../media/medi/ecosystem.png';
import container from '../../../media/medi/container.jpg';
import process from '../../../media/medi/process.svg';

import figure_1 from '../../../media/medi/figures/figure_1.jpg';
import figure_2 from '../../../media/medi/figures/figure_2.jpg';
import figure_3 from '../../../media/medi/figures/figure_3.jpg';
import figure_4 from '../../../media/medi/figures/figure_4.jpg';

import lofi_1 from '../../../media/medi/lofi/lofi_1.jpg';
import lofi_2 from '../../../media/medi/lofi/lofi_2.jpg';
import lofi_3 from '../../../media/medi/lofi/lofi_3.jpg';
import lofi_4 from '../../../media/medi/lofi/lofi_4.jpg';
import lofi_5 from '../../../media/medi/lofi/lofi_5.jpg';
import lofi_6 from '../../../media/medi/lofi/lofi_6.jpg';
import lofi_7 from '../../../media/medi/lofi/lofi_7.jpg';

import persona from '../../../media/medi/persona.png';

import autodesk from '../../../media/medi/physical/autodesk.png';
import watch from '../../../media/medi/physical/watch.jpg';
import brainstorming from '../../../media/medi/physical/brainstorming.jpg';
import moodboard from '../../../media/medi/physical/moodboard.jpg'
import faces from '../../../media/medi/physical/faces.png';
import poster from '../../../media/medi/physical/poster.png';

import wireframe from '../../../media/medi/hifi/wireframe.png';

class Medi extends Component {

  state = {
    scenarioDetails: false,
    physicalDetails: false,
    posterDetails: false,
    feedbackDetails: false,
    wireframeDetails: false
  }

  collapseScenario = () => {
    this.setState({
      scenarioDetails: !this.state.scenarioDetails,
    })
  }

  collapsePhysical = () => {
    this.setState({
      physicalDetails: !this.state.physicalDetails
    })
  }

  collapsePoster = () => {
    this.setState({
      posterDetails: !this.state.posterDetails
    })
  }

  collapseFeedback = () => {
    this.setState({
      feedbackDetails: !this.state.feedbackDetails
    })
  }

  collapseFeedback = () => {
    this.setState({
      feedbackDetails: !this.state.feedbackDetails
    })
  }

  collapseWireframe = () => {
    this.setState({
      wireframeDetails: !this.state.wireframeDetails
    })
  }

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
      <PortfolioPage
        title="Medi"
        customLinks={[
          {
            name: "Prototype 1",
            link: "https://invis.io/C590SO1J7"
          },
          {
            name: "Prototype 2",
            link: "https://framer.cloud/WQdrl"
          }
        ]}
        nextProject="/portfolio/argon"
        content={
          <span>
            <ProjectSection title="What is it?"
              content={
                <span>
                  <p>
                    An app ecosystem to support the elderly and their caretakers in taking their prescribed medication properly and on time.
                  </p>
                  <img className="extend" src={ecosystem} alt="phone, watch, and dispenser" />
                </span>
              }
            />

            <ProjectSection title="Origins"
              content={
                <span>
                  <p className="starting-paragraph">
                    For fall semester of my master's program, I took a class which focused on teaching how to design interfaces from low to high fidelity. We were given an assignment to design an application that would assist both the elderly and their caretakers in taking prescription medication.  When designing these apps I was really influenced by the idea of <a href="https://medium.com/swarm-nyc/complexion-reduction-a-new-trend-in-mobile-design-cef033a0b978#.h55s4jdug" target="_blank">complexion reduction.</a>
                  </p>
                  <p>
                    For this application, three aspects of a prototype were created:
                  </p>
                  <ul className="list">
                    <li>A mobile application for the caretaker to use to check up on their patient</li>
                    <li>A physical artifact which allows the patient to track their medication</li>
                    <li>An automatic pill dispensing device for the patient with an embedded screen</li>
                  </ul>
                </span>
              }
            />

            <ProjectSection title="Problem Space"
              content={
                <span>
                  <p>
                    As the elderly population continues to increase, so too does the amount of prescriptions given out per year. Elderly patients can often forget to take their doses, or take them late, which can affect the effectiveness of a medication, or can cause medical complications. Caretakers and doctors are concerned about ensuring patients take their medications on time, and it would be useful if there were a way to monitor and track if patients do. Medi aims to solve this issue.</p>
                  <p>
                    (Note: this project was for a class, more emphasis was on interface design than user research)
                  </p>
                  <p>
                    <img src={container} alt="daily pill container"/>
                  </p>
                  <p className="caption">A 21st century solution to this</p>
                </span>
              }
            />

            <ProjectSection title="Process"
              content={
                <img className="extend" src={process} alt="scenario, low fidelity, persona, medium fidelity, user testing, 3d model and printing, high fidelity"/>
              }
            />

            <ProjectSection title="Ideation"
              content={
                <span>
                  <p className="starting-paragraph">
                    For the development of the mobile app, our professor assigned us to write a scenario/persona for the average caretaker who would find this app useful and better than the current method they are using. Although this is nowhere as good as user research, for the purpose of this class it made sense as the professor already had the app and its general features in mind.
                  </p>

                  <div className="button collapse" onClick={this.collapseScenario}>
                    <a>{this.state.scenarioDetails ? "Hide Scenario" : "Show Scenario"}</a>
                  </div>
                  <Collapse isOpened={this.state.scenarioDetails} keepCollapsedContent={true}>
                  <div>
                  <h4>Scenario</h4>
                  <p className="starting-paragraph">Thomas is a middle-aged businessman taking care of his older father, Harry, who is now living in his family’s home. Harry is about 80 years old and has to take several pain medications for this arthritis, and has recently been diagnosed with depression due to his lack of ability from old age. However, Thomas has many clients across the country requiring him to travel often and not be home to check on his father.
                  </p>
                  <p>
                  For his depression, Harry has been prescribed Zoloft, and Thomas is very concerned that Harry takes it properly to keep his father in good spirits, along with his regular pain medications. To help alleviate his fear, Thomas has bought a new internet connected pill dispenser which allows Thomas to check on Harry’s medicine schedule from wherever he may be. The device has segmented areas for different pills, and allows Thomas to set individual times for each pill to be dispensed from a companion iOS app.
                  </p>
                  <p>
                  The companion app pairs with the pill dispenser through NFC, so that it can be used by other members of Harry’s family to check in on him. The app itself shows a daily schedule of what pills Harry needs to take for the day, <a className="figure figure-1" href="#">(Figure 1)</a> and can provide detailed information about any medication, such as what its was prescribed for, what its possible side effects are, and when the next refill is required, with a simple tap. <a className="figure figure-2" href="#">(Figure 2)</a> Harry can also choose to refill in advance if he so feels from the screen, which will contact the pharmacy on file to schedule a refill for him to pick up.
                  </p>
                  <p>
                  Thomas can also edit information about the medicine, including its dosages and reminder times. He can set different priorities on the pills, so that Thomas can be notified immediately if Harry does not take his Xanax, but is less concerned about whether Harry takes all of his pain medications or not <a className="figure figure-3" href="#">(Figure 3)</a>, as well as see a weekly and monthly breakdown of how vigilant his father is at taking his medications.
                  </p>
                  <p>
                  In case Harry does miss a medication, Thomas will get a push notification with information about what medication his father didn’t take, and can choose to take action about it, at which point he will see detailed info about the medicine his father missed, and given the option to call Harry, their doctor, or 911 depending on the severity of the situation. <a className="figure figure-4" href="#">(Figure 4)</a>
                  </p>
                  <p>
                  Thomas is very happy with his new app which allows him to monitor his father’s health while on the go, and is excited to see what other features this dispenser and app combo have to ensure his father continues to live a healthy life. Without this app, Thomas would have no way to consistently and easily keep tabs on his father, and would not be able to ensure that his father is taking the medicine he needs to stay healthy. His father also gets the benefits of consistent reminders, and peace of mind knowing that the machine handles the task of tracking medication for him.
                  </p>
                  <h4>Concept Drawings</h4>
                  <p>
                  <Slider {...sliderSettings}>
                    <div>
                      <img className="concepts" src={figure_1} alt="schedule"/>
                      <p className="caption">Figure 1: A schedule of the day</p>
                    </div>
                    <div>
                      <img className="concepts" src={figure_2} alt="detail view"/>
                      <p className="caption">Figure 2: A detail of the medication</p>
                    </div>
                    <div>
                      <img className="concepts" src={figure_3} alt="editing view"/>
                      <p className="caption">Figure 3: Editing a medication's details</p>
                    </div>
                    <div>
                      <img className="concepts" src={figure_4} alt="missed medication"/>
                      <p className="caption">Figure 4: Push notification for a missed medication</p>
                    </div>
                  </Slider>
                  </p>
                  </div>
                  </Collapse>
                </span>
              }
            />

            <ProjectSection title="Low Fidelity Prototypes"
              content={
                <span>
                  <p className="starting-paragraph">
                    Using the concept drawings for the scenario I drew up some low fidelity prototypes, fleshing out the details a bit more.
                  </p>
                  <Slider {...sliderSettings}>
                    <div>
                      <img src={lofi_1} alt="Lofi schedule" className="portrait"/>
                      <p className="caption">The schedule screen</p>
                    </div>
                    <div>
                      <img src={lofi_3} alt="Lofi medication view" className="portrait"/>
                      <p className="caption">Medication detail view</p>
                    </div>
                    <div>
                      <img src={lofi_2} alt="Lofi medication editing" className="portrait"/>
                      <p className="caption">Editing a medication</p>
                    </div>
                    <div>
                      <img src={lofi_4} alt="Lofi list of medications" className="portrait"/>
                      <p className="caption">Viewing the list of medication</p>
                    </div>
                    <div>
                      <img src={lofi_5} alt="Lofi calendar view" className="portrait"/>
                      <p className="caption">Calendar view of medications</p>
                    </div>
                    <div>
                      <img src={lofi_6} alt="Lofi profile view" className="portrait"/>
                      <p className="caption">A profile of the patient</p>
                    </div>
                    <div>
                      <img src={lofi_7} alt="Lofi missed medication view" className="portrait"/>
                      <p className="caption">Missed medication notification</p>
                    </div>
                  </Slider>
                </span>
              }
            />

            <ProjectSection title="Persona"
              content={
                <span>
                  <p>
                    Based off of our initial scenario, we then developed personas to better flesh out the caretaker who would be using our app and the needs we would have to meet to ensure that they would use this app. So I further fleshed out the character of Thomas, and what he is looking for in taking care of his father.
                  </p>


                  <p>
                  <img src={persona}
                       alt="Thomas (Tom) Dean. KPMG Accountant. Key quote: “I want to check up on my dad and make sure he’s taking the medications he needs to take.” Tom's Story: Thomas is a middle-aged accountant at KPMG, 46 years old, who is taking care of his 80 year old father Harrison, or Harry, who lives with him and his family. Harry is currently taking several different pain medications for arthritis that came with old age due to his profession as a mechanic, and has also been prescribed Thalitone for blood pressure in the mornings and Prilosec for heartburn. He must take these medications daily in order to maintain a healthy lifestyle, and Thomas is very worried about his father properly taking these medications. In order to ensure his father takes his pills properly, Thomas is interested in a pill dispenser with a companion app that allows him to track his father’s pill intake and alerts him if his father misses a dose so he can follow up with his father or the doctor to keep Harrison healthy. Due to his work Thomas is often not home and although his family is there to help take care of Harry, he would like to have extra peace of mind so that it’s ensured that his father never forgets to take his prescriptions. Tom's Demographics:	Married 18 years, father of two, B.S. in Accounting from NYU Stern, Uses tech on day to day basis, carries an iPhone and Windows laptop to work on the go Key goals of Tom: Be able to check his father’s medication schedule for the day, Be notified when his father misses a dose, Easy to contact his father or a doctor when a medication is missed, Be able to see when his father misses his medication over a week or month term so that he can see patterns if there are any as to why his father might miss a dose" className="no-height-limit"/>
                  </p>


                </span>
              }
            />

            <ProjectSection title="Medium Fidelity Prototype"
              content={
                <span>
                  <p className="starting-paragraph">After low fidelity mockups came the medium fidelity ones which were used for user testing.</p>
                  <iframe className="invision-embed" width="438" height="930" src="//invis.io/DX90SMQU4" frameBorder="0" allowFullScreen="true"></iframe>
                  <p>
                    In this prototype the following tasks are incorporated:
                  </p>
                  <ul className="list">
                      <li>
                        A user is able view all four tabs of the app, which include Schedule, Medicines, Calendar, and Profile
                      </li>
                      <li>
                        From the Schedule or Medicines screen, users can click on a medicine to see details about a particular medicine, and click on the edit button to edit medication information
                      </li>
                      <li>
                        From the Calendar screen a user can see missed medications, and click on a past day to see the schedule for that day
                      </li>
                      <li>
                        A user can also filter missed medicines based on priorities of the medicine
                      </li>
                      <li>
                        When a medication is missed, the app gives a notification that a user can tap to see details on the missed medication and act upon it if they want to (see this <a href="https://invis.io/ES90SOATH#/198511415_Home_Screen">here</a>)
                      </li>
                    </ul>
                </span>
              }
            />


            <ProjectSection title="User Testing"
              content={
                <span>
                  <p>Using the medium fidelity prototype on Invision, I sent it out to two people for user testing:
                  </p>
                  <ol className="list">
                      <li>my mother, a licensed physician who is currently practicing in a private clinic and could provide insight from a medical perspective</li>
                      <li>a fellow MSHCI graduate student who could find simple usability issues and heuristically evaluate it</li>
                    </ol>
                  <div className="button collapse" onClick={this.collapseFeedback}>
                    <a>{this.state.feedbackDetails ? "Hide Feedback" : "Show Feedback"}</a>
                  </div>
                  <Collapse isOpened={this.state.feedbackDetails} keepCollapsedContent={true}>
                  <div>
                    <p>
                      My mother provided some great feedback (as mothers tend to do) from a doctor's point of view:
                    </p>
                     <ul className="list">
                        <li>"Time of medication should be simpler, either 9am or 9:30am"</li>
                        <li>“Priorities classification is not useful”</li>
                        <li>“No one calls the doctor for one missed dose”</li>
                        <li>Appreciated how medication details show the side effects, and have refill button available</li>
                        <li>Likes the ability to see purpose and potential side effects of a medication</li>
                        <li>Maybe only show pills he misses on the calendar, otherwise can get busy</li>
                        <li>Would like to be able to make memos on the calendar on patient’s condition to discuss with doctor next visit</li>
                      </ul>
                    <p>
                      As for my fellow classmate, choice feedback included:
                    </p>
                    <ul className="list">
                        <li>Priorities are a bit confusing</li>
                        <li>It was hard to figure out how to call my patient</li>
                        <li>Calendar was intuitive to see days he missed</li>
                        <li>Intuitive and makes clear use of iOS design guidelines</li>
                      </ul>
                  </div>
                  </Collapse>
                  <p>
                    After  feedback it became clear that I should incorporate a proper onboarding process to describe what exactly the priorities mean. In further user testing if it proves too confusing, perhaps remove the user feature altogether. I should also emphasize how this app is catered toward caretakers not patients, and perhaps change the wording of “Profile” to “Patient”. As well as add a memo feature, and also change the calendar display.
                  </p>
                </span>
              }
            />

            <ProjectSection title="Physical Prototype"
              content={
                <span>
                  <p>
                    The professor also has a history of 3d prototyping in the industry, so he had us design a physical artifact that the patient could wear to remind them of prescription times. This was my first foray into industrial design, so working with Autodesk Fusion 360 was pretty fun, and getting to 3D print our design was awesome to say the least.
                  </p>

                  <div className="button collapse" onClick={this.collapsePhysical}>
                    <a>{this.state.physicalDetails ? "Hide Process" : "Show Process"}</a>
                  </div>
                  <Collapse isOpened={this.state.physicalDetails} keepCollapsedContent={true}>
                  <div>
                    <Slider {...sliderSettings}>
                       <div>
                        <img src={brainstorming} alt="notes of designs" className="portrait"/>
                        <p className="caption">
                          Brainstorming the physical device and its screens
                        </p>
                       </div>
                      <div>
                        <img src={moodboard} alt="moodboard" className="portrait"/>
                        <p className="caption">
                          A moodboard showing inspirations and guiding principles
                        </p>
                       </div>
                    </Slider>

                    <p>For my design, I decided to make my physical design a watch, as it is ubiquitous, its form is familiar to the older generation and they are also more likely to wear a watch. It is also less cumbersome, and has the advantage of being able to give subtle vibrations as a notification system. </p>

                    <p>
                      <img src={autodesk} alt="designing in fusion"/>
                    </p>
                    <p className="caption">
                      The final design in Autodesk Fusion 360
                    </p>
                  </div>
                  </Collapse>
                  <p>The watch is a simple LCD screen watch, with two buttons on the side to interact with the device. (Our professor forbade us from using touch screens, so no touch interactions!) Too many buttons would only serve to confuse the user on functions, and on screen cues help guide the user on what to press. The buttons can also be twisted, to allow scrolling, and have different colors. The band can also be swapped out, for the fashion conscious.</p>

                  <p>
                    <img src={watch} alt="the 3d printed watch"/>
                  </p>
                  <p className="caption">Live and in the flesh!</p>
                </span>
              }
            />

            <ProjectSection title="Physical Prototype Display"
              content={
                <span>
                  <img className="extend" src={faces} alt="wireframe of physical watch"/>
                  <p>For the screens on the device, I didn't want there to be too many states or screens that might confuse the user. The watch basically serves as a reminder and a logger, it reminds a patient when it's time for their dose, they can see what medication they've taken so far today, and be told what medication they've missed, which could be useful information for the caretaker or the doctor. </p>

                  <p>On its standard state, the watch simply shows the time and when your next dose is, as well as what you've taken so far using the color coded system. When it's time for a dosage, the watch notifies the user, and requires the patient to dismiss the screen as a form of confirmation.</p>

                  <div className="button collapse" onClick={this.collapsePoster}>
                    <a>{this.state.posterDetails ? "Hide Poster" : "Show Poster"}</a>
                  </div>
                  <Collapse isOpened={this.state.posterDetails} keepCollapsedContent={true}>
                  <div>
                    <p>
                    <img src={poster} alt="medi poster pitch" className="portrait" />
                    </p>
                    <p className="caption">A poster created to pitch medi watch</p>

                    <p>Overall the industrial design part was the most fun part of the project for me, as I was introduced to new tools and design constraints by working in a physical space. I also think I made a pretty slick lookin' watch.</p>
                  </div>
                  </Collapse>
                </span>
              }
            />

            <ProjectSection title="High Fidelity Prototype"
              content={
                <span>
                  <p>For the final leg of this project, we had to create a high fidelity prototype of the interface that would be on the pill dispensing machine. The dimensions were 480 by 320, and the design of the device itself was given to us, we just had to make the interface.
                  </p>

                  <p>The device itself is meant to be able to be a standalone device, which means that all settings, interactions, controls, etc, had to be on the embedded screen, no accompanying app. Features of the device include:
                  </p>
                  <ol>
                    <li>Onboarding</li>
                    <li>Medication set up</li>
                    <li>Editing settings</li>
                    <li>Notification of medication dispensing</li>
                    <li>Standby or day to day operation</li>
                  </ol>

                  <div className="button collapse" onClick={this.collapseWireframe}>
                    <a>{this.state.wireframeDetails ? "Hide Wireframe" : "Show Wireframe"}</a>
                  </div>
                  <Collapse isOpened={this.state.wireframeDetails} keepCollapsedContent={true}>
                    <div>
                      <p>
                        <img src={wireframe} alt="wireframe of device" className="no-height-limit" />
                      </p>

                      <p>
                        With these features in mind, it was relatively quick to create a wireframe of the device as I had standard assets across all three devices. Once these wireframes were reviewed by my professor, I then created an interactable prototype in Framer.js, fleshing out the interactions.
                      </p>
                    </div>
                  </Collapse>

                  <iframe className="device" src="https://framer.cloud/WQdrl/" frameBorder="0" allowFullScreen="allowFullScreen"/>
                  <p className="caption">
                    <a href="https://framer.cloud/WQdrl" target="_blank">Click here to view on Framer</a>
                    {
                      window.matchMedia("(max-width: 680px)").matches ?
                        <p>Because this is an embedded screen device on a custom device, your screen must be wider to view it. Sorry!</p>
                        : null
                    }
                  </p>
                  <p>
                    In this prototype you can:
                  </p>
                  <ul className="list">
                      <li>Go through the onboarding process, including setting up a wifi network</li>
                      <li>Swap between Schedule, Medicine list, and Adding a medication</li>
                      <li>View a medication, edit it, and save the edits</li>
                      <li>View the settings and change the volume</li>
                      <li>Go through the process of dispensing a pill by using the debug button in the upper left of the Schedule screen</li>
                    </ul>

                </span>
              }
            />

            <ProjectSection title="Conclusion"
              content={
                <span>
                  <p>This project taught me a lot about prototyping from low fidelity to high fidelity in terms of techniques and tools. I was able to learn a lot about Framer.js, and also a little about how physical design works with Autodesk Fusion 360.
                  </p>
                  <p>
                  If I were to expand on this project, I would like to user test it more thoroughly, such as see if the color classification system I came up with is useful, and if there are any confusing parts of the information architecture of the app, perhaps with a card sort. But I hope you enjoyed reading about this project as much as I enjoyed making it :)
                  </p>
                </span>
              }
            />


          </span>
        }
      />
    );
  }
}

export default Medi;
