import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Homepage from './Homepage'
import Resume from './Resume'
import Fackbook from './Fackbook'
import App from './App'
import New from './New'
import Login from './Login'

export default class MyWeb extends Component {
state={
    user : [{name : "name" , pic: "", }]
}
    render() {
        return (
            <div> 
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/resume" component={Resume } />
                <Route path="/fackbook" component={Fackbook} />
                <Route path="/app" component={App} />
                <Route path="/new" component={New} />
                <Route path="/login" component={Login}/>
            </Switch>
            
            
            </div>
        )
    }
}
