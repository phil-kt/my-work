import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import './FabButton.css';

class FabButton extends Component {


  goHome = (e) => {
    browserHistory.push('/')
  }

  render () {

    return (
      <div className="fab-menu">
        <div className="fab-main" onClick={this.goHome}>
          <span><i className="material-icons">home</i></span>
        </div>
      </div>
    )
  }

}

export default FabButton;