/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
//Pages
import ParticipantInfo from "../pages/ParticipantInfo";
import ParticipantStart from "../pages/ParticipantStart";
import Home from "../pages/Home";
import Dct from "../pages/Dct";
import TactProbe from "../pages/TactProbe";
import Tsf from "../pages/Tsf";
import NonAMTS from "../pages/NonAMTS";
import ArbMTS from "../pages/ArbMTS";
import Tat from "../pages/Tat";
import SPair from "../pages/SPair";
import SDisc from "../pages/SDisc";
import EvotT from "../pages/EvotT";
import EvotIV from "../pages/EvotIV";
import PsvotT from "../pages/PsvotT";
import PsvotIV from "../pages/PsvotIV";
import PsvotPS from "../pages/PsvotPS";
import NovelPST from "../pages/NovelPST";
import ExitSurvey from "../pages/ExitSurvey";
import UrlConstructor from "../pages/UrlConstructor";



//exporting routes
export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/urlconstructor' component={UrlConstructor} />
    <Route path='/particpant/:id' component={ParticipantInfo} />
    <Route path='/:group/:participantId/:dyadL/:dyadN' component={ParticipantStart} />
    <Route path='/dct' component={Dct} />
    <Route path='/tp' component={TactProbe} />
    <Route path='/tsf/' component={Tsf} />
    <Route path='/nonamts/:set' component={NonAMTS} />
    <Route path='/amts/' component={ArbMTS} />
    <Route path='/tat/' component={Tat} />
    <Route path='/spair/' component={SPair} />
    <Route path='/sdisc/' component={SDisc} />
    <Route path='/evott/' component={EvotT} />
    <Route path='/evotiv/' component={EvotIV} />
    <Route path='/psvott/' component={PsvotT} />
    <Route path='/psvotiv/' component={PsvotIV} />
    <Route path='/psvotps/' component={PsvotPS} />
    <Route path='/novelpst/' component={NovelPST} />
    <Route path='/exitsurvey/' component={ExitSurvey} />
  </Switch>
);
