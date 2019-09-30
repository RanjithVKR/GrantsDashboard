import React from 'react';
// import {InfoIcon,TooltipText} from '../'
import {Card,Title,CardTitle,Amount,InfoIcon,TooltipText,View,Arrow} from './styles'
// import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function BalanceCard(props) {
    return (
        <div>
             
            <Card>
                <CardTitle>
                    <Title>{props.title}</Title>
                    <InfoIcon className="fa fa-info-circle" aria-hidden="true"><TooltipText>sdfsdfgsdkjfhk sadjfkshadlkjfh sadkfnknfdsak asdkjflnkjfdsauytlrkewqyuytrew</TooltipText></InfoIcon>
                </CardTitle>
                <Amount>{props.amount}</Amount>
                <View href="#" title={props.title}>View transaction summary <Arrow style={{fontSize:'16px'}}>&#8594;</Arrow></View>
            </Card>
        </div>
    )
}

export default BalanceCard;
