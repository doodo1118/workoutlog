import React from 'react';

class State extends React.Component{
    
    render(){
        return(
            <div className="state">
                <div className="state__totalElapsedTime"></div>
                <div className="state__progress">
                </div>
                <div className="state__intervalTimer"></div>
            </div>
        )
    }
}

export default State;