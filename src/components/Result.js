import React from 'react';
import convertMilliSecondsToMinuetesSeconds from '../utils/convertMilliSecondsToMinuetesSeconds';



function Overview(props){
    const {myLogs, mainTimer, totalSets, totalVolume} = props;

    function finishExercise(){
        if( window.confirm("sure?") ){
            const dataToSend = {
                // ajax -> myStatistics
            }
        }
    }
    return(
        <div className="overview">
            <div className="overview__summary">
                <div className="overview__time">
                    {mainTimer}
                </div>
                <div className="overview__volume">
                    {totalVolume}
                </div>
                <div className="overview__sets">
                    {totalSets}
                </div>
            </div>
            <div className="overview__motions">
                PLACE FOR LOGS
                <div className="motion_size_sm motion_chest">
                </div>
            </div>
            <div className="overview__finish" onClick={finishExercise}>
                FINISH
            </div>
            <div className="overview__close" onClick={()=>{}}>
                
            </div>
        </div>
    )
}


export default Overview;
