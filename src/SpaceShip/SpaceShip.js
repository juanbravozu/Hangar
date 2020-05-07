import React from 'react';
import PropTypes from 'prop-types';
import BaseShip from '../BaseShip/BaseShip';
import DetailsShip from '../DetailsShip/DetailsShip';

function SpaceShip(props) {

    return (
        <div className="ship">
            <BaseShip shape={props.shape}
            primaryColor={props.primaryColor}/>
            <DetailsShip shape={props.shape}
            secondaryColor={props.secondaryColor}/>
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

