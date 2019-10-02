import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from "../pages/Main";

const AppRouter = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/main" exact component={Main} />
                </Switch>
            </Router>
        </div>
    )
};

export default AppRouter;