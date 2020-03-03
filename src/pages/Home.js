import React, {useState} from 'react';

import {faCheck, faTimes, faHome, faChartBar, faCogs} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Home(){
    const [navigationBar, setNavigationBar] = useState('lnb');

    return(
        <div>
            <div className="search"></div>
            <div className="contents">
                <div className="section">
                    {/* routineItem */}
                    <div className="item">
                        <div className="item__info">
                            <div className="item__title">
                                <div className="item__user"></div>
                                <div className="item__"></div>
                            </div>
                            <div className="item__detail">
                                <div className="item__target"></div>
                                <div className="item__">
                                    <div className="item__time"></div>
                                    <div className="item__sets"></div>
                                </div>
                            </div>
                        </div>
                        <div className="item__addButton item__addButton_state_default">
                            <FontAwesomeIcon icon={faCheck}/>
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
                <div className="menu__gnb">
                    <div className="home">
                    </div>
                    <div className="board">
                        게시판
                    </div>
                    <div className="myStatistic">
                        <FontAwesomeIcon icon={faChartBar}/>
                    </div>
                    <div className="setting">
                        <FontAwesomeIcon icon={faCogs}/>
                    </div>
                    <div className="people">

                    </div>
                    <div className="routines">

                    </div>
                </div>
                {/* <div className="autoSlide">
                    auto
                </div> */}
            </div>
        </div>
    )
}

export default Home;