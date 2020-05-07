import React from 'react';
import {Route, Link } from 'react-router-dom';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import SpaceShip from '../SpaceShip/SpaceShip';

function Creator(props) {

    const [ currentStep, setCurrentStep ] = React.useState(1);
    const [ shape, setShape ] = React.useState(1);
    const [ primaryColor, setPrimaryColor ] = React.useState('#FFFFFF');
    const [ secondaryColor, setSecondaryColor ] = React.useState('#EB144C');
    const [ fireColor, setFireColor ] = React.useState('#FCB900');
    const [ fireActivated, setFireActivated ] = React.useState(false);
    const [ name, setName ] = React.useState('');
    const [ background, setBackground ] = React.useState(1);

    function handleStepChange(event) {
        setCurrentStep(event.target.getAttribute('data-step'));
    }

    if(currentStep == 1 && props.location.pathname != '/creacion/forma') {
        if(props.location.pathname == '/creacion/color') {
            setCurrentStep(2);
        } else {
            setCurrentStep(3);
        }
    }


    return (
        <div className="flexContainer">
            <div className="fallingStars"></div>
            <div className="container container--noStars">
                <SpaceShip shape={shape}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
                fireActivated={fireActivated}
                fireColor={fireColor}
                name={name}
                background={background}/>
            </div>

            

            <div className="creator">
                
                <div className="creator__nav">
                    <Link className={currentStep == 1? 'creator__nav--selected' : ''} data-step={1} 
                    onClick={handleStepChange} to="/creacion/forma">Forma</Link>
                    <Link className={currentStep == 2? 'creator__nav--selected' : ''} data-step={2} 
                    onClick={handleStepChange} to="/creacion/color">Color</Link>
                    <Link className={currentStep == 3? 'creator__nav--selected' : ''} data-step={3} 
                    onClick={handleStepChange} to="/creacion/detalles">Detalles</Link>
                </div>

                <Route path='/creacion/forma' render={() => <StepOne shape={shape} setShape={setShape}/>} />

                <Route path='/creacion/color' render={() => <StepTwo primaryColor={primaryColor} 
                setPrimaryColor={setPrimaryColor} 
                secondaryColor={secondaryColor} 
                setSecondaryColor={setSecondaryColor} 
                fireColor={fireColor} 
                setFireColor={setFireColor} 
                fireActivated={fireActivated} 
                setFireActivated={setFireActivated}/>} />

                <Route path='/creacion/detalles' render={() => <StepThree name={name} 
                setName={setName} 
                background={background} 
                setBackground={setBackground}/>} />
            </div>
        </div>
    ); 
}

export default Creator;