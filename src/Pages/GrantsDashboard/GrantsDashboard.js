import React, { Component } from "react";
import GrantsOverview from "./GrantsOverview/GrantsOverview";
import BalanceCard from "../../CommonComponents/BalanceCard/BalanceCard";
import { Container } from "./GrantsOverview/style";

import {
  BalanceComponent,
  ComponentTitle,
  Subtitle,
  InfoIcon,
  TooltipText,
  ViewRange,
  RangeButton
} from "./styles";
import "./styles.css";
import RecommandButton from "../../CommonComponents/RecommandButton/RecommandButton";
import FeatureCarousal from "./FeatureCarousal/FeatureCarousal";
import SearchCharity from "./SearchCharity/SearchCharity";
import Graph from "./Graph/Graph";
import TabComponent from "./TabComponent/TabComponent";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

class GrantsDashboard extends Component {
  render() {
    return (
      <>
        <GrantsOverview />
        <div className="grantsDashboard">
          <Container className="grantsDashboardContent">
            <BalanceComponent>
              <BalanceCard title={"Current Balance"} amount={"$120,000.00"} />
              <BalanceCard title={"Available Balance"} amount={"$120,000.00"} />
              <BalanceCard title={"Grants Issued YTD"} amount={"$0.00"} />
              <RecommandButton />
            </BalanceComponent>
            <div>
              <BrowserRouter>
                <Switch>
                  <Route path="/home" component={TabComponent} />
                  <Redirect from="/" to="/home" />
                </Switch>
              </BrowserRouter>
              <div style={{marginTop:'20px'}}> 
                <FeatureCarousal />
                </div>
              
            </div>
          </Container>
        </div>
        <div className="AccountActivity">
          <Container>
            <ComponentTitle>Account Activity</ComponentTitle>
            <Subtitle>
              Grant Activity{" "}
              <InfoIcon className="fa fa-info-circle" aria-hidden="true">
                <TooltipText>
                  sdfsdfgsdkjfhk sadjfkshadlkjfh sadkfnknfdsak
                  asdkjflnkjfdsauytlrkewqyuytrew
                </TooltipText>
              </InfoIcon>
            </Subtitle>
            <p className="GrantContent">
              Keeping up with your philanthropic impact has never been easier.
              Simply hover your cursor over the timeline to reveal completed
              grant activities and your trends.
            </p>
            <div style={{ marginTop: "55px" ,display:'flex',justifyContent:'space-between'}}>
              <div className="range">
                <ViewRange>View Range</ViewRange>
                <RangeButton>1M</RangeButton>
                <RangeButton>2M</RangeButton>
                <RangeButton>3M</RangeButton>
                <RangeButton>1Y</RangeButton>
                <RangeButton>2Y</RangeButton>
              </div>
              <div>
                <p style={{fontSize: '16px',fontWeight: 'bold',color:'#505050'}}>From:<span style={{fontSize: '16px',  fontWeight:' bold',color:'#022737',marginLeft:'10px'}}>03/31/2016</span > TO:<span style={{fontSize: '16px',  fontWeight:' bold',color:'#022737',marginLeft:'10px',


}}>03/06/2019</span></p>
              </div>
            </div>
            <div className="Graph">
              <Graph />
            </div>
          </Container>
        </div>
        <div className="search">
          <Container>
            <SearchCharity />
          </Container>
        </div>
      </>
    );
  }
}

export default GrantsDashboard;
