import React, { Component } from 'react';
import './NotFound.css';

import Button from '../../components/button/Button';
import squidward from '../../media/squidward.gif';

class Dots extends Component {

  render() {
    return (
      <div className="not-found">
        <div>
          <img src={squidward} alt="fuuuuutuurrree" width="420px"/>
          <div>
            <h2>Oops, couldn't find that!</h2>
            <Button content="Go Home" link="/"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dots;
