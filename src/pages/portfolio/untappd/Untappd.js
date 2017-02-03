import React, { Component } from 'react';
import './Untappd.css';

import ProjectPage from '../../../components/project-page/ProjectPage';
import responses from '../../../media/untappd/survey/responses.png';
import usage from '../../../media/untappd/survey/usage.png';
import friends from '../../../media/untappd/survey/friends.png';
import venues from '../../../media/untappd/survey/venues.png';
import explore from '../../../media/untappd/survey/explore.png';

class Untappd extends Component {

  render() {

    return (
      <ProjectPage
        title="Untappd Redesign"
        content={
          <span>
            <h4>What is it?</h4>
            <p>
              A redesign of <a href="https://untappd.com" target="_blank">Untappd</a>, an app used by beer drinkers to log their beers and see what their friends are drinking.
            </p>
            <h4>Origins</h4>
            <p>
              I really like to use Untappd, a social networking app that is unique in that it focuses on beer drinkers. People can use Untappd to log their beers, add friends and see their beers, and view ratings of beers from other users of the app. However, although Untappd is a pretty popular app among beer fans, the design of the app leaves somewhat to be desired. However, to be sure I was not just basing this off of my own beliefs, I first started conducting some research to inform my potential redesign and to find out what people use Untappd for.
            </p>
            <h4>Research</h4>
            <p>
              My research consisted of creating and sending out a survey to get an idea of what features of Untappd people use, and what their primary usage of Untappd consists of. I chose to do a survey as I don't really have many real life friends who use Untappd so I didn't have many people to reach out to. I spent a few nights crafting a Qualtrics survey to send out, and after I felt it was finished I posted it to <a href="https://reddit.com/r/beer" target="_blank">the beer subreddit</a>, hoping to get a couple of responses:
            </p>
            <img src={responses} alt="247 responses"/>
            <p>
              <b>I was floored.</b> This was more survey responses than I've ever handled before. I never expected to get this much information from reddit users, and am very thankful for their participation. With all these responses I could start to analyze my results confidently and trust the insights I gained.
            </p>
            <h4>Results</h4>
            <p>
              All of my survey was multiple choice so that I would not waste users time and could hopefully convince more of them to finish. I focused on asking about whether people used certain parts of the app I did leave certain options open to write in answers, as well as left a general feedback section for those who wanted it. (44 out of the 257 did!)
            </p>
            <p>
              Out of all the users surveyed, here's the breakdown of how they primarily use the app:
            </p>
            <img src={usage} alt="usage statistics" />

            <p>As is evident, most (87%) users of Untappd use the app as a personal beer log. However, one of the interesting insights is that double the people actually use the app to check a beer's rating than check what their friends are drinking (8% versus 4%). Interesting for an app that is supposed to be a social network.</p>

            <p>
              To further reinforce that point of a lack of social interaction, here's the responses for the question <b>how many friends do you have on Untappd?</b>
            </p>
            <img src={friends} alt="friends on untappd" />
            <p>As you can see, most users of Untappd only have up to 30 friends on Untappd (89%). In fact, 60% of the people surveyed only have around 1 to 10 friends! This is an astoundingly small number for a social networking app, and reinforces the idea that most people on Untappd keep to themselves.</p>

            <p>
              Although users don't seem to be all that interested in interacting with each other, <b>about half of them are following venues:</b>
            </p>
            <img src={venues} alt="following venues"/>
            <p>
              With this we see an interesting trend, that although users don't really want to interact with each other all that much, they are interested in interacting with a venue, which can include bars, breweries, restaurants, and beer stores. Most users said they were doing so in order to get updates from their beer list so they knew when they should go check out a new beer, either from a local place or from a brewery. Untappd users are very keen on keeping up to date on beers and tracking them, other survey questions revealed that of the 44% of users who add beers to their wishlist on Untappd, 73% are doing so to keep reminders on beers they'd like to try. Untappd users are also focused on badges, which they receive from drinking certain beers or performing certain actions in the app, one user explicitly said they added a beer to their wishlist "for the badge."
            </p>
            <p>
              Finally, my last set of questions involved the Explore tab of Untappd, due to the relative popularity the Explore tab in Instagram has been enjoying and driving discovery of users, I was wondering how Untappd's fared:
            </p>
            <img src={explore} alt="explore results"/>

            <p>
              In two words: not well. 75% of users rarely or never use it, and <b>out of all surveyed 22% did not even know the Explore tab existed. </b> This can explain why a lot of users do not have friends or do not socially interact with others all that much, most users aren't exploring the content on Untappd beyond what they or their friends create. Untappd boasts 5 million users according to Wikipedia, and most of that content is going undiscovered.
            </p>

            <p className="list">To summarize the data gained from this survey:</p>
            <ul>
              <li>74% of users use the app at least once a week</li>
              <li>87% use it primarily as a beer log</li>
              <li>More people (8%) use it to check beer ratings than check up on their friends (4%)</li>
              <li>89% only have up to 30 friends, 60% between 1-10</li>
              <li>48% of users follow venues, and mostly (78%) for beer menu updates</li>
              <li>44% of users also add beers to their wishlist, to keep reminders on beers to try (73%)</li>
              <li>One user did it “for the badge”</li>
              <li>1% use the explore tab always, 75% rarely or never use it, 22% were even unaware it existed!</li>
              <li>Those who do use it, 42% are looking for nearby venues and their beers, or other beer related things such as nearby beers or breweries</li>
            </ul>

            <h4>Insights</h4>
            <p>Based on these results, I concluded the following about Untappd and its users:</p>

            <b>People are posting, but nobody is listening</b>

            <p>
              Untappd is in a unique position as a social network as most people are creating content on their app instead of consuming it. This runs against the common <a href="https://en.wikipedia.org/wiki/1%25_rule_(Internet_culture)" target="_blank">1% rule</a> of Internet communities, which states "only 1% of the users of a website actively create new content, while the other 99% of the participants only lurk." It also goes against the <a href="https://en.wikipedia.org/wiki/Pareto_principle" target="_blank">Parento Principles</a>, which states that 20% of a group creates 80% of the content.
            </p>

            <b>Untappd isn't truly a "social" network</b>
            <p>
              Most users on Untappd use it simply as a beer log, and don't participate in the larger ecosystem. Responders left comments such as "social aspect is lacking" and "it would be nice to be able to message others". A social network that doesn't allow its users to message each other seems pretty boggling doesn't it? Untappd has a lot of potential to promote social interaction between its users however, and beer drinkers are not opposed to talking to each other: r/beer has an estimated 200,000 subscribers.
            </p>

            <b>The Explore tab has a lot of potential</b>
            <p>
              Most users don't use the Explore tab or don't even know it exists, but with all the content available on Untappd it could really be useful to people. Users could discover new breweries, new beers, or other users who share their tastes, all of this driving social interaction within the app. Right now the Explore tab is merely a list of options presented to the user and is not all that visually interesting or curated, but with the right touch could lead users to be more active on Untappd instead of just logging a beer and leaving.
            </p>
            <p>
              These insights provided a great guide into what to incorporate on my redesign of Untappd to make it more social and to help foster a community on Untappd.
            </p>
            <h4>Redesign - In Progress</h4>
            <p>
              I'm currently drawing wireframes and pushing pixels to devise a redesign Untappd to show to the world. Check back here soon!
            </p>
          </span>
        }
      />
    );
  }
}

export default Untappd;
