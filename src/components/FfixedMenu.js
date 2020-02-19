import React from 'react';

import {faChartBar, faCogs, faHome, faUser, faStop, faPlus, faBars, faCrosshairs} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class FixedMenu extends React.Component{
    render(){
        return(
            <div className="userInterface_fixed">
                <div className="tipWrap">
                    <span className="tip">this is place for one-line-tip</span>
                </div>
                <div className="menu">
                    <div className="bars">
                        <FontAwesomeIcon icon={faBars} rotation={90}/>
                    </div>
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
                    <div className="stop">
                        <FontAwesomeIcon icon={faStop}/>
                    </div>
                    <div className="toMyCurrentLog">
                        <FontAwesomeIcon icon={faCrosshairs}/>
                    </div>
                    <div className="logTemplate">
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                    <div className="autoSlide">
                        auto
                    </div>
                </div>
            </div>
        )
    }
}

export default FixedMenu;