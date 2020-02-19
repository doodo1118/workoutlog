import React from 'react';

import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import convertMilliSecondsToMinuetesSeconds from '../utils/convertMilliSecondsToMinuetesSeconds';

class Logger extends React.Component{
    state = {
        motionName:,
        kg:,
        reps:,
        time:,
    }
    handleChange(e){
        this.setState({
            [e.currentTarget.name] :e.currentTarget.value,
        })
    }
    handleClick(){
        const newLog = this.state;
        
    }
    render(){
        const {weight, reps, time, addLog, setMainTimer, resetIntervalTimer, intervalTimer, tick, hasStarted, startExercise} = this.props;
        return(
            <div className="logger">
                <div className="logger__inputWrap logger__inputWeightWrap">
                    <label>kg</label>
                    <input className="logger__input" type='number' placeholder="KG" min="1" max="1000" defaultValue={weight} readOnly/>
                </div>
                <div className="logger__inputWrap logger__inputRepsWrap">
                    <label>reps</label>
                    <input className="logger__input" type="number" placeholder="REPS" min="1" max="999" defaultValue={reps} />
                </div>
                <div className="logger__inputWrap logger__inputTimeWrap">
                    <label>time</label>
                    <input className="logger__input" type="text" placeholder="time" min="1" max="999" defaultValue={convertMilliSecondsToMinuetesSeconds(time)} readOnly/>
                </div>
                <div className="logger__inputWrap logger__submitButton" 
                    onClick={
                        (e)=>{
                            
                            if(!hasStarted){
                                setMainTimer(Date.now());
                                resetIntervalTimer(Date.now());
                                startExercise();
                                setInterval(tick, 1000);
                            }

                            const logger = e.currentTarget.parentNode;
                            const motionName = logger.parentNode.firstChild.firstChild.textContent;
                            const [weight, reps]= logger.childNodes;

                            const newLog={
                                motionName: motionName,
                                weight:weight.lastChild.value, 
                                reps:reps.lastChild.value, 
                                time: intervalTimer,
                            }; 
                            
                            addLog(newLog);
                            resetIntervalTimer(Date.now());

                            //color
                            

                            // move to next log
                            let logsContainer = logger.parentNode.parentNode;
                            setTimeout(()=>{
                                logsContainer.scrollLeft += 322;
                            }, 800)
                            
                        }
                }>
                    <FontAwesomeIcon icon={faCheck} className="iconShadow" />
                </div>
                <div className="logger__inputWrap logger__deleteButton">
                    <FontAwesomeIcon icon={faTimes} className="iconShadow" onClick={
                        (e)=>{
                            let log = e.currentTarget.parentNode.parentNode.parentNode;
                            console.log(log);
                        }
                    }/>
                </div>
            </div>
        )
    }
}

export default Logger;