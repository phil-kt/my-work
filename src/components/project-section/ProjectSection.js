import React, {Component} from 'react';
import './ProjectSection.css';

class ProjectSection extends Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
    title: undefined,
    content: undefined,
  }

  render () {


    return (
      <section className="project-section">
        <h4>{this.props.title}</h4>
        <span className="section-content">
          {this.props.content}
        </span>
      </section>
    )
  }

}

export default ProjectSection;