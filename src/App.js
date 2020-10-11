import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux"
import Store from "./store"
import Phone from './phoneNumber'
import OTP from "./optVerify"
import Email from "./Email"
import Profile from "./Profile"
import emailVerification from "./EmailVerification"
import signUp from "./Signup"
import Logout from "./Logout"
import{ BrowserRouter, Route, Switch} from "react-router-dom"

class App extends Component {

  render(){
    return (
      <Provider store={Store}>
        
        <BrowserRouter>
          <div>
          <Route exact path="/"  component={Phone}></Route>
          <Route exact path="/OTPverfiy" component={OTP}></Route>
          <Route exact path="/email" component={Email}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/emailVerification" component={emailVerification}></Route>
          <Route exact path="/Signup" component={signUp}></Route>
          <Route exact path="/Logout" component={Logout}></Route>




          </div>
        </BrowserRouter>
       
    
      </Provider>
      
      
    );
  }

  // render(){
  //   return (
  //     <Provider store={Store}>
  //     {/* <BrowserRouter> */}
  //     <div className="App">
  //     <phoneNumber/>
  //     {/* <Route to="/" component={phoneNumber}></Route> */}
  //     </div>
  //     {/* </BrowserRouter> */}
    
  
  //   </Provider>
      
  //   );
  // }
     
  
}

export default App;
