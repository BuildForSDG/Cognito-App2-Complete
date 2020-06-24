import React from 'react';

const date = new Date().getFullYear();

function Footer(){
    return(<footer className="page-footer font-small blue Footer-align">
    <hr></hr>
    <div>Join the fight to END child trafficking for good!!!</div>
    <small className="form-text text-muted">© {date} COGNITO viewer Version 1.0.1</small>  
  </footer>)
    
}


export default Footer;