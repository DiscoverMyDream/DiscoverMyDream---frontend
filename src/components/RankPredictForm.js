import React,{useState} from 'react';
import { Jumbotron } from 'reactstrap';
import NavDash from './NavDash';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
    FormFeedback,Spinner,UncontrolledAlert,Alert
  } from 'reactstrap';

const RankPredictForm = () => {
    const [initialState, setState] = useState({
        SelectedExam: 'JEE Mains',
        Marks: '',
        Category:'Open',
        touched: {
        Marks:false
    }
    })
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
    //alert("EmailId: " +initialState.EmailId)
    }
    return (

        <div className='container-fluid' style={{padding:0}}>
            <div className='container-fluid' style={{backgroundImage:"url('assets/images/header.png')",backgroundPosition: 'center',
        backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
            <NavDash/>
            </div>
             <Jumbotron style={{paddingTop:'5vh',paddingBottom:'5vh'}}>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12" style={{fontFamily:'Merienda',alignItems:'center'}}>
                                <h1 style={{fontSize:'4vw',fontFamily:'Merienda'}}>JEE Mains/Advanced<br/> Rank Predictor</h1>
                                
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            <div className='container-fluid justify-content-center'>
                <div className='row justify-content-center' style={{paddingBottom:'20px'}}>
                <div className='col-md-4 justify-content-center border border-2' style={{borderRadius:'50px 50px',borderColor:'green',backgroundColor:'#FFFFFF',padding:'15px'}}>
                
            <Form onSubmit={handleSubmit}>
          <FormGroup className='rowL'>
              <Label >Choose the Exam</Label>
              <Col sm={6}>
          <Input type="select" name="SelectedExam" required onChange={handleInputChange} className='minimal' >
            <option>JEE Mains</option>
            <option>JEE Advanced</option>
            
          </Input>
        </Col>
              </FormGroup>
              <FormGroup className='rowL justify-content-center'>
              <Label >Marks</Label>
              <Col sm={6}>
              <Input
                    type="number"
                    name="Marks"
                    value={initialState.Marks}
                    onChange={handleInputChange} 
                    placeholder="Enter your Marks"
                    required
                    style={{width:'100%'}}
                  />
            
          
        </Col>
              </FormGroup>
              <FormGroup className='rowL'>
              <Label >Category</Label>
              <Col sm={6}>
          <Input type="select" name="Category" required onChange={handleInputChange} className='minimal'>
            <option>Open</option>
            <option>EWS</option>
            <option>OBC-NCL</option>
            <option>SC</option>
            <option>ST</option>
            
          </Input>
        </Col>
              </FormGroup>
              
              </Form>
              <br/><br/>
              < div  className="rowL">
    <button style={{width:'50%'}}>Predict Now</button>
  </div>
              <br/><br/>
            </div>
            </div>
            </div>

        </div>
    );
};

export default RankPredictForm;