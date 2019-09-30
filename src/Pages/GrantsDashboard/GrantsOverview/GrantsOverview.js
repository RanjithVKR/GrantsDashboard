import React from 'react';
import {Title, Container,BalancesDate,Heading,Details,OverviewDetails} from '../GrantsOverview/style'
import GrantsOverviewDetails from './GrantsOverviewDetails/GrantsOverviewDetails';
function GrantsOverview() {
    return (
        <div style={{ backgroundColor: '#ffffff',padding:'37px 0px 54px 0px'}}>
            <Container>
            <Title>Grant Overview</Title>
            <Details >
                <div>
                <Heading>The Blue Sky Too Fund - A1050919</Heading>
                <BalancesDate>Balances as of 07/17/2019</BalancesDate>
                </div>
                <OverviewDetails>
                <GrantsOverviewDetails value={'0'} name={"Grant Agreements"}/>
                <GrantsOverviewDetails value={'8'} name={"Active Schedules"}/>
                <GrantsOverviewDetails value={'6'} name={"Pending Grants"}/>
                </OverviewDetails>
               
                    
            </Details>
                

            
            </Container>
            
        </div>
    )
}

export default GrantsOverview;
