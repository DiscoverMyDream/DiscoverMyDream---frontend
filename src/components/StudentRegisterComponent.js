import React,{ Component } from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
    FormFeedback,Spinner,UncontrolledAlert,Alert
  } from 'reactstrap';

class StudentRegisterComponent extends Component{
    constructor(props){
    super(props)
    this.state = {
       FullName: '',
       EmailId: '',
       PhoneNo: '',
       DOB: '' ,
       Password: '',
       ConfirmPassword: '',
       touched: {
        FullName: false,
        EmailId: false,
        PhoneNo: false,
        DOB: false ,
        Password: false,
        ConfirmPassword: false,
        
       }
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
}
    handleInputChange =(event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(value);
        this.setState({
            ...this.state,
            [name]: value
        },console.log(this.state));
    
      }
    handleBlur = (field) => (event) => {
        console.log('hi');
        this.setState({
          touched: {...this.state.touched, [field]: true}
        });
      }

    handleSubmit = async(event) => {
        event.preventDefault();
        await this.props.registerUser({name:this.state.FullName,email:this.state.EmailId,password:this.state.Password});
        //alert("EmailId: " +this.state.EmailId)
        
        
      }


    validate = (
        FullName,
        EmailId,
        PhoneNo,
        Password,
        ConfirmPassword,
   ) => {
     const errors = {
        FullName: '',
        EmailId: '',
        PhoneNo: '',
        Password: '',
        ConfirmPassword: '',
     }
     
     const reg_num = /^[1-9]{1}\s*[0-9]{9}/ ;
    // const reg_dob = /^[0-9]{2}[-][0-9]{2}[-][0-9]{4}/ ;
     const reg_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
 
     if (this.state.touched.FullName && FullName.length < 2)
        errors.FullName = 'Name should be greater than 2 characters';
     if (this.state.touched.EmailId && EmailId.split('').filter(x => x === '@').length !== 1)
        errors.EmailId = 'Email not valid';
      if (this.state.touched.PhoneNo && !reg_num.test(PhoneNo) )
        errors.PhoneNo = 'Number not Valid'; 
     
     
    
     if (this.state.touched.Password && !reg_password.test(Password) )
       errors.Password = 'Password must be a minimum of 8 characters including number, Upper, Lower And one special character.'
     if(this.state.touched.Password && this.state.touched.ConfirmPassword && Password !== ConfirmPassword)
       errors.ConfirmPassword = 'Password didn\'t matched! '
         
 
     
     return errors;
     }
     render(){
     const myerrors = this.validate(
        this.state.FullName,
        this.state.EmailId,
        this.state.PhoneNo,
        this.state.Password,
        this.state.ConfirmPassword,
     );
     const shouldSubmit = myerrors.ConfirmPassword || myerrors.EmailId || myerrors.FullName || myerrors.Password ||  myerrors.PhoneNo  ;

    return (
        <div id="loginform">
        <h2 id="headerTitle" style={{fontWeight:'bold',fontFamily:'Andada Pro'}}>Student Register</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className='rowL'>
          
                    <Label >Name</Label>
                  <Input type="text" name="FullName" id="User-FullName"
                    value={this.state.FullName || ''}
                    onChange={this.handleInputChange} valid={myerrors.FullName === ''} invalid={myerrors.FullName !==''} onBlur={this.handleBlur('FullName')}
                    placeholder="Full Name"
                    required
                  />
                  <FormFeedback>{myerrors.FullName}</FormFeedback>
                  
                
          </FormGroup>
          <FormGroup className='rowL'>
          
          <Label >Email</Label>
                  <Input 
                    type="email"
                    name="EmailId"
                    id="User-Email"
                    value={this.state.EmailId}
                    onChange={this.handleInputChange} valid={myerrors.EmailId === ''} invalid={myerrors.EmailId !==''} onBlur={this.handleBlur('EmailId')}
                    placeholder="youremail@email.com"
                    required
                  />
                  <FormFeedback>{myerrors.EmailId}</FormFeedback>
                  
                
          </FormGroup>
          {/*
          <FormGroup className='rowL'>
          <Label>Phone Number</Label>
          <Input
                    type="text"
                    name="PhoneNo"
                    id="User-Phone"
                    value={this.state.PhoneNo}
                    onChange={this.handleInputChange} valid={myerrors.PhoneNo === ''} invalid={myerrors.PhoneNo !==''} onBlur={this.handleBlur('PhoneNo')}
                    placeholder="9999999999"
                    maxLength="10"
                    // pattern="[+][0-9]{2}(| )[0-9]{10}"
                    required
                  />
              </FormGroup>
              <FormGroup className='rowL'>
                  <Label>DOB</Label>
                  <Input
                    type="date"
                    name="DOB"
                    id="User-DOB"
                    value={this.state.DOB}
                    onChange={this.handleInputChange} onBlur={this.handleBlur('DOB')}
                    placeholder="DD/MM/YYYY"
                    required
                  />
                  
                </FormGroup>*/
          }
                <FormGroup className='rowL'>
                  <Label >Password</Label>
                  <Input
                    type='password'
                    name="Password"
                    id="Sign-Up-Password"
                    value={this.state.Password}
                    onChange={this.handleInputChange} valid={myerrors.Password === ''} invalid={myerrors.Password!==''} onBlur={this.handleBlur('Password')}
                    placeholder="********"
                    required 
                  />
                  <FormFeedback>{myerrors.Password}</FormFeedback>
                  </FormGroup>
                  <FormGroup className='rowL'>
                  <Label >Confirm Password</Label>
                  <Input
                    type='password'
                    name="ConfirmPassword"
                    id="Confirm-Password"
                    value={this.state.ConfirmPassword}
                    onChange={this.handleInputChange} valid={myerrors.ConfirmPassword === ''} invalid={myerrors.ConfirmPassword !==''} onBlur={this.handleBlur('ConfirmPassword')}
                    placeholder="********"
                    required
                  />
                  <FormFeedback>{myerrors.ConfirmPassword}</FormFeedback>
                  </FormGroup>
         < div id="buttonL" class="rowL">
    <button disabled={shouldSubmit}>Register</button>
    <>
    {this.props.register.isLoading?<div style={{textAlign:'center'}}><Spinner type='grow' color = "primary" children={false}/></div>:
    this.props.register.isRegistered?
    <div style={{ textAlign:'center'}}>
              <Alert color='success'>
              <h5>Registered Successfully!</h5>
              </Alert>
              </div>:null}
    </>
    </div>
    <div style={{textAlign:'center'}}>Already Registered?&nbsp;&nbsp;&nbsp; <button type='button'  style={{color:'blue',borderColor:'transparent',backgroundColor:'transparent'}}><a href="/studentLogin">Sign In </a></button></div>
  
  </Form>
       {/* <OtherMethods/>   */} 
        </div>
    );
}};

const OtherMethods = props => (
    <div id="alternativeLogin">
      <label>Or sign up with:</label>
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

export default StudentRegisterComponent;