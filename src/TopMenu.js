import React, { Component } from 'react';
import './App.css';
import Logo from './images/xena_logo.png';


class TopMenu extends Component {


    render() {
        return (
        <div className = 'app__header'>
            <img className = 'app_headerImage' src = {Logo} alt = 'XENA' />
            <div className = 'app__login'>Login Here</div>
          </div>
        );
    }
}

export default TopMenu;