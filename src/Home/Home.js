import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className="container container--home">
            <h1 className="title title--animation">HANGAR</h1>
            
            <div className="sun"></div>
            <div className="planet"></div>
            
            
            <Link className="link" to="/creacion/forma">Nueva Nave</Link>
            <Link className="link link--dark" to="/galeria">Mis Naves</Link>
        
        </div>
        );
    }
    
    export default Home;
    