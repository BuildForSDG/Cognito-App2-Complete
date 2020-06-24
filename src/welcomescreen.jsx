import React from 'react';
import './components/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import WelcomeCard from './components/welcomecard'

function Welcomescreen() {
  return (<React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '000000', height: '10vh' }}><div className="body App-header">
      <h1 style={{textAlign: "center"}} >Welcome to COGNITO viewer</h1>
      <div>
        <WelcomeCard /> 
        </div>
    </div></Typography>
    </Container>
  </React.Fragment>
    
  )}

export default Welcomescreen;
