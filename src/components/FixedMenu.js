import React, {useState} from 'react';

import {faChartBar, faCogs, faHome, faChevronLeft, faChevronRight, faStop, faPlus, faBars, faPause} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

//naming...
import UserIndexesContainer from '../containers/UserIndexesContainer';


function FixedMenu(){
    const [navigationBar, setNavigationBar] = useState('lnb');


    function toggleNavigationBar(){
        if(navigationBar==='lnb')
            setNavigationBar('gnb');
        else 
            setNavigationBar('lnb');
    }

    return(
        <div className="userInterface_fixed">
            <div className="tipWrap">
                <span className="tip">this is place for one-line-tip</span>
            </div>
            <UserIndexesContainer/>
            <div className="menu">
                <div className="menu__toggleButton">
                    <FontAwesomeIcon icon={faBars} rotation={ navigationBar==='lnb'&&90 } onClick={toggleNavigationBar}/>
                </div>
                {navigationBar==="gnb"&& 
                <div className="menu__gnb">
                    <div className="home">
                        <FontAwesomeIcon icon={faHome}/>
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
                </div>}
                {navigationBar==="lnb"&&   
                <div className="menu__lnb">
                    <div className="stop">
                        <FontAwesomeIcon icon={faStop}/>
                    </div>
                    {/* <div className="pause">
                        <FontAwesomeIcon icon={faPause}/>
                    </div> */}
                    <div className="logTemplate">
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                    <div className="logTemplate">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </div>
                    <div className="logTemplate">
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </div>
                </div>}
                {/* <div className="autoSlide">
                    auto
                </div> */}
            </div>
        </div>
    )
}

export default FixedMenu;