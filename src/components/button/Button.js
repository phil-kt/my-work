import React, { Component } from 'react';
import {Link} from 'react-router';
import './Button.css';

class Button extends Component {


  static propTypes = {
    content: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    content: undefined,
    link: undefined
  }

  isLinkInternal () {
    if(this.props.link.indexOf("://")=== -1)
      return true;

    return window.location.host === this.props.link.host;
  }


  render () {
    return (
      <div className="button">
        {this.isLinkInternal() ?
          <Link to={this.props.link}>
            {this.props.content}
          </Link> :
          <a href={this.props.link} target="_blank">
            {this.props.content}
          </a>
        }
      </div>
    )
  }
}

export default Button;