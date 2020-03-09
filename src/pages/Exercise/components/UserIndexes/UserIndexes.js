import React from 'react';
import User from '../../../components/User'

function UserImage(props){
    const {partners, focusOn} = props;
    const Users = partners.map((partner, index)=>
        <User focusOn={focusOn} userId={partner.userId} routineId={partner.routineId} key={index}/>)

    return(
        <div className="userIndexes" >
            {Users}
        </div>
    )
}

export default UserImage;