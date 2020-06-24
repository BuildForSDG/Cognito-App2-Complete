import React, {useState} from 'react';
import './components/App.css';
import Footer from './components/Footer';
import logo from './components/logo.png'; 
import axios from 'axios';
// import LoginScreen from './Loginscreen'
import Welcomescreen from './welcomescreen'
import 'bootstrap/dist/css/bootstrap.min.css';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import DeleteIcon from '@material-ui/icons/Delete';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function App() {

  const [reports, setReports] = useState()
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const [search, setSearch] = useState("")
  

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function refresh() {
    let cancel
    axios({
    url: 'http://localhost:8080/reports',
    method: 'GET'
}).then(function (response) {

  setReports([...response.data])

  console.log(response.data);

}).catch(e => {
if (axios.isCancel(e)) return
})
return () => cancel(),

setOpen(true);}
  



  return (
  <div className='App-body' >

    <div className={classes.root}>{reports ? <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        
         <Alert onClose={handleClose} severity="success">
          Page loaded Successfully!!!
        </Alert>
      </Snackbar>: <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        
        <Alert onClose={handleClose} severity="warning">
         Error Loading Page! Try again later!!!
       </Alert>
     </Snackbar>}</div>

  <nav className="Header">
  <div ><a className="navbar-brand App-logo" href="/"><img src={logo} width='30' height='30' alt='logo'></img></a>
  <button className='btn btn-primary' onClick={refresh} >Refresh page</button>
  
  {reports &&
    <form style={{float: 'right'}} className="form-inline my-2 my-lg-0 ml-auto">
    <input className="form-control" onChange={searchReport} placeholder="Search" aria-label="Search" />
    <button className="btn-outline-white" type="submit">Search</button>
  </form>}</div>
</nav>

    {reports ?
          reports.map((report, index) => {function deleteReport(id){
  console.log('clicked' + id)
  setReports(reports => {
    return reports.filter((report, index) => {
      return report._id !== id;
    })
  })
}
              return(<div key={report._id} id={report._id} >
      <div className='container reportContainer' >
      <span>Report {index+1}</span>
      <div>
      <h4>{report.city}</h4>
      <small>|<small> Suburb:</small> {report.location}</small>
      </div>
      <div>
      <h2 className='details'><small>| Detail: </small>{report.details}</h2>
       </div><DeleteIcon onClick={()=>{deleteReport(report._id)}} /></div></div>)
          }
          ): <Welcomescreen />}
         {reports && <Footer /> } </div>  
 )
  }
  
export default App;
