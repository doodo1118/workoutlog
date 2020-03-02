import React from 'react';

import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Logger(props){
    function handleClickAdd(){
        const { addLog, resetIntervalTimer, markAsCompleted } = props;
        
        addLog( createNewLog() );
        resetIntervalTimer( Date.now() );
        markAsCompleted();
    }
    function createNewLog(){
        const {motionName, weight, reps, intervalTimer} = props;

        return {
            motionName: motionName,
            weight: weight,
            reps: reps,
            time:intervalTimer,
        }
    }
    // startExercise(){
    //     const {setMainTimer, resetIntervalTimer, tick, startExercise} = this.props
        
    //     setMainTimer(Date.now());
    //     resetIntervalTimer(Date.now());
    //     startExercise();
    //     setInterval(tick, 1000);
    // }

    return(
        <div className="logger">
            <div className="logger__inputWrap logger__submitButton" onClick={handleClickAdd}>
                <FontAwesomeIcon icon={faCheck} className="iconShadow" />
            </div>
            <div className="logger__inputWrap logger__deleteButton">
                <FontAwesomeIcon icon={faTimes} className="iconShadow" onClick={handleClickAdd}/>
            </div>
        </div>
    )

}


export default Logger;