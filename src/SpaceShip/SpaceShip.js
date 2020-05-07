import React from 'react';
import PropTypes from 'prop-types';

function SpaceShip(props) {

    return (
        <div className="ship">

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
    background: PropTypes.string
}

export default SpaceShip;

