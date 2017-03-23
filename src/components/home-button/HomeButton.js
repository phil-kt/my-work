import React, {Component} from 'react';
import {Link} from 'react-router';
import './HomeButton.css';

import home from '../../media/home/im_so_computers.png';

class HomeButton extends Component {

    render () {
        return(
            <Link to="/">
                <img className="home-btn" src={home} alt="home" width="30"/>
            </Link>
        )
    }
}

export default HomeButton;