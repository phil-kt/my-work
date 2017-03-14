import React, { Component } from 'react';
import Slider from 'react-slick';
import Collapse from 'react-collapse';
import './Hive.css';

import ProjectPage from '../../../components/project-page/ProjectPage';
import ProjectSection from '../../../components/project-section/ProjectSection';
import crowded from '../../../media/hive/crowded.jpg';
import process from '../../../media/hive/process.svg';
import affinity_map from '../../../media/hive/affinity-resize.jpg';
import task_analysis from '../../../media/hive/task-analysis.png';
import screen from '../../../media/hive/designs/screen.png';
import screen_storyboard from '../../../media/hive/designs/screen_storyboard.png';
import furniture from '../../../media/hive/designs/furniture.png';
import furniture_storyboard from '../../../media/hive/designs/furniture_storyboard.png';
import tree from '../../../media/hive/designs/tree.png';
import tree_storyboard from '../../../media/hive/designs/tree_storyboard.png';
import tree_live from '../../../media/hive/tree_live.png';
import tree_unity from '../../../media/hive/tree_unity.png';
import tree_v2 from '../../../media/hive/tree_v2.png';
import colors from '../../../media/hive/colors.png';


class Hive extends Component {

  state = {
    researchDetails: false,
    designDetails: false,
    resultDetails: false
  }

  collapseResearch = () => {
    this.setState({
      researchDetails: !this.state.researchDetails
    })
  }

  collapseDesign = () => {
    this.setState({
      designDetails: !this.state.designDetails
    })
  }

  collapseResult = () => {
    this.setState({
      resultDetails: !this.state.resultDetails
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
      <ProjectPage
        title="The Hive"
        description=" An art installation and design solution to make it simpler and faster for students at Georgia Tech to find study spots in the library"
        github="http://www.github.com/linkcable/the-hive"
        prototype="http://linkcable.github.io/The-Hive"
        content={
          <span>

            <ProjectSection title="Problem Space"
              content={
                <span>
                  <p>
                    The concept for The Hive came about after noticing that students at the library often struggle to find seats, due to there being no easy way to see if certain seats were taken or not, which led to students walking around different floors for several minutes trying to find a suitable studying space. Having personally experienced this ourselves as well, we thought it would be useful to try and solve the problem of finding a seat so students could focus on studying, not searching for a place to work.
                  </p>
                  <p>
                    <img src={crowded} alt="no seating library"/>
                  </p>
                  <p className="caption">The struggle is real come finals time</p>
                </span>
              }
            />

            <ProjectSection title="What I Did"
              content={
                <span>
                  <p className="before-list">
                    My contributions to this project include:
                  </p>
                  <ul className="list">
                    <li>Defining the data we were interested in collecting for our problem space</li>
                    <li>Conducting interview sessions with users</li>
                    <li>Creating interview questions</li>
                    <li>Creating a task analysis after reviewing interview data</li>
                    <li>Development of a persona for a potential user</li>
                    <li>Brainstorming of design solutions</li>
                    <li>Modeling and coding of a Unity prototype for The Hive</li>
                    <li>Conducting user tests with both virtual and physical prototypes in the library</li>
                  </ul>
                </span>
              }
            />

            <ProjectSection title="Process"
              content={
                <img className="process" src={process} alt="Survey & interviews, Pattern analysis, Refine problem, Ideation, Prototype, User Testing, Feedback, Findings" />
              }
            />

            <ProjectSection title="Research"
              content={
                <span>
                  <p>
                    After finding our problem space, we then began to conduct research on how exactly students use the CULC, how many have struggled finding a seat before, and other data points so that we could see if this was a real issue that needed solving. We began by distributing a survey, conducting semi-structured interviews with random individuals in the library, and observing how students use the space as well as how long it can take them to find seats.  <b>We primarily based our results on the semi-structured interviews, as they allowed us to really understand the behavior of the students and what leads them to come to library and how they approach studying there.</b>
                  </p>
                  <div className="statistics">
                    <div className="statistic">
                      <h2 className="surveys">28</h2>
                      <p>survey <br/> responses</p>
                    </div>
                    <div className="statistic">
                      <h2 className="interviews">23</h2>
                      <p>students <br/>interviewed</p>
                    </div>
                    <div className="statistic">
                      <h2 className="observations">2</h2>
                      <p>hours of <br/> observations</p>
                    </div>
                  </div>
                  <div className="button collapse" onClick={this.collapseResearch}>
                    <a>{this.state.researchDetails ? "Less Details" : "More Details"}</a>
                  </div>
                  <Collapse isOpened={this.state.researchDetails} keepCollapsedContent={true}>
                  <div>
                  <p>Our research results revealed that students often use the library for group work due to its noisier nature compared to the library, and its central location. When questioning students about seats, some of them outright stated that they never had problems finding seats, but rather finding tables. Our observations enforced this point, as we noticed an abundance of free chairs in the library. So many free chairs in fact, students were using them as footrests or to create makeshift beds. However table space was scarce, and once students left a table it was quickly occupied by a new group. Some students opted to sit on the floor, even when there were open seats left, due to the space afforded by spreading stuff out on the ground.</p>

                  <Slider {...sliderSettings} className="carousel">
                    <div>
                      <img src={affinity_map} alt="affinity map" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
                      <p className="caption">
                        Affinity mapping out our research data
                      </p>
                    </div>
                    <div>
                      <img src={task_analysis} alt="task analysis" onLoad={() => {window.dispatchEvent(new Event('resize'));}} />
                      <p className="caption">
                        A task analysis I derived from our research
                      </p>
                    </div>
                  </Slider>
                  </div>
                  </Collapse>
                </span>
              }
            />

            <ProjectSection title="Insights"
              content={
                <span>
                  <p>
                  After completing our research and analyzing the findings, we realized that we were asking the wrong question in our problem space. <b>It turns out that there is not much difficulty in finding an open seat in the CULC; the problem lies in finding an available table.</b>
                  </p>

                  <p>This led us to shift our attention on finding available seating to finding available tables. During observations, it was made clear that there are plenty of unoccupied chairs. However, table space was precious and most tables were quick to be taken as soon as students left them. After talking to students, we were also interested in making refinements into how our solution could convey different information depending on context, such as if group seating is available or noise levels of the seats.
                  </p>
                </span>
              }
            />

            <ProjectSection title="Design Ideas"
              content={
                <span>
                  <p>
                    Based on this new problem area and the data we collected, we then began to ideate on possible solutions for finding tables in the library. We went through an exhaustive list of design possibilities, which ranged concepts such as a flag to indicate if you were open to others sitting at your table to stringing ropes across the CULC to create a sort of large scale hammock for people to sit and work on, we eventually narrowed down to three final designs.
                  </p>

                  <div className="button collapse" onClick={this.collapseDesign}>
                    <a>{this.state.designDetails ? "Hide Other Designs" : "Show Other Designs"}</a>
                  </div>
                  <Collapse isOpened={this.state.designDetails} keepCollapsedContent={true}>
                  <div>
                    <p><b>Solution 1</b></p>
                    <p className="sub-header-p">Display a screen at every floor showing seat distribution so students know where to find a seat, while also projecting seat information onto the wooden railings on each staircase.</p>


                    <Slider {...sliderSettings}>
                      <div>
                        <img src={screen} alt="screen solution"/>
                        <p className="caption">Possible visualizations of the heatmap and seat occupancy levels</p>
                      </div>
                      <div>
                        <img src={screen_storyboard} alt="screen storyboard"/>
                        <p className="caption">A storyboard for the screen solution</p>
                      </div>
                    </Slider>

                    <p><b>Solution 2</b></p>
                    <p className="sub-header-p">
                      Introduce modular furniture that can be a seat or a table depending on the need, therefore increasing the amount of tables in circulation and making seating exist wherever it is needed.
                    </p>


                    <Slider {...sliderSettings}>
                      <div>
                        <img src={furniture} alt="modular furniture"/>
                        <p className="caption">Some concepts of what the furniture could look like</p>
                      </div>
                      <div>
                        <img src={furniture_storyboard} alt="modular furniture storyboard"/>
                        <p className="caption">A storyboard for modular furniture</p>
                      </div>
                    </Slider>
                  </div>
                  </Collapse>

                  <p><b>Solution 3</b></p>
                  <p>A tree installation that can show students where seats are available from a glance, by following the path of branches lit by fiber optics, which change brightness depending on crowdedness and pulse based on noise levels.</p>

                  <Slider {...sliderSettings}>
                    <div>
                      <img src={tree} alt="tree solution"/>
                      <p className="caption">A concept drawing of the tree</p>
                    </div>
                    <div>
                      <img src={tree_storyboard} alt="tree storyboard"/>
                      <p className="caption">A storyboard for the tree's role in finding a seat</p>
                    </div>
                  </Slider>


                  <p className="before-list">
                    We arrived at these designs by following two different approaches for our solution:
                  </p>
                 <ol className="list">
                    <li>Make seating and tables easier to find</li>
                    <li>Increase the amount of tables available</li>
                  </ol>

                  <p>
                  Both solution 1 and 3 are based on the first approach, as they aim to make it easier and faster for students to find an available table at the library and begin their work. However, not wanting to overlook an obvious solution of simply adding more tables, we also designed a solution that would provide students with more workspaces, which solution 2 comes from.
                  </p>
                </span>
              }
            />

            <ProjectSection title="Decision"
              content={
                <span>
                  <p>
                  After feedback from our peers and discussion amongst ourselves, we decided to go with solution 3, the tree. The reason being that although solution 1 was conventional and certainly would have worked, the tree grants the benefit of knowing which floor to go to immediately instead of having to climb past every floor to see that statistics for the floor. The other reason being we wanted a solution with a spirit of art in it. Solution 2 was abandoned as it featured no computer in its design, and this being a human-computer interaction course our professor told us no, haha.
                  </p>

                  <p className="before-list">
                  The advantages of the tree, or The Hive as I will refer to it from now on, are several:
                  </p>
                  <ol className="list">
                    <li>Students can see which floors are less crowded from any point in the CULC </li>
                    <li>The branches of the tree directs students to which areas are less populated</li>
                    <li>Can disseminate more information in a single structure (Such as noise levels and crowdedness)</li>
                    <li>It looks prettier</li>
                  </ol>
                </span>
              }
            />

            <ProjectSection title="Prototype"
              content={
                <span>
                   <p>
                   In order to prototype and test The Hive, it we required a bit of creativity on our part. Sadly we did not have the funds or feasibility to construct a full scale model of a tree in the CULC, so we made a small physical model out of cardboard, an Arduino, and EL wire to produce the desired effect of The Hive.
                   </p>
                   <p>
                     <img src={tree_live} alt="real life model of the tree" />
                   </p>
                   <p className="caption">Our IRL tree</p>

                   <p>
                     Knowing that wouldn't provide enough immersion to have a user test it, I also developed a simulation of the tree using Blender and Unity so a user could play a first person walkthrough of encountering our tree in the CULC and using it to find a seat.
                   </p>
                   <p>
                     <img src={tree_unity} alt="unity demo of tree" />
                   </p>
                   <p className="caption">
                     The first iteration of the Unity demo
                   </p>

                   <p>
                     Using these two prototypes, we set up in the library and asked random individuals who were passing by to test our solution if they had the time. They were assigned a task of finding a seat using the Unity prototype, and then asked several questions regarding the physical prototype, such as where they would go based on the current orientation of the tree, differentiation of the colors, and then were given a post-testing interview consisting of several questions to gather feedback design recommendations.
                   </p>
                </span>
              }
            />

            <ProjectSection title="Feedback"
              content={
                <span>
                  <p className="before-list">
                    After conducting several user tests, this was the feedback we received on our prototype:
                  </p>
                    <ol className="list">
                      <li>The colors were somewhat of an issue; the meaning of blue/green wasn't intuitive, and some people had difficulty differentiating between them</li>
                      <li>The look might not fit in with the CULC's aesthetic since it is not industrial</li>
                      <li>It's eye-catching but not distracting </li>
                      <li>Some people liked it more than a simple display, others did not</li>
                    </ol>
                  <p>
                    Overall, it seems as though people liked the concept of the tree, however the colors needed to be tweaked for the final product, as well as the overall aesthetic of the tree changed to match the CULC's in order for it to match. Thankfully these complaints are mostly about things that were decided on due to our constraint on time to produce this interim prototype, and were further explored in our next round of testing.
                  </p>
                </span>
              }
            />

            <ProjectSection title="Testing Round 2"
              content={
                <span>
                  <p>
                    After making revisions on our prototype, we then tested our prototype again, once more asking random passerbys in the library if they'd like to participate in a brief experiment. The process for this testing was a lot more structured than the first time:
                  </p>
                  <ol className="list">
                    <li>Users explore an empty Unity scene of the virtual library to get accustomed to controls</li>
                    <li>Users are assigned the task of finding a seat in the library without our tree</li>
                    <li>Users again try to find a seat, but this time with our tree in the simulation</li>
                    <li>Users are asked questions about their experience and of the simulation and about the physical model</li>
                  </ol>

                  <a href="http://philkt.me/The-Hive" target="_blank">
                  <img src={tree_v2} alt="newer version of tree" className="extend"/>
                  </a>
                  <p className="caption">A look at the updated model, click to play it!</p>
                </span>
              }
            />

            <ProjectSection title="Final Results"
              content={
                <span>
                  <div className="statistics">
                    <div className="statistic">
                      <h2 className="surveys">5</h2>
                      <p>students tested</p>
                    </div>
                    <div className="statistic">
                      <h3 className="interviews">50%</h3>
                      <p>reduction in search time</p>
                    </div>
                  </div>
                  <p>
                    We tested five students, and each student had a <b>reduction of at least 50% time in finding a seat</b> between the standard library model and the tree model. Seats weren't placed in the same location, but were on the same floors to try and keep times somewhat standard across tests. Students were also able to quickly discern the meaning behind the tree's colors and branches during their think-aloud.
                  </p>
                  <div className="button collapse" onClick={this.collapseResult}>
                    <a>{this.state.resultDetails ? "Less Results" : "More Results"}</a>
                  </div>
                  <Collapse isOpened={this.state.resultDetails} keepCollapsedContent={true}>
                  <div>
                    <p>We also received several design suggestions from our testers that could be implemented in a future model. Suggestions included that the Hive would not be able to display the seating towards the hallways of the library, which would leave out a smaller, but significant, portion of the total available seating. Some suggestions to extend functionality included the use of “flower” branches or “roots” intertwining with the overhead lights. For this prototype however, we decided to assist students in finding seats only in the main areas because those seats largely fit students’ needs that we gathered from interviews such as chairs with desks, outlets and tables. We also received several design suggestions aimed at displaying group seating, the most common was using granular light displays, which we couldn't do with our EL wire nor the Unity model due to time constraints.</p>

                    <p>
                      During our questionnaire we also had students flip through slides of two colors, asking them to mark one as "positive" and the other "negative", or that neither stood out. This was to help us determine what colors would work best to color the Hive. We ended up with a hierarchy like this:
                    </p>
                    <p>
                      <img src={colors} alt="green blue violet yellow orange red"/>
                    </p>
                    <p className="caption">From available to unavailable seating</p>

                    <p>
                      This scale informs us of a gradient system that could be implemented in order to have a more continuous display of availability instead of the current binary mode. Interestingly, the scale moves from colors that are generally seen as “cool” to those thought of as “warm,” meaning the idea of “availability” may just be a converse rating of activity.
                    </p>
                  </div>
                  </Collapse>
                </span>
              }
            />

            <ProjectSection title="Further Design Considerations"
              content={
                <span>
                  <p className="subheader">Test colors pairings to convey available or unavailable areas.</p>
                  <p>
                    For the physical prototypes we were limited to a certain set of colors that were available in the form of EL wires which were green and blue. After testing different colors on the 3D model and questionnaires, the pair of colors that seemed to communicate empty and full most clearly were green and red. Therefore, for future iterations we would need to test with different hues and lightness of the two colors to find a specific pair that are visible with sunlight as well not being intrusive for students studying or lacking accessibility.
                  </p>
                  <p className="subheader">Improve the way we communicate how full or empty the seating area is and provide more details about the seating.</p>
                  <p>
                    Information such as whether there is a table of four is available for group work or four individual seats available. Currently, we are communicating that information the same way on the tree, and students can only see that there is an open seat but not know if it is for an individual or a group. Our next iteration would immediately address this issue. We would test various ways of communicating this information by either brightness or pulsing light. This idea is one that will need extensive testing at a large scale to see if it could work in the CULC environment.
                  </p>
                  <p className="subheader">Work on a final architectural design of the tree.</p>
                  <p>
                    The largest design challenge that we had while working on this project was creating a sculpture that maintained a tree-like appearance with enough branches so that it did not seem empty while also having the required number of branches so that users did not get confused as to which branch was pointing to which area or floor. Therefore, a future design implication could be to create large main branches that point to the main seating areas and have smaller, minor branches to point towards smaller seating areas.
                  </p>
                </span>
              }
            />
          </span>
                   }/>
    )
  }

}

export default Hive;