import React from 'react';

import GNB from '../components/GNB';

function UserPage(){
    return(
        <div className="userPage">
            <div className="user__information">
                <div className="user__id">userId</div>
                <div className="user__follow">follow</div>
                <div className="user__introduction">introduction</div>
            </div>
            <div className="tabs">
                <div className="tab tab__history tab_state_selected">history</div>
                <div className="tab tab__bookmark">bookmark</div>
                <div className="tab tab__following">following</div>
                {/* <div className="routines"></div> */}
                {/* <div className="board"></div> */}
            </div>
            <div className="contents">
            </div>
            <div className="menu">
                <GNB />
            </div>
        </div>
    )
}


export default UserPage;