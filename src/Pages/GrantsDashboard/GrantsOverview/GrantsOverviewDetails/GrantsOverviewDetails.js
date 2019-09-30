import React from 'react';
import {GrantDetails,Number,Label} from './styles'
function GrantsOverviewDetails(props) {
    console.log(props)
    return (
        <>
            <GrantDetails >
                <Number>{props.value}</Number>
                <Label>{props.name}</Label>
            </ GrantDetails>
        </>
    )
}

export default GrantsOverviewDetails;
