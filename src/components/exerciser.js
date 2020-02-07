import React from 'react';
import LogsContainer from './logsContainer';

class Exerciser extends React.Component{
    
    render(){
        return(
            <div className="exerciser">
                <div className="exerciser__header">
                    <div className="exerciser__info">userId</div>
                    <div className="exerciser__menuWrap">
                        <div className="exerciser__menu exerciser__sync"><i className="fas fa-sync"></i></div>
                    </div>
                </div>
                <LogsContainer logArray={props.logInfo.logArray}/>
            </div>
        )
    }
}

export default Exerciser;