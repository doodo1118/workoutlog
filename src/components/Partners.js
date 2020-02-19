import React from 'react';
import Partner from './Partner';
import MeContainer from '../containers/MeContainer';

function hideFixedMenu(){
    let state = document.getElementsByClassName("state")[0];
    let fixedMenu = document.getElementsByClassName("userInterface_fixed")[0];

    state.style.visibility = "hidden";
    fixedMenu.style.visibility = "hidden";
    console.log('scroll');
}
function displayFixedMenu(){
    let state = document.getElementsByClassName("state")[0];
    let fixedMenu = document.getElementsByClassName("userInterface_fixed")[0];

    state.style.visibility = "visible";
    fixedMenu.style.visibility = "visible";
    console.log('scroll stop');
}
let onScrollStop = null;
class Partners extends React.Component{

    render(){
        console.log('partners props : ', this.props, 'partnersData : ', this.props.partnersData);
        
        const {partnersData} = this.props;

        const partners = partnersData.map((partner, index)=>
            <Partner partner={partner} key={index}/>
        )

        return(
            <div className="partners" id="partners" onScroll={()=>{
                hideFixedMenu();

                if(onScrollStop)
                    clearTimeout(onScrollStop);
                
                onScrollStop = setTimeout(displayFixedMenu, 1000);
            } }>
                {partners}
                <MeContainer/>
            </div>
        )
    }
}

export default Partners;