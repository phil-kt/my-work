import React, { Component } from 'react';
import './Project.css';

class Project extends Component {


  static propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.object.isRequired,
    github: React.PropTypes.string,
    devpost: React.PropTypes.string,
    prototype: React.PropTypes.string,
    customLinks: React.PropTypes.array,
  }

  static defaultProps = {
    title: undefined,
    content: undefined,
    github: undefined,
    devpost: undefined,
    prototype: undefined,
    customLinks: [],
  }


  render () {
    return (
      <div className={"project " + this.props.title}>
        <div className="left">
          <h2>{this.props.title}</h2>
          <p>{this.props.description}</p>
          <button>EXPLORE</button>
        </div>
      </div>
    )
  }
}

export default Project;