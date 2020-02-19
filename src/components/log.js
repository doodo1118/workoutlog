import React from 'react';

import Motion from './Motion';
import LoggerContainer from '../containers/LoggerContainer';

class Log extends React.Component{

    constructor(props){
        super(props);
        this.state = {isDone:false, };
    }
    onDone = ()=>{
        this.setState({
            isDone: true,
        })
    }
    render(){
        const {isDone} = this.state;
        const {motionName, weight, reps, time} = this.props.log;

        return(
            <div className={`log textShadow log_backgroundColor_default ${isDone?'log_backgroundColor_done':''}`}>
                <Motion motionName={motionName}/>
                <LoggerContainer weight={weight} reps={reps} time={time} isDone={isDone} onDone={this.onDone}/>
            </div>
        )
    }
}

export default Log;