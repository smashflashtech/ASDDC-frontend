/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//Pages
import Developer from "../pages/Developer";
import Dashboard from "../pages/Dashboard";
import ParticipantInfo from "../pages/ParticipantInfo";
import Welcome from "../pages/Welcome";
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
import CreateParticipant from "../pages/CreateParticipant";
import EditParticipant from "../pages/EditParticipant";
import AllParticipants from "../pages/AllParticipants";


//exporting routes
export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/ASDDC/:groupId/:participantId/:dyadL/:dyadN' component={Welcome} />
    <Route path='/instructions/:phase/:set' component={Instructions} />
    <Route path='/amts/:block/:feedback' component={Amts} />
    <Route path='/dct/:condition/:block' component={Dct}/>
    <Route path='/evotiv/:block' component={Evotiv} />
    <Route path='/evott/:block' component={Evott} />
    <Route path='/namts/:set/:block' component={Namts}/>
    <Route path='/npst/:block' component={Npst} />
    <Route path='/psvotiv/:block' component={Psvotiv} />
    <Route path='/psvotps/:block' component={Psvotps} />
    <Route path='/psvott/:block' component={Psvott} />
    <Route path='/spair/:block' component={SPair} />
    <Route path='/sdisc/:block' component={SDisc} />
    <Route path='/tat/:block' component={Tat} />
    <Route path='/tp/:block' component={Tp} />
    <Route path='/tsf/:condition/:block' component={Tsf} />
    <Route path='/exitsurvey' component={ExitSurvey} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/participant/create' component={CreateParticipant} />
    <Route path='/participant/edit/:id' component={EditParticipant} />
    <Route path='/participant/all' component={AllParticipants} />
    <Route path='/particpant/:id' component={ParticipantInfo} />
    <Route path='/urlconstructor' component={UrlConstructor} />
    <Route path='/developer' component={Developer} />
  </Switch>
);
