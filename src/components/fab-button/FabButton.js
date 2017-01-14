import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import './FabButton.css';

import Projects from '../projects/Projects';

class FabButton extends Component {

  constructor(props) {
    super(props);
    const proj = new Projects();

    this.state = {
      menuVisible: false,
      nextProject: proj.getNextProject(this.props.currentPage),
      prevProject: proj.getPrevProject(this.props.currentPage)
    };
  }

  static propTypes = {
    currentPage: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    currentPage: undefined,
  }

  goHome = (e) => {
    browserHistory.push('/')
  };

  goNext = (e) => {
    browserHistory.push(this.state.nextProject.link);
  };

  goPrev = (e) => {
    browserHistory.push(this.state.prevProject.link);
  }

  showMenu = (e) => {
    this.setState({
      menuVisible: true
    })
  };

  hideMenu = (e) => {
    this.setState({
      menuVisible: false
    })
  };

  render () {

    return (
      <div className="fab-menu" onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>
        <div className={"fab-list " + (this.state.menuVisible ? "show" : "")}>
          <div className="fab-sub">
            <span className="label">Home</span>
            <i className="material-icons" onClick={this.goHome}>home</i>
          </div>
          <div className="fab-sub back">
            <span className="label">{this.state.prevProject.name}</span>
            <i className="material-icons" onClick={this.goPrev}>arrow_backward</i>
          </div>
          <div className="fab-sub">
            <span className="label">{this.state.nextProject.name}</span>
            <i className="material-icons" onClick={this.goNext}>arrow_forward</i>
          </div>

        </div>
        <div className={"fab-main " + (this.state.menuVisible ? "fab-main-active" : "")} onClick={this.showMenu} >
          <span><i className="material-icons">explore</i></span>
        </div>
      </div>
    )
  }

}

export default FabButton;