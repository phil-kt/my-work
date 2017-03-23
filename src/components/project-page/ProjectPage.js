import React, {Component} from 'react';
import './ProjectPage.css';

import Button from '../button/Button';
import FabButton from '../fab-button/FabButton';
import ProjectSection from '../project-section/ProjectSection';
import Project from '../project/Project';
import Projects from '../projects/Projects';
import HomeButton from '../home-button/HomeButton';

class ProjectPage extends Component {

  constructor(props) {

    super(props);

    const proj = new Projects();

    this.state = {
      nextProject: proj.getNextProject(this.props.title),
    };
  }

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    content: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
    title: undefined,
    description: undefined,
    content: undefined,
    github: undefined,
    devpost: undefined,
    prototype: undefined,
    customLinks: []
  }

  render () {

    let linksList = this.props.customLinks.map(function(link, index){
      return (
        <Button
          content={link.name}
          link={link.link}
          key={index}
        />
      );
    });

    return (
      <div className={"project-page " + this.props.title}>
        <div className="header">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          {/*

           */}
        </div>
        <div className="hero"></div>
        <div className="content">
          {this.props.content}
        </div>

        {linksList.length || this.props.github || this.props.devpost || this.props.prototype ?
          <ProjectSection title="Links"
            content={
              <p className="links">
                {this.props.github ?
                  <Button
                    content="github"
                    link={this.props.github}
                  />
                  : null
                }

                {this.props.devpost ?
                  <Button
                    content="devpost"
                    link={this.props.devpost}
                  />
                  : null
                }

                {this.props.prototype ?
                  <Button
                    content="prototype"
                    link={this.props.prototype}
                  />
                  : null
                }

                {linksList}
              </p>
            }
          /> :
          null
        }

        <HomeButton/>

        <FabButton currentPage={this.props.title}/>

        <h4 className="next-up">Up Next:</h4>


        <Project title={this.state.nextProject.name} description={this.state.nextProject.description} link={this.state.nextProject.link} image={this.state.nextProject.image} tags={this.state.nextProject.tags} iPhone={this.state.nextProject.iPhone}/>

      </div>
    )
  }

}

export default ProjectPage;