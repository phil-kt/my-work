import React, {Component} from 'react';
import './ProjectPage.css';

import Button from '../button/Button';
import FabButton from '../fab-button/FabButton';
import ProjectSection from '../project-section/ProjectSection'

class ProjectPage extends Component {

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
        />

        <FabButton currentPage={this.props.title}/>

      </div>
    )
  }

}

export default ProjectPage;