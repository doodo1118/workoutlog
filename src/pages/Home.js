import React, {useState} from 'react';

import {faCheck, faBookmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import GNB from '../components/GNB';

function Home(){
    const [navigationBar, setNavigationBar] = useState('lnb');

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
                    <div className="item">
                        <div className="item__content">
                            <div className="item__user"></div>
                            <div className="item__title"></div>
                            <div className="item__detail">
                                <div className="item__target"></div>
                                <div className="item__">
                                    <div className="item__time"></div>
                                    <div className="item__sets"></div>
                                </div>
                            </div>
                        </div>
                        <div className="item__buttons">
                            <div className="item__button item__add item__add_state_active">
                                <FontAwesomeIcon icon={faCheck}/>
                            </div>
                            <div className="item__button item__bookmark item__bookmark_state_active">
                                <FontAwesomeIcon icon={faBookmark}/>
                            </div>
                        </div>
                    </div>

                    {/* userItem */}
                    {/* <div className="item">
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
                    </div> */}

                </div>
            </div>
            <div className="menu">
                <GNB />
            </div>
        </div>
    )
}

export default Home;