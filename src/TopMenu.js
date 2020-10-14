import React, { Component } from 'react';
import './App.css';
import Logo from './images/xena_logo.png';


class TopMenu extends Component {


    render() {
        return (
        <div className = 'app__header'>
            <img className = 'app_headerImage' src = {Logo} alt = 'XENA' />
            <div className = 'app__login'>
                <input id = 'textEmail' type = "email" placeholder = "Email" />
                <input id = 'textPassword' type = "password" placeholder = "Password" />
                <button id = "btnLogin">
                    Log In
                </button>
                <button id = "btnSignup">
                    Sign Up
                </button>
                <button id = "btnLogout">
                    Log Out
                </button>
            </div>
            
          </div>
        );
    }
}

export default TopMenu;