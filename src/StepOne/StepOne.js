import React from 'react';
import PropTypes from 'prop-types';

function StepOne(props) {

    function handleSelectShape(event) {
        const target = event.target.closest('div');
        props.setShape(parseInt(target.getAttribute('data-shape')));
    } 

    return (
        <div className='creator__step'>
            <div className="creator__option">
                <h3>Base</h3>

                <div className='creator__buttonsContainer'>
                    <div data-shape={1} onClick={handleSelectShape} 
                    className={props.shape === 1 ? 'creator__btn creator__btn--selected' : 'creator__btn'}>
                        <img src='/resources/ship1Icon.png' alt=''/>
                    </div>

                    <div data-shape={2} onClick={handleSelectShape} 
                    className={props.shape === 2 ? 'creator__btn creator__btn--selected' : 'creator__btn'}>
                        <img src='/resources/ship2Icon.png' alt=''/>
                    </div>

                    <div data-shape={3} onClick={handleSelectShape} 
                    className={props.shape === 3 ? 'creator__btn creator__btn--selected' : 'creator__btn'}>
                        <img src='/resources/ship3Icon.png' alt=''/>
                    </div>

                    <div data-shape={4} onClick={handleSelectShape} 
                    className={props.shape === 4 ? 'creator__btn creator__btn--selected' : 'creator__btn'}>
                        <img src='/resources/ship4Icon.png' alt=''/>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

StepOne.propTypes = {
    shape: PropTypes.number,
    setShape: PropTypes.func,
}

export default StepOne;