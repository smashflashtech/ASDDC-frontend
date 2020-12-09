/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//Pages
import ParticipantInfo from "../pages/ParticipantInfo";
import Dct from "../pages/Dct";
import Home from "../pages/Home";

//exporting routes
export default (
  // <div>
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/dct' component={ParticipantInfo} />
    <Route path='/dct' component={Dct} />
  </Switch>
  // </div>
);
