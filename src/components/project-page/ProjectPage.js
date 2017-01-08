import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import './ProjectPage.css';

import Button from '../button/Button';

class ProjectPage extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
    title: undefined,
    content: undefined,
    github: undefined,
    devpost: undefined,
    prototype: undefined,
    customLinks: []
  }

  goHome () {
    console.log("home");
    browserHistory.push('/');
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
          <div className="links">
            {this.props.github ?
              <Button
                content="code"
                link={this.props.github}
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

          </div>
        </div>
        <div className="content">
          {this.props.content}
        </div>

      </div>
    )
  }

}

export default ProjectPage;