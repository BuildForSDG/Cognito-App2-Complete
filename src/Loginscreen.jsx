import React from 'react';
import './components/App.css';
import Form from '../src/components/Login';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function LoginScreen() {
  return (<React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Typography component="div" style={{ backgroundColor: '000000', height: '70vh' }}><div className="body App-header">
      <h1 style={{textAlign: "center"}} >Login</h1>
        <Form />
    </div></Typography>
    </Container>
  </React.Fragment>
    
  )}

export default LoginScreen;
