import React from 'react';

class FixedMenu extends React.Component{
    render(){
        return(
            <div className="userInterface_fixed">
                <div className="tipWrap">
                    <span className="tip">this is place for one-line-tip</span>
                </div>
                <div className="menu">
                    <div className="toMyCurrentLog"></div>
                </div>
            </div>
        )
    }
}

export default FixedMenu;