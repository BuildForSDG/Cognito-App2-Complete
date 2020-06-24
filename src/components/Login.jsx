import React, {Component} from "react";
import axios from 'axios';

export default class Form extends Component{

  constructor(props) {
    super(props)

    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this)


    this.state = {
        code: '',
        passsword: '',
    }
}

onChangeCode(e) {
    this.setState({ code: e.target.value })
}

onChangePassword(e) {
    this.setState({ password: e.target.value })
}

onSubmit(e) {
    e.preventDefault()

    const userObject = {
        code: this.state.code,
        password: this.state.password
    };

    axios.post('http://localhost:3200/users/login', userObject)
        .then((res) => {
            console.log(res.data)
            alert('Login Success!')
            
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ code: '', password: '' })
}


  render(){
    return (<form onSubmit={this.onSubmit} className='column justify-content-center' action='/' method='post'>
  <div className="form-group">
    <small id="emailHelp" className="form-text text-muted">Enter Agency Code</small>
    <input type="text" required={true} value={this.state.code} onChange={this.onChangeCode} className="form-control" id="code" placeholder='MOGYAS12KJLGH'></input>
  </div>
  <div className="form-group">
    <small id="emailHelp" className="form-text text-muted">PIN</small>
    <input required={true} type="password" value={this.state.password} onChange={this.onChangePassword} className="form-control" id="password" placeholder=''></input>
  </div>
  <div className="form-group form-check">
    {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"></input> */}
    <small id="emailHelp" className="form-text text-muted">Once logged in please refresh feed.</small>
    {/* <label class="form-check-label" for="exampleCheck1">Click here to</label> */}
  </div>
  <button name ='submit' type="submit" className="btn btn-primary" value="Create User">Submit</button>
</form>)
  }
};