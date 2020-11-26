import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Bengali from "./pages/Bengali";
import Meditational from "./pages/Meditational";
import Devotional from "./pages/Devotional";
import Classical from "./pages/Classical";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/bengali" component={Bengali} />
      <Route path="/meditational" component={Meditational} />
      <Route path="/devotional" component={Devotional} />
      <Route path="/classical" component={Classical} />
      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={ContactUs} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
