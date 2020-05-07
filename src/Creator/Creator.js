import React from 'react';
import {Route, Link } from 'react-router-dom';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import SpaceShip from '../SpaceShip/SpaceShip';
import PropTypes from 'prop-types';

function Creator(props) {

    const [ currentStep, setCurrentStep ] = React.useState(1);

    function handleStepChange(event) {
        setCurrentStep(parseInt(event.target.getAttribute('data-step')));
    }

    if(currentStep === 1 && props.location.pathname !== '/creacion/forma') {
        if(props.location.pathname === '/creacion/color') {
            setCurrentStep(2);
        } else {
            setCurrentStep(3);
        }
    }

 
    return (
        <div className="flexContainer">
            <div className="fallingStars"></div>
            <div className="container container--noStars">
                <SpaceShip shape={props.shape}
                primaryColor={props.primaryColor}
                secondaryColor={props.secondaryColor}
                fireActivated={props.fireActivated}
                fireColor={props.fireColor}
                name={props.name}
                background={props.background}/>
            </div>

            

            <div className="creator">
                
                <div className="creator__nav">
                    <Link className={currentStep === 1? 'creator__nav--selected' : ''} data-step={1} 
                    onClick={handleStepChange} to="/creacion/forma">Forma</Link>
                    <Link className={currentStep === 2? 'creator__nav--selected' : ''} data-step={2} 
                    onClick={handleStepChange} to="/creacion/color">Color</Link>
                    <Link className={currentStep === 3? 'creator__nav--selected' : ''} data-step={3} 
                    onClick={handleStepChange} to="/creacion/detalles">Detalles</Link>
                </div>

                <Route path='/creacion/forma' render={() => <StepOne shape={props.shape} setShape={props.setShape}/>} />

                <Route path='/creacion/color' render={() => <StepTwo primaryColor={props.primaryColor} 
                setPrimaryColor={props.setPrimaryColor} 
                secondaryColor={props.secondaryColor} 
                setSecondaryColor={props.setSecondaryColor} 
                fireColor={props.fireColor} 
                setFireColor={props.setFireColor} 
                fireActivated={props.fireActivated} 
                setFireActivated={props.setFireActivated}/>} />

                <Route path='/creacion/detalles' render={() => <StepThree name={props.name} 
                setName={props.setName} 
                background={props.background} 
                setBackground={props.setBackground}
                setId={props.setId}
                handleFinish={props.handleFinish}/>} />
            </div>
        </div>
    ); 
}

Creator.propTypes = {
    shape: PropTypes.number,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    fireColor: PropTypes.string,
    fireActivated: PropTypes.bool,
    name: PropTypes.string,
    background: PropTypes.number,
    setShape: PropTypes.func,
    setPrimaryColor: PropTypes.func,
    setSecondaryColor: PropTypes.func,
    setFireColor: PropTypes.func,
    setFireActivated: PropTypes.func,
    setName: PropTypes.func,
    setBackground: PropTypes.func,
    setId: PropTypes.func,
    handleFinish: PropTypes.func,
}
export default Creator;