import React, {useState} from 'react';
import './components/App.css';
import Footer from './components/Footer';
import logo from './components/logo.png'; 
import axios from 'axios'
// import LoginScreen from './Loginscreen'
import Welcomescreen from './welcomescreen'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [reports, setReports] = useState()

 function refresh() {axios({
    
    url: 'http://localhost:3100/reports',
    method: 'GET',
}).then(function (response) {

  setReports(response.data)

  console.log(response.data);
}).catch(e => {
if (axios.isCancel(e)) return
})
 }

  return (
  <div>
  <nav className="navbar default-color Header">
  <div ><a className="navbar-brand" href="/"><img src={logo} width='30' height='30' alt='logo' className='App-logo'></img></a>
  <button className='btn btn-primary' onClick={refresh} >Refresh page</button>
  </div>
  {reports && <div style={{float: 'right'}}>
  <form className="form-inline my-2 my-lg-0 ml-auto">
    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Search</button>
  </form>
  </div>}
</nav>

    {reports ?
          reports.map((report, index) => {
            
              return(<div key={report._id}><div className='row'>
      <div className='container reportContainer'>
      <span className='indexReport'>Report {index+1}</span>
      <div>
      <h4>{report.city}</h4>
      <small>|<small>Suburb:</small> {report.location}</small>
      </div>
      <div>
      <h2 className='details'>{report.details}</h2>
      </div></div></div><div> </div></div>)
          }
          ): <Welcomescreen />}
         {reports && <Footer /> } </div>  
 )
  }

export default App;
