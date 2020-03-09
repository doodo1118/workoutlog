import React, { Component } from 'react';
// import Counter from './Counter';
// import CounterContainer from '../containers/CounterContainer';

import Overview from '../components/Overview';
import State from './components/State';
import FixedMenu from './components/FixedMenu';
import Partners from  './components/Partners';

class Exercise extends Component {
    render() {
        return (
            <div className="wrap">
                <Overview />
                <State />
                <Partners partners={this.props.partners} />
                <FixedMenu />
            </div>
        );
    }
}

export default Exercise;