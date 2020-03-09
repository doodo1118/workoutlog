import React, {useState} from 'react';

import {faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

//naming...
import GNB from '../../../components/GNB';
import ExerciseNB from '../ExerciseNB';
import UserIndexes from '../UserIndexes';

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
            <UserIndexes/>
            <div className="menu">
                <div className="menu__toggleButton">
                    <FontAwesomeIcon icon={faBars} rotation={ navigationBar==='lnb'&&90 } onClick={toggleNavigationBar}/>
                </div>
                {navigationBar==="gnb"&&
                <GNB />}
                {navigationBar==="lnb"&&   
                <ExerciseNB />}
            </div>
        </div>
    )
}

export default FixedMenu;