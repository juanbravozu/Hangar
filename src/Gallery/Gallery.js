import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

function Gallery() {

    return (
        <div className="container">
            <HashRouter>

                <Link className="title title--link" to="/">HANGAR</Link>

            </HashRouter>

            <button className="gallery__btn"></button>
            <button className="gallery__btn gallery__btn--right"></button>
        </div>
    );
}

export default Gallery;