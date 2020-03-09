import React, { Component } from 'react';
// import Counter from './Counter';
// import CounterContainer from '../containers/CounterContainer';

import OverviewContainer from '../../containers/ResultContainer';
import StateContainer from '../../containers/StateContainer';
import FixedMenu from '../../components/FixedMenu';
import PartnersContainer from  '../../containers/PartnersContainer';

class Exercise extends Component {
    render() {
        return (
            <div className="wrap">
                <OverviewContainer />
                <StateContainer />
                <PartnersContainer partners={this.props.partners} />
                <FixedMenu />
            </div>
        );
    }
}

export default Exercise;