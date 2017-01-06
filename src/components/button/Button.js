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


  render () {
    return (
      <div className="button">
        <Link to={this.props.link}>
          {this.props.content}
        </Link>
      </div>
    )
  }
}

export default Button;