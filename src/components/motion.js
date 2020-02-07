import React from 'react';

class Motion extends React.Component{
    
    render(){
        const motionName = this.props;
        return(
            <div className="motion">
                <div className="motion__name">{motionName}</div>
            </div>
        )
    }
    
}

export default Motion;