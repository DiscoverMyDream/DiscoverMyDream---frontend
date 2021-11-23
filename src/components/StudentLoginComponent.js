import React, { useState,useEffect } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
  FormFeedback,Spinner,UncontrolledAlert,Alert
} from 'reactstrap';

import { Link, useHistory, withRouter } from "react-router-dom"; 

const SLoginForm = props => {
  
  const [initialState, setState] = useState({
    EmailId: '',
    Password: '',
    touched: {
    EmailId: false,
    Password: false,
}
})
const history= useHistory();
useEffect(() => {
  console.log('auth',props.auth.isAuthenticated)
    if (props.auth.isAuthenticated) history.push('/home');
   
 })
 const [showmsg, setShowMsg] = useState(true);
 const dismissAlert = () =>{
  setShowMsg(false)
}

const handleInputChange =(event) =>{
  
  const target = event.target;
  
  const value = target.value;
  
  const name = target.name;
 

  setState({
    ...initialState,
    [name]: value
  });
}



const handleSubmit = (event) => {
  event.preventDefault();
  props.loginUser({email : initialState.EmailId, password: initialState.Password})
  setShowMsg(true)
}
var err
        if(props.auth.errMess){
            err =JSON.parse(props.auth.errMess.message)}
            else{
              err={error:''}
            }
        const view= !(props.auth.isAuthenticated)?
              props.auth.isLoading ?
              <div style={{textAlign:'center'}}><Spinner type='grow' color = "primary" children={false}/></div>:
              props.auth.errMess ?
              <div style={{ textAlign:'center'}}>
              <Alert color='danger' isOpen={showmsg} toggle={dismissAlert}>
              <h5>{err.error}</h5>
              </Alert>
              </div>:
              null:null

    return(
      <div id="loginform">
        <h2 id="headerTitle" style={{fontWeight:'bolder',fontFamily:'Andada Pro'}}>Student Login</h2>
        <Form onSubmit={handleSubmit}>
          <FormGroup className='rowL'>
          
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="EmailId"
                    value={initialState.EmailId}
                    onChange={handleInputChange} 
                    placeholder="Enter your email"
                    required
                  />
                  
                
          </FormGroup>
          <FormGroup className='rowL'>
          
                  <Label>Password</Label>
                  <Input
                    type="password"
                    name="Password"
                    value={initialState.Password}
                    onChange={handleInputChange} 
                    placeholder="Enter your password"
                    required
                  />
                  
                
          </FormGroup>

         < div id="buttonL" class="rowL">
    <button>Log In</button>
  </div>
  <Col>
  {view}
  </Col>
  {/*<ForgetButton/>*/}
     <RegisterHere/>
          </Form>
        {/*<OtherMethods />*/}
      </div>
    )
};


/*const FormHeader = props => (
    <h2 id="headerTitle" style={{fontWeight:'bold'}}>{props.title}</h2>
);


const Form = props => (
   <div>
     <FormInput description="Email" placeholder="Enter your email" type="email" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/>
     <FormButton title="Log in"/>
     <ForgetButton/>
     <RegisterHere/>
   </div>
);

const FormButton = props => (
  <div id="buttonL" class="rowL">
    <button>{props.title}</button>
  </div>
);

const FormInput = props => (
  <div class="rowL">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder}/>
  </div>  
);*/

const ForgetButton = props => (
    <div  style={{color:'blue', fontFamily:'cursive'}}>
        <a href='#'>Forgot your Password?</a>
     </div>
);

const RegisterHere = props => (
    <div>Don't have an account yet?&nbsp;&nbsp;&nbsp;<button  style={{color:'dodgerblue',borderColor:'transparent',backgroundColor:'transparent', fontFamily:'cursive'}} >&nbsp;<a href="/studentRegister">Register Here</a></button></div>
              
);

const OtherMethods = props => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Google />
    </div>
  </div>
);

const Facebook = props => (
  <a href="#" id="facebookIcon"></a>
);

const Google = props => (
  <a href="#" id="googleIcon"></a>
);

export default SLoginForm;