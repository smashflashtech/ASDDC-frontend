/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//Pages
import ParticipantInfo from "../pages/ParticipantInfo";
import ParticipantStart from "../pages/ParticipantStart";
import Home from "../pages/Home";
import Dct from "../pages/Dct";
import Tp from "../pages/Tp";
import Tsf from "../pages/Tsf";
import Namts from "../pages/Namts";
import Amts from "../pages/Amts";
import Tat from "../pages/Tat";
import SPair from "../pages/SPair";
import SDisc from "../pages/SDisc";
import Evott from "../pages/Evott";
import Evotiv from "../pages/Evotiv";
import Psvott from "../pages/Psvott";
import Psvotiv from "../pages/Psvotiv";
import Psvotps from "../pages/Psvotps";
import Npst from "../pages/Npst";
import ExitSurvey from "../pages/ExitSurvey";
import UrlConstructor from "../pages/UrlConstructor";
import Instructions from "../pages/Instructions";



//exporting routes
export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/urlconstructor' component={UrlConstructor} />
    <Route path='/particpant/:id' component={ParticipantInfo} />
    <Route path='/:group/:participantId/:dyadL/:dyadN' component={ParticipantStart} />
    <Route path='/instructions/:phase/:set' component={Instructions} />
    <Route path='/amts' component={Amts} />
    <Route path='/dct/:condition' component={Dct} />
    <Route path='/evotiv' component={Evotiv} />
    <Route path='/evott' component={Evott} />
    <Route path='/namts/:set' component={Namts} />
    <Route path='/npst' component={Npst} />
    <Route path='/psvotiv' component={Psvotiv} />
    <Route path='/psvotps' component={Psvotps} />
    <Route path='/psvott' component={Psvott} />
    <Route path='/spair' component={SPair} />
    <Route path='/sdisc' component={SDisc} />
    <Route path='/tat' component={Tat} />
    <Route path='/tp/:condition' component={Tp} />
    <Route path='/tsf/:condition' component={Tsf} />
    <Route path='/exitsurvey' component={ExitSurvey} />
  </Switch>
);
