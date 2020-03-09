import React, { useState } from 'react';

import {faChevronLeft, faChevronRight, faStop, faPlus } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import MotionBoard from './MotionBoard';
import OverviewContainer from '../containers/OverviewContainer';

function FixedMenu(){
    const [showMotionBoard, setShowMotionBoard] = useState(false);
    const [displayOverview, setDisplayOverview] = useState(false);

    function onStopClick(){
        if(displayOverview)
            setDisplayOverview(false);
        else
            setDisplayOverview(true);
    }
    function onPlusClick(){
        if(showMotionBoard)
            setShowMotionBoard(false);
        else
            setShowMotionBoard(true);
    }
    return(
        <div className="menu__lnb">
            <div className="stop" onClick={onStopClick}>
                <FontAwesomeIcon icon={faStop} onClick={onStopClick}/>
            </div>
            <div className="logTemplate">
                <FontAwesomeIcon icon={faPlus} onClick={onPlusClick}/>
            </div>
            <div className="logTemplate">
                <FontAwesomeIcon icon={faChevronLeft}/>
            </div>
            <div className="logTemplate">
                <FontAwesomeIcon icon={faChevronRight}/>
            </div>
            {showMotionBoard&&
                <MotionBoard />}
            {displayOverview&&
                <OverviewContainer />}
        </div>
    )
}

export default FixedMenu;