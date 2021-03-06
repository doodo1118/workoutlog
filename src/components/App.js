import React, { Component } from 'react';

import {Route} from 'react-router-dom';

import {
    Home,
    Exercise,
    SignIn,
    UserPage,
} from '../pages';

class App extends Component {
    render() {
        return (
            <div className="wrap">
                <Route exact path="/" component={Home}/>
                <Route path="/exercise" component={Exercise}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/user/:id?" component={UserPage}/>
            </div>
        );
    }
}

export default App;