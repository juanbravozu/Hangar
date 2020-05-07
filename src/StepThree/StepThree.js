import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

function StepThree(props) {

    const [ focused, setFocused ] = React.useState(false);

    function handleName(event) {
        if(event.target.value.length <= 7) {
            props.setName(event.target.value);
        }
        
        
    }

    function handleFocus(event) {
        setFocused(true);
    }

    function handleBlur(event) {
        if(!event.target.value) {
            setFocused(false);
        }
    }

    function handleChangeBg(event) {
        props.setBackground(event.target.closest('div').getAttribute('data-bg'));
    }

    if(props.name && !focused) {
        setFocused(true);
    }

    return (
        <div className="creator__step"> 
            <div className={focused? 'creator__textInput--focused creator__textInput' : 'creator__textInput'}>
                <label htmlFor="shipName">Nombre de la nave</label>
                <input id="shipName" type="text" onFocus={handleFocus} onChange={handleName} 
                onBlur={handleBlur} value={props.name}/>
            </div>

            <div className="creator__option">
                <h3>Fondo</h3>

                <div className='creator__buttonsContainer'>
                    <div data-bg={1} onClick={handleChangeBg} 
                    className={props.background == 1 ? 'creator__btn creator__btn--selected' : 'creator__btn'}>
                        <img src='/resources/ship1Icon.png' alt=''/>
                    </div>

                    <div data-bg={2} onClick={handleChangeBg} 
                    className={props.background == 2 ? 'creator__btn creator__btn--selected' : 'creator__btn'}>
                        <img src='/resources/ship2Icon.png' alt=''/>
                    </div>

                    <div data-bg={3} onClick={handleChangeBg} 
                    className={props.background == 3 ? 'creator__btn creator__btn--selected' : 'creator__btn'}>
                        <img src='/resources/ship3Icon.png' alt=''/>
                    </div>

                    <div data-bg={4} onClick={handleChangeBg} 
                    className={props.background == 4 ? 'creator__btn creator__btn--selected' : 'creator__btn'}>
                        <img src='/resources/ship4Icon.png' alt=''/>
                    </div>
                </div>
            </div>

            <Link className="creator__end" to="/galeria">
                <Button variant="contained" color="primary">Terminar nave</Button>
            </Link>
        </div>
    );
}

StepThree.propTypes = {
    name: PropTypes.string,
    setName: PropTypes.func,
    background: PropTypes.number,
    setBackground: PropTypes.func,
}

export default StepThree;