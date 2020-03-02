import React from 'react';
import LogsContainer from './LogsContainer';

class Me extends React.Component{
    
    render(){
        const {myLogs} = this.props;

        return(
            <div className="partner">
                <div className="partner__header">
                    <div className="partner__info">{"Me"}</div>
                    <div className="partner__menuWrap">
                    </div>
                </div>
                <LogsContainer logs={myLogs}/>
            </div>
        )
    }
}


export default Me;