import React, {Component} from 'react';
import './MiscProject.css';
import Button from '../button/Button';

class MiscProject extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    description: React.PropTypes.object.isRequired,
    badge: React.PropTypes.string.isRequired,
    preview: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
    title: undefined,
    description: undefined,
    badge: undefined,
    preview: undefined,
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
      <div className={"misc-project " + this.props.title}>
        <div className="header">
          <img src={this.props.badge} alt={this.props.title} className="badge" width="40px"/>
          <h2>{this.props.title}</h2>
        </div>
        <div className="preview">
          {this.props.preview}
        </div>
        <div className="description">
          {this.props.description}
        </div>
        <div className="buttons">
          {linksList}
        </div>
      </div>
    )
  }
}

export default MiscProject;