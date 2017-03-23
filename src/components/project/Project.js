import React, { Component } from 'react';
import Button from '../button/Button';
import './Project.css';

class Project extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    tags: React.PropTypes.string.isRequired,
    iPhone: React.PropTypes.bool
  }

  static defaultProps = {
    title: undefined,
    description: undefined,
    link: undefined,
    image: undefined,
    tags: undefined,
    iPhone: false
  }

  render () {
    return (
      <div className={"project " + this.props.title}>
        <div className="preview-content">
          <div className="left">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
            <Button content="read more" link={this.props.link} />
          </div>
          <div className={ this.props.iPhone ? "right iphone" : "right"}>
            <img src={this.props.image} alt={this.props.title + " preview"}/>
          </div>
        </div>
        <p className="tag">{this.props.tags}</p>
      </div>
    )
  }
}

export default Project;