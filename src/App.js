import React from "react";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Visualizer  from "./Visualizer";
import "./App.css";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/visualizer" component={Visualizer}/>
            </Switch>
        </Router>
    )
}

export default App;