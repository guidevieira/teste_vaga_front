
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/teste_vaga_front.scss?v1.1.0";

import Landing from "views/examples/Landing.js";
import Profile from "views/examples/Profile.js";
import Posts from "views/examples/posts.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Landing {...props} />} />
      <Route
        path="/companys"
        exact
        render={props => <Landing {...props} />}
      />
      <Route
        path="/company/:id"
        exact
        render={props => <Profile {...props} />}
      />
      <Route
        path="/post/:id"
        exact
        render={props => <Posts {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
