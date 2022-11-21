import React, {Component} from 'react';
import { useNavigate } from 'react-router';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
//import About from './About';

//import About from '../../../pages/About';
//import Profile from '../../../pages/Profile';
//import Todo from '../../../pages/Todo';

//function handleClick() {
  //let navigate = useNavigate();
  //navigate('../../../pages/Profile');
//}




class LoginManual extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      emailnow: "",
      passwordnow: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    //let navigate = useNavigate();
    e.preventDefault();
    const { name, emailnow, password } = this.state;
    
    console.log(emailnow, password);
    fetch("http://localhost:3000/user/getOne/"+emailnow, {
      method: "GET",
      mode: 'cors',
      cache: 'no-cache',
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
      
    })
    .then(res => {
      if (res.status==200){

      
      //navigate('../../../pages/Home');
      //window.location.href = "http://localhost:3001";
      window.location.href = "http://localhost:3001";
      //console.log("response: ", res.status);
      
      
    }
    else{
      alert("Invalid credentials!");
    }
    })
    .catch(err => {
      console.log("error:", err);
      
    });
  }

  

  render() {
    return (

      
      
      <div className='half-width white-bg'>
        <h4>Login Manually</h4>
        <br/>
        <form onSubmit={this.handleSubmit}>

          <div className='form-group'>
            <input type="text" className='form-control' placeholder='Email' onChange={(e) => this.setState({ emailnow: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <input type="password" className='form-control' placeholder='Password' onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          
          <button type="submit" className='btn btn-primary right-btn'>Log in</button>
        </form>
      </div>

      



    );
  }
}

//<button type="submit" className='btn btn-primary right-btn' onClick={handleClick}>Log in</button>
//<button type="submit" className='btn btn-primary right-btn'>Log in</button>

export default LoginManual;
