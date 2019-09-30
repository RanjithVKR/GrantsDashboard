import React, { Component } from 'react'
import { Switch, Route, NavLink } from "react-router-dom";
import {ViewArrow,ViewLink} from './styles'
import './styles.css'
const Profile = () => <div className='TabDashboard'>
<a className='TId'>Transaction ID: 3341123</a>
<div className='TabData'>
    <div className='TabDataContent'>
        <h3 className='title'>Scheduled Issue Date</h3>
        <p className='content'>07/07/2019</p>
    </div>
    <div className='TabDataContent'>
        <h3 className='title'>Amount</h3>
        <p className='content'>$1,000.00</p>
    </div>
    <div className='TabDataContent'>
        <h3 className='title'>Purpose</h3>
        <p className='content'>-</p>
    </div>
    <div className='TabDataContent'>
        <h3 className='title'>Status</h3>
        <p className='content'>Research Proceeding</p>
    </div>
    <div className='TabDataContent'>
        <h3 className='title'>Entered By</h3>
        <p className='content'>George Wilson</p>
    </div>
    
    
</div>

</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
// const Contact = () => <div>You're on the Contact Tab</div>;
class TabComponent extends Component {
   

    render() {
        const { path } = this.props.match;
        return (
            <div className='Tabs'>
        
            <div className="links">
              <NavLink to={`${path}/profile`}activeClassName='Active' className="link">Current Pending Grants (<span>6</span>)</NavLink>
              <NavLink to={`${path}/comments`} activeClassName='Active'className="link">Issued Grants (<span>10</span>)</NavLink>
              
            </div>
            <div className="tabs">
              <Switch>
                <Route path={`${path}/profile`} exact component={Profile} />
                <Route path={`${path}/comments`} component={Profile} />
              </Switch>
            </div>
            <div >
                <ViewLink>View Grant Activity<ViewArrow>&#8594;</ViewArrow></ViewLink>
            </div>
          </div>
        )
    }
}

export default TabComponent
