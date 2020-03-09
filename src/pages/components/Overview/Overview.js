import React, { useState } from 'react';

import {faTimes } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import convertMilliSecondsToMinuetesSeconds from '../../utils/convertMilliSecondsToMinuetesSeconds';


function Overview(props){
    const {startExercise, tick} = props;
    const {partnersData, totalVolume, totalSets, totalTime} = props;

    //state component랑 중복
    function startExercises(){
        startExercise(); 
        setInterval(tick, 1000);
    }
    function finishExercise(){
        if( window.confirm("sure?") ){
            const dataToSend = {
                // ajax -> myStatistics
            }
        }
    }
    
    const[time, setTime] = useState(totalTime);
    const[volume, setVolume] = useState(totalVolume);
    const[sets, setSets] = useState(totalSets);
    const[display, setDisplay] = useState();
    
    
    return(
        <div className="overview" style={ {display: display} }>
            <div className="overview__summary">
                <div className="overview__summaryItem overview__time">
                    TIME
                    {time}
                </div>
                <div className="overview__summaryItem overview__volume">
                    VOLUME
                    {volume}
                </div>
                <div className="overview__summaryItem overview__sets">
                    SETS
                    {sets}
                </div>
            </div>
            <div className="overview__target">

            </div>
            <div className="overview__motions">
                PLACE FOR LOGS
                <div className="motion_size_sm motion_chest">
                </div>
            </div>
            <div className="overview__start" onClick={startExercises}>
                START
            </div>
            <div className="overview__close" onClick={()=>{}}>
                <FontAwesomeIcon icon={faTimes}/>
            </div>
        </div>
    )
    
}


export default Overview;