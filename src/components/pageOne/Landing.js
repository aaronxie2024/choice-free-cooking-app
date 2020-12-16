import React from 'react';
import SignIn from '../SignIn.js'
import { Link } from 'react-router-dom';


function Landing(){

    return(
        <div style={{display:'flex', alignContent:'center', justifyContent:'center' }}>
            <Link to='/recipes'> <button>Starts Here</button> </Link>
            <SignIn></SignIn>
        </div>
       
    )
}

export default Landing;