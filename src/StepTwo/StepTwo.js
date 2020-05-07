import React from 'react';
import PropTypes from 'prop-types';
import { TwitterPicker } from 'react-color';
import { Switch } from '@material-ui/core';

function StepTwo(props) {

    function handleSwitch(event) {
        props.setFireActivated(event.target.checked);
    }

    function handlePrimary(color) {
        props.setPrimaryColor(color.hex);
    }

    function handleSecondary(color) {
        props.setSecondaryColor(color.hex);
    }

    function handleFireColor(color) {
        props.setFireColor(color.hex);
    }

    return (
        <div className="creator__step">
            <div className="creator__option">
                <h3>Color principal</h3>

                <TwitterPicker triangle="hide" color={props.primaryColor} onChangeComplete={handlePrimary}/>
            </div>

            <div className="creator__option">
                <h3>Color secundario</h3>

                <TwitterPicker triangle="hide" color={props.secondaryColor} onChangeComplete={handleSecondary}/>
            </div>

            <div className="creator__option">
                <div className="creator__flex">
                    <h3>Fuego</h3>

                    <Switch checked={props.fireActivated} onChange={handleSwitch} 
                    inputProps={{ 'aria-label': 'primary checkbox' }}/>
                </div>                

                {props.fireActivated && <TwitterPicker triangle="hide" color={props.fireColor} onChangeComplete={handleFireColor}/>}
                
            </div>

        </div>
    );
}

StepTwo.propTypes = {
    primaryColor: PropTypes.string,
    setPrimaryColor: PropTypes.func,
    secondaryColor: PropTypes.string,
    setSecondaryColor: PropTypes.func,
    fireColor: PropTypes.string,
    setFireColor: PropTypes.func,
    fireActivated: PropTypes.bool,
    setFireActivated: PropTypes.func
}

export default StepTwo;