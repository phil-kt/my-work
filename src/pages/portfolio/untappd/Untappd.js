import React, { Component } from 'react';
import Slider from 'react-slick';
import Collapse from 'react-collapse';
import './Untappd.css';

import ProjectPage from '../../../components/project-page/ProjectPage';
import ProjectSection from '../../../components/project-section/ProjectSection';
import responses from '../../../media/untappd/survey/responses.png';
import usage from '../../../media/untappd/survey/usage.png';
import friends from '../../../media/untappd/survey/friends.png';
import venues from '../../../media/untappd/survey/venues.png';
import explore from '../../../media/untappd/survey/explore.png';
import concept from '../../../media/untappd/lofi/lofi_concept.png';
import ia from '../../../media/untappd/lofi/lofi_ia.png';
import current_untappd from '../../../media/untappd/designs/current_untappd.png';
import new_untappd from '../../../media/untappd/designs/new_untappd.png';
import home_comp from '../../../media/untappd/designs/home_vs.png';
import cards from '../../../media/untappd/designs/cards.png';
import explore_comp from '../../../media/untappd/designs/explore_vs.png'
import messages from '../../../media/untappd/designs/messages.png';
import profile_comp from '../../../media/untappd/designs/profile_vs.png';

class Untappd extends Component {

  state = {
    surveyDetails: false,
    mockupDetails: false
  };

  collapseSurvey = () => {
    this.setState({
      surveyDetails: !this.state.surveyDetails
    })
  }

  collapseMocks = () => {
    this.setState({
      mockupDetails: !this.state.mockupDetails
    })
  };


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
        title="Untappd Redesign"
        description="A material redesign of Untappd, an app used by beer fans to log their beers and see what their friends are drinking"
        customLinks={[
            {
                name: "Prototype",
                link: "https://framer.cloud/YzLIl"
            },
        ]}
        content={
          <span>

            <ProjectSection title="Background"
              content={
                <p>
                  I really like to use Untappd, a social networking app that is unique in that it focuses on beer drinkers. People can use Untappd to log their beers, add friends and see their beers, and view ratings of beers from other users of the app. Although Untappd is a pretty popular app among beer fans, the design of the app leaves somewhat to be desired. However, to be sure I was not just basing this off of my own beliefs, I started conducting some research to inform my redesign and to find out what people really use Untappd for.
                </p>
              }
            />

            <ProjectSection title="Research"
              content={
                <span>
                  <p>
                    My research consisted of creating and sending out a survey to get an idea of what features of Untappd people use and what their primary usage of Untappd consists of. I chose to do a survey as I don't really have many real life friends who use Untappd, so I didn't have many people to reach out to. I spent a few nights crafting a Qualtrics survey to send out, and after I felt it was finished I posted it to <a href="https://reddit.com/r/beer" target="_blank">the beer subreddit</a>, hoping to get a couple of responses:
                  </p>
                  <img className="extend" src={responses} alt="247 responses"/>
                  <p>
                  <b>I was floored.</b> This was more survey responses than I've ever handled before. I never expected to get this much information from reddit users, and am very thankful for their participation. With all these responses I could start to analyze my results confidently and trust the insights I gained.
                  </p>
                </span>
              }
            />

            <ProjectSection title="Results"
              content={
                <span>
                  <p>
                    All of my survey was multiple choice so that I would not waste users time and could hopefully convince more of them to finish. I focused on asking about whether people used certain parts of the app. I did leave certain options open to write in answers, as well as left a general feedback section for those who wanted it. (44 out of the 257 did!)
                  </p>
                  <p className="before-list">As a brief summary of the data gained from this survey:</p>
                  <ul className="list">
                    <li>74% of users use the app at least once a week</li>
                    <li>87% use it primarily as a beer log</li>
                    <li>More people (8%) use Untappd to check beer ratings than check up on their friends (4%)</li>
                    <li>89% only have up to 30 friends, 60% between 1-10</li>
                    <li>48% of users follow venues, and mostly (78%) for beer menu updates</li>
                    <li>44% of users also add beers to their wishlist, to keep reminders on beers to try (73%)</li>
                    <li>One user wishlisted a beer “for the badge”</li>
                    <li>1% use the Explore tab always, 75% rarely or never use it, 22% were even unaware it existed!</li>
                    <li>Of those who do use Explore, 42% are looking for nearby venues and their beers or other beer related things such as nearby beers or breweries</li>
                  </ul>
                   <div className="button collapse" onClick={this.collapseSurvey}>
                    <a>{this.state.surveyDetails ? "Hide Data" : "Show Data"}</a>
                  </div>
                  <Collapse isOpened={this.state.surveyDetails} keepCollapsedContent={true}>
                  <div>
                  <p>
                    Out of all the users surveyed, here's the stats of how they primarily use the app:
                  </p>
                  <img className="stats" src={usage} alt="usage statistics" />

                  <p>As is evident, most (87%) users of Untappd use the app as a personal beer log. However, one of the interesting insights is that double the people actually use the app to check a beer's rating than check what their friends are drinking (8% versus 4%). Interesting for an app that is supposed to be a social network.</p>

                  <p>
                    To further reinforce that point of a lack of social interaction, here's the responses for the question <b>how many friends do you have on Untappd?</b>
                  </p>
                  <img className="stats" src={friends} alt="friends on untappd" />
                  <p>As you can see, most users of Untappd only have up to 30 friends on Untappd (89%). In fact, 60% of the people surveyed only have around 1 to 10 friends! This is an astoundingly small number for a social networking app, and reinforces the idea that most people on Untappd keep to themselves.</p>

                  <p>
                    Although users don't seem to be all that interested in interacting with each other, <b>about half of them are following venues:</b>
                  </p>
                  <img className="stats" src={venues} alt="following venues"/>
                  <p>
                    With this we see an interesting trend, that although users don't really want to interact with each other all that much, they are interested in interacting with a venue, which can include bars, breweries, restaurants, and beer stores. Most users said they were doing so in order to get updates from their beer list so they knew when they should go check out a new beer, either from a local place or from a brewery. Untappd users are very keen on keeping up to date on beers and tracking them, other survey questions revealed that of the 44% of users who add beers to their wishlist on Untappd, 73% are doing so to keep reminders on beers they'd like to try. Untappd users are also focused on badges, which they receive from drinking certain beers or performing certain actions in the app, one user explicitly said they added a beer to their wishlist "for the badge."
                  </p>
                  <p>
                    Finally, my last set of questions involved the Explore tab of Untappd, due to the relative popularity the Explore tab in Instagram has been enjoying and driving discovery of users, I was wondering how Untappd's fared:
                  </p>
                  <img className="stats" src={explore} alt="explore results"/>

                  <p>
                    In two words: not well. 75% of users rarely or never use it, and <b>out of all surveyed 22% did not even know the Explore tab existed. </b> This can explain why a lot of users do not have friends or do not socially interact with others all that much, most users aren't exploring the content on Untappd beyond what they or their friends create. Untappd boasts 5 million users according to Wikipedia, and most of that content is going undiscovered.
                  </p>
                  </div>
                  </Collapse>
                </span>

              }
            />

            <ProjectSection title="Insights"
              content={
                <span>
                  <p>Based on these results, I concluded the following about Untappd and its users:</p>

                  <p className="subheader">People are posting, but nobody is listening</p>

                  <p>
                    Untappd is in a unique position as a social network as most people are creating content on their app instead of consuming it. This runs against the common <a href="https://en.wikipedia.org/wiki/1%25_rule_(Internet_culture)" target="_blank">1% rule</a> of Internet communities, which states "only 1% of the users of a website actively create new content, while the other 99% of the participants only lurk." It also goes against the <a href="https://en.wikipedia.org/wiki/Pareto_principle" target="_blank">Parento Principles</a>, which states that 20% of a group creates 80% of the content.
                  </p>

                  <p className="subheader">Untappd isn't truly a "social" network</p>
                  <p>
                    Users of Untappd consistently use it simply as a beer log, and don't participate in the larger ecosystem. Responders left comments such as "social aspect is lacking" and "it would be nice to be able to message others". A social network that doesn't allow its users to message each other seems pretty boggling doesn't it? Untappd has a lot of potential to promote social interaction between its users however, and beer drinkers are not opposed to talking to each other: r/beer has an estimated 200,000 subscribers.
                  </p>

                  <p className="subheader">The Explore tab has a lot of potential</p>
                  <p>
                    Most users don't use the Explore tab or don't even know it exists, but with all the content available on Untappd it could really be useful to people. Users could discover new breweries, new beers, or other users who share their tastes, all of this driving social interaction within the app. Right now the Explore tab is merely a list of options presented to the user and is not all that visually interesting or curated, but with the right touch could lead users to be more active on Untappd instead of just logging a beer and leaving.
                  </p>
                  <p>
                    These insights provided a great guide into what to incorporate on my redesign of Untappd to make it more social and to help foster a community on Untappd.
                  </p>
                </span>
              }
            />

            <ProjectSection title="Brainstorming"
              content={
                <span>
                  <p>
                  I began by drawing out some concepts onto my sketchbook based on the insights I gained. One thing I knew for sure was that I wanted to <b>redesign the Explore tab</b>, in order to foster more community involvement. I also wanted to <b>introduce a new Messaging feature to the app</b> to encourage users to talk to one another and foster dialogue about beer.
                  </p>
                  <Slider {...sliderSettings}>
                  <div>
                  <img src={concept} alt="drawing out concepts"/>
                  <p className="caption">Sketches on how to design the four new tabs</p>
                  </div>
                  <div>
                  <img src={ia} alt="info arch"/>
                  <p className="caption">Some notes from the information architecture breakdown</p>
                  </div>
                  </Slider>
                  <p>I eventually settled on reducing the number of tabs to four and making those tabs Home, Explore, Messaging, and Profile. I eliminated the Friends tab, as a user rarely looks at their friends list and it pretty much existed solely to accept friend request. Users can instead interact with friends from the new Messages tab, and accept friend requests from their notifications. I also drew up some sketches of how a new Explore tab might look, and refined it further while designing in Sketch. I also went through several key tabs and made note of the information architecture, to get an idea of what information the app would still need to convey amongst the four tabs and how the information hierarchy is currently organized.</p>
                </span>
              }
            />

            <ProjectSection title="Designs"
              content={
                <span>
                  <p>
                   So before I go into detail I imagine you'd like to see the original Untappd versus my version:
                  </p>

                  <p className="subheader">Old Untappd</p>
                  <img src={current_untappd} alt="the current home screen of untappd" className="extend"/>
                  <p className="subheader">My Untappd</p>
                  <img src={new_untappd} alt="the new designs" className="extend"/>
                  <p>
                    As you can see, I decreased the number of tabs from 5 to 4, and also introduced the Messages tab mentioned before. I cut the Friends and Notifications tabs, and moved that information to different locations (Notifications to the status bar, Friends to your profile). I also introduced a floating action button to make it easier and more intuitive to check in, as the current design requires you to hit the search button in the corner to initiate a check-in, when it really should be obvious and easily accessible, since it is the primary focus for people using the app. Now let's go through screen by screen the design decisions:
                  </p>

                  <p className="subheader">Home</p>
                  <p>
                  <img src={home_comp} alt="the two home designs"/>
                  </p>
                  <p>
                    I kept most of the elements of the home screen the same. I simply moved around some visual elements, but all of the information is still present one way or another. The most glaring omission is the removal of the "Friends, Nearby, Groups" tab. I moved the content of Nearby to the Explore tab, since I felt it more in the spirit of exploring what is going on around you, and removed the Groups tab as most users in the research did not even know it existed, or what it did.
                  </p>
                  <p>Also for the home screen, the use of cards is important as they contain a single post and have a variety of posts. I decided to eliminate the margins on the cards as it felt like it was constraining the app vertically with no real benefit, and allowed more space on the card. I darkened the text on reviews, as your friends comments on a beer are really the most important part of a post, and moved the number of toasts and comment information into the card instead of having it hover underneath. I also added a star in the right corner to wishlist a beer that a friend commented on so you can easily keep tabs on beers you'd like to try.
                  </p>

                  <img src={cards} alt="all the card states" className="extend"/>
                  <p className="caption">All possible card states</p>

                  <p className="subheader">Explore</p>
                  <p>
                  <img src={explore_comp} alt="explore comparisons"/>
                  </p>
                  <p>
                    The Explore tab is the screen with the most work done to it. Instead of having a long list of clickable items, I instead choose to show some items in the list, and give the user the option to see more. I also introduced a similar users category so that you can find people who like the same beers you do outside of your friend circle and start using Untappd more socially. Also I decided to introduce a bottom tab to allow you to toggle between nearby and global instead of having them be two different list items, simply tap to see the global popular beers or people.
                  </p>

                  <p className="subheader">Messages</p>
                  <p>
                    <img src={messages} alt="messages screen"/>
                  </p>
                  <p>
                    The Messages screen is obviously an original invention, and serves to make it so you can interact with your friends on Untappd in a more meaningful manner that just comments. Introduce yourself to fellow beer fans nationwide, organize beer trades, set up a bar crawl, all of these are potential applications of talking with other Untappd fans within the app. In addition you can from a glance see some of your friends who have recently had a drink, and message them about it or click the beer to see its details. This helps foster discussion between beer fans and creates a sense of community, which Untappd lacks.
                  </p>
                  <p className="subheader">Profile</p>
                  <p>
                    <img src={profile_comp} alt="profile comparison"/>
                  </p>
                  <p>
                    For this screen I aimed to reduce the list on the screen to more compact and visual representations. Beer list and badges are already accessible by clicking the number, so no need for them to be doubly listed, and subscriptions can be folded into the beer and venue screen themselves instead of having a dedicated list item. Users can also see the number of friends on their profile to reinforce Untappd's role as a social network, but not overtly so as the main focus of the app is still beer so those stats feature most prominently.
                  </p>
                  <p>
                    Below the fold on the current app design is the list of your check-ins, so I decided to move that up and condense the information in the profile card. Now a user can simply tab between their check-ins, photos, and what they've toasted to get a good sense of their or others' activity.
                  </p>

                </span>
              }
            />

            {
            <ProjectSection title="Prototype"
              content={
                <p>
                  <iframe className="framer-embed" src="https://framer.cloud/YzLIl" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
                </p>
              }
            />
            }

            <ProjectSection title="Conclusion"
              content={
                <span>
                  <p>This little personal project helped me practice how to effectively design surveys and how to analyze survey results for powerful insights. These insights then allowed me to better develop my skills in turning research data into detailed mockups that seek to address the problems research discovered.</p>
                  <p>
                    Funnily enough, while I was working on this project Untappd ended up launching <a href="http://blog.untappd.com/post/157278795406/untappd-30" target="_blank">a new, 3.0 redesign.</a> I guess they realized some of the problems and sought to address them, but I feel like this redesign falls short for other reasons. A tale for another time.
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

export default Untappd;
