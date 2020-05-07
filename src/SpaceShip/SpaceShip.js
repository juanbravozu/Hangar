import React from 'react';
import PropTypes from 'prop-types';
import BaseShip from '../BaseShip/BaseShip';
import DetailsShip from '../DetailsShip/DetailsShip';

function SpaceShip(props) {

    let shipNameClass = 'ship__name';

    if(props.shape === 1) {
        shipNameClass += ' ship__name--ship1';
    } else if(props.shape === 2) {
        shipNameClass += ' ship__name--ship2';
    } else if(props.shape === 3) {
        shipNameClass += ' ship__name--ship3';
    } else if(props.shape === 4) {
        shipNameClass += ' ship__name--ship4';
    }  

    return (
        <div className="ship">
            <BaseShip shape={props.shape}
            primaryColor={props.primaryColor}/>
            <DetailsShip shape={props.shape}
            secondaryColor={props.secondaryColor}/>

            <p className={shipNameClass}>{props.name}</p>
        </div>
    );
}

SpaceShip.propTypes = {
    shape: PropTypes.number,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    fireActivated: PropTypes.bool,
    fireColor: PropTypes.string,
    name: PropTypes.string,
    background: PropTypes.number
}

export default SpaceShip;

