import React from 'react';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Logger extends React.Component{
    render(){
        const {weight, reps, time, addLog, resetIntervalTimer} = this.props;
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
                    <input className="logger__input" type="number" placeholder="time" min="1" max="999" defaultValue={time} />
                </div>
                <div className="logger__inputWrap logger__submitButton" 
                    onClick={
                        (e)=>{
                            const parentNode = e.currentTarget.parentNode;
                            const motionName = parentNode.parentNode.firstChild.firstChild.textContent;
                            const [weight, reps, time]= parentNode.childNodes;
                            
                            const newLog={
                                motionName: motionName,
                                weight:weight.lastChild.value, 
                                reps:reps.lastChild.value, 
                                time: time.lastChild.value,
                            }; 
                            
                            addLog(newLog);
                            resetIntervalTimer();
                            console.log(motionName);
                            setTimeout(console.log("log"), 1000);
                        }
                }>
                    <FontAwesomeIcon icon={faCheck} className="iconShadow" />
                </div>
                <div className="logger__inputWrap logger__deleteButton"
                    onClick={
                        (e)=>{
                            const parentNode = e.currentTarget.parentNode;
                            const motionName = parentNode.parentNode.firstChild.firstChild.textContent;
                            const [weight, reps, time]= parentNode.childNodes;
                            
                            const newLog={
                                motionName: motionName,
                                weight:weight.lastChild.value,
                                reps:reps.lastChild.value,
                                time: time.lastChild.value,
                            };
                            
                            addLog(newLog);
                            resetIntervalTimer();
                            
                            setTimeout(console.log("log"), 1000);
                        }
                    }
                >
                    <FontAwesomeIcon icon={faTimes} className="iconShadow" />
                </div>
            </div>
        )
    }
}

export default Logger;