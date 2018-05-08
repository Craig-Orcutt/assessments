import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Register from "./Register";
import Form from './Form'
import Outreach from "./Outreach";
import NotFound from "./NotFound";

const Router = () => (
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/Form" component={Form} />
        <Route exact path="/outreach" component={Outreach} />
        <Route component={NotFound} />
    </Switch>
</BrowserRouter>
);

export default Router;
