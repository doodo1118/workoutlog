import React from 'react';

function UserPage(){

    return(
        <div>
            <div className="user__information">
                <div className="userId"></div>
                <div className="userIntroduction">

                </div>
                {/* <div className="following"></div>
                <div className="follower"></div> */}
            </div>
            <div className="lnb">
                <div className="history"></div>
                {/* <div className="routines"></div>
                <div className="board"></div> */}
            </div>
            <div className="contents">
                <div className="history">
                    <div className="filter">
                        <div className="dailyView"></div>
                        <div className="monthlyView"></div>
                    </div>
                </div>
                {/* <div className="routines">
                    <div className="filter">

                    </div>
                </div>
                <div className="board">
                    <div className="filter">
                        <div className=""></div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}


export default UserPage;