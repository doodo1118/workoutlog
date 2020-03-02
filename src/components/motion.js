import React from 'react';

function Motion({motionName, popMotionSearch}){
    return(
        <div className="motion">
            <div className="motion__name" onClick={popMotionSearch}>{motionName}</div>
        </div>
    )
}
    
    
        
    

export default Motion;