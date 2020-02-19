import React, { Component } from 'react';
// import Counter from './Counter';
// import CounterContainer from '../containers/CounterContainer';

import StateContainer from '../containers/StateContainer';
import FixedMenu from './FfixedMenu';
import PartnersContainer from  '../containers/PartnersContainer';

class App extends Component {
    render() {
        return (
            <div className="wrap">
                <StateContainer />
                <PartnersContainer partners={this.props.partners} />
                <FixedMenu />
            </div>
        );
    }
}

export default App;