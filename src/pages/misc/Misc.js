import React, { Component } from 'react';
import './Misc.css';

import MiscProject from '../../components/misc-project/MiscProject';
import FabButton from '../../components/fab-button/FabButton';
import Project from '../../components/project/Project';
import Projects from '../../components/projects/Projects';
import HomeButton from '../../components/home-button/HomeButton';

import tachiyomi from '../../media/misc/tachiyomi/tachiyomi.png';
import tachiyomi_flow from '../../media/misc/tachiyomi/tachiyomi-flow.png';
import roam from '../../media/misc/roam/roam.png';
import stokr from '../../media/misc/stokr/stokr.svg';
import dots from '../../media/home/dots.svg';
import ai from '../../media/misc/ai/ai.png';
import ai_prev from '../../media/misc/ai/elsie.png';
import rendezvous from '../../media/misc/rendezvous.png';


class Misc extends Component {

  constructor(props) {
    super(props);

    const proj = new Projects();

    this.state = {
      project: proj.getNextProject("Miscellaneous")
    }
  }

  render() {
    return (
      <div className="misc">
        <div className="content">
          <MiscProject title="Tachiyomi"
                     description={
                       <p>A manga reading app for Android with over 35,000 installs, I help with the design work on this open source viewer. My work includes the logo, the name, and the overall UI/UX decisions.</p>
                     }
                     badge={tachiyomi}
                     preview={
                       <img src={tachiyomi_flow} alt={"tachiyomi wireframes"} />
                     }
                     customLinks={[
                       {
                         name: "github",
                         link: "https://github.com/inorichi/tachiyomi"
                       }
                     ]}/>

          <MiscProject title="Dots" description={
                        <p>
                          An art video I made in After Effects for an undergraduate art class. It was inspired by Google's new branding and was bought by Stony Brook University’s president.
                        </p>
                      }
                       badge={dots}
                       preview={
                         <div className="aspect-keeper">
                           <iframe src="https://www.youtube.com/embed/I1TvCtP7g0s" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                         </div>
                       }

                       customLinks={[
                         {
                           name: "youtube",
                           link: "https://www.youtube.com/watch?v=I1TvCtP7g0s"
                         }]
                       }
                      />

          <MiscProject title="Roam"
                       description={
                         <p>An Android app that allows you to use data services without having mobile data. <a href="http://hackny.org/2015/09/fall-2015-hackny-student-hackathon-recap/">Winner of the hackny Fall 2015 hackathon.</a></p>
                       }
                       badge={roam}
                       preview={
                         <iframe src="https://marvelapp.com/235a4ad?emb=1" width="260" height="504" allowTransparency="true" frameBorder="0"></iframe>
                       }
                       customLinks={[
                         {
                           name: "github",
                           link: "https://github.com/sayalvarun/Roam"
                         },
                         {
                           name: "devpost",
                           link: "https://devpost.com/software/roam-yno5mc"
                         },
                       ]}/>
          <MiscProject title="Stokr"
                       description={
                         <p>A macOS app which allows you to play Windows exclusive games by fooling Steam into thinking you and an Amazon server are on the same network. <a href="https://devpost.com/software/stokr">Winner of Hack the North's 2015 hackathon.</a></p>
                       }
                       badge={stokr}
                       preview={
                         <div className="aspect-keeper">
                           <iframe src="https://www.youtube.com/embed/16_f5k4m4UE" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                         </div>
                       }
                       customLinks={[
                         {
                           name: "github",
                           link: "https://github.com/linkcable/stokr"
                         },
                         {
                           name: "website",
                           link: "http://philkt.me/stokr"
                         },
                       ]}/>

          <MiscProject title="Rendezvous"
                       description={
                         <p>An iOS app to help you find your friends in crowded places or, if left in the background, to encourage spontaneous meetings with your friends. <a href="https://devpost.com/software/rendezvous-fsu7xd">Created for PennApps XII.</a></p>
                       }
                       badge={rendezvous}
                       preview={
                         <p>
                         <iframe className="framer-embed" src="https://framer.cloud/GrnUD" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                         </p>
                       }
                       customLinks={[
                         {
                           name: "github",
                           link: "https://github.com/LinkCable/rendezvous"
                         }
                       ]}/>

          <MiscProject title="Ai.exe"
                       description={
                         <p>A visual novel where you can date personifications of Internet Explorer, Chrome, and Firefox. Which browser is best girl?</p>
                       }
                       badge={ai}
                       preview={
                         <img src={ai_prev} alt={"tachiyomi wireframes"} />
                       }
                       customLinks={[
                         {
                           name: "github",
                           link: "https://github.com/linkcable/Ai.exe"
                         },
                         {
                           name: "download",
                           link: "https://github.com/LinkCable/Ai.exe/releases"
                         }
                       ]}
                      />
        </div>


        <HomeButton/>

        <FabButton currentPage="Miscellaneous"/>

        <h4 className="next-up">Up Next:</h4>


        <Project title={this.state.project.name} description={this.state.project.description} link={this.state.project.link} image={this.state.project.image} tags={this.state.project.tags} iPhone={this.state.project.iPhone}/>


      </div>
    )
  }

}

export default Misc;