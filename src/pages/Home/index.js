import React, {useState} from 'react';

import {faCheck, faBookmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import GNB from '../components/GNB';
import routineItem from './components/RoutineItem';

function Home(){
    const [navigationBar, setNavigationBar] = useState('lnb');
    function getContents(){
        
    }
    return(
        <div className="home">
            <div className="header">
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <div className="search__autoComplete"></div>
                </div>
            </div>
            <div className="contents">
                <div className="section">
                    {/* routineItem */}
                    

                    {/* userItem */}
                    <div className="item">
                        <div className="item__info">
                            <div className="item__title">
                                <div className="item__user">
                                    <div className="user__id"></div>
                                    <div className="user__info"></div>
                                </div>
                            </div>
                        </div>
                        <div className="item__addButton item__addButton_state_default">
                            <FontAwesomeIcon icon={faCheck}/>
                        </div>
                    </div>

                </div>
            </div>
            <div className="menu">
                <GNB />
            </div>
        </div>
    )
}

export default Home;