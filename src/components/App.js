import React, { Component } from 'react';

import {Route} from 'react-router-dom';

import {
    Home,
    Exercise,
    SignUp,
    SignIn,
    UserPage,
} from '../pages';

class App extends Component {
    render() {
        return (
            <div className="wrap">
                <Route exact path="/" component={Home}/>
                <Route path="/Exercise" component={Exercise}/>
                <Route path="/SignUp" component={SignUp}/>
                <Route path="/UserPage/:id?" component={UserPage}/>
            </div>
        );
    }
}

export default App;