import React from 'react';

function UserImage(props){
    const {userId, routineId, focusOn} = props;
    function handleClick(){
        focusOn(userId);
        window.location = `#${routineId}`;
    }

    return(
        <div className="user" onClick={handleClick}>
            <img alt={userId}/>
        </div>
    )
}

export default UserImage;