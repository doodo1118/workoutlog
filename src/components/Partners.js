import React from 'react';
import Partner from './Partner';
import MeContainer from '../containers/MeContainer';

function hideFixedMenu(){
    let fixedMenu = document.getElementsByClassName("userInterface_fixed")[0];

    fixedMenu.style.visibility = "hidden";
    console.log('scroll');
}
function displayFixedMenu(){
    let fixedMenu = document.getElementsByClassName("userInterface_fixed")[0];

    fixedMenu.style.visibility = "visible";
    console.log('scroll stop');
}
let onScrollStop = null;

class Partners extends React.Component{

    render(){
        const {partnersData} = this.props;

        const partners = partnersData.map((partner, index)=>
            <Partner partner={partner} key={index} />
        )

        return(
            <div className="partners" id="partners" onScroll={()=>{
                // displayFixedMenu();

                // if(onScrollStop)
                //     clearTimeout(onScrollStop);
                
                // onScrollStop = setTimeout(hideFixedMenu, 1000);
            } }>
                {partners}
                <MeContainer/>
            </div>
        )
    }
}

export default Partners;