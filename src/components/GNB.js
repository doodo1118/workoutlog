import React, {useState} from 'react';

import {faCogs, faRunning, faBookmark, faHome} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom';


function GNB(props){
    const { isLoggedIn, userId } = props;

    return(
        <div className="menu__gnb">
            <NavLink exact to="/">
                <div className="home">
                    <FontAwesomeIcon icon={faHome}/>
                </div>
            </NavLink>
            <NavLink exact to="/exercise">
                <div className="bookRunning">
                    <FontAwesomeIcon icon={faRunning}/>
                </div>
            </NavLink>
            <NavLink exact to="/bookMark">
                <div className="bookMark">
                    <FontAwesomeIcon icon={faBookmark}/>
                </div>
            </NavLink>
            <NavLink exact to="/settings">
                <div className="settings">
                    <FontAwesomeIcon icon={faCogs}/>
                </div>
            </NavLink>
            {isLoggedIn&&
            <NavLink exact to={`/${userId}`}>
                <div className="myPage">
                    mypage
                </div>
            </NavLink>}
            {!isLoggedIn&&
            <NavLink exact to="/signin">
                <div className="signIn">
                    login
                </div>
            </NavLink>}
        </div>
    )
}

export default GNB;