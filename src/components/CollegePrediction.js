import React,{useState} from 'react';
import { Jumbotron } from 'reactstrap';
import Header from "./Header";
import Footer from './Footer';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody,
    FormFeedback,Spinner,UncontrolledAlert,Alert
  } from 'reactstrap';
import CGPAConverter from './CGPAConverter';
import NavDash from './NavDash';

const CollegePrediction = (props) => {
    const [initialState, setState] = useState({
        SelectedExam: 'SAT',
        Marks: '',
        SCollege:'California Institute of Technology',
        GCollege:'Stanford GSB',
        GPA: '',
        touched: {
        Marks:false,
        GPA:false
    }
    })
    const [modal, setModal] = React.useState(false);
  
    const toggle = () => setModal(!modal);
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
        toggle();
        }
    const satClg = [
        'California Institute of Technology',
        'Harvard University',
        'Washington University in St Louis',
        'Duke University',
        'University of Chicago',
        'Stanford University',
        'Massachusetts Institute of Technology',
        'Yale University',
        'Princeton University',
        'Harvey Mudd College',
        'Johns Hopkins University',
        'Rice University',
        'Dartmouth College',
        'Vanderbilt University',
        'Columbia University in the City of New York',
        'University of Notre Dame',
        'Swarthmore College',
        'University of Pennsylvania',
        'Carnegie Mellon University'
      ]
      const gmatClg=[
        'Stanford GSB',
       'Wharton (UPenn)',
        'Chicago Booth',
        'Harvard Business School',
        'Kellogg (Northwestern)',
        'Yale SOM',
        'New York Stern',
        'Tuck (Dartmouth)',
        'MIT Sloan',
        'Columbia University',
        'Berkeley Haas',
        'UCLA Anderson',
        'Ross Michigan',
        'Darden (Virginia)',
        'UNC Kenan-Flagler',
        'Cornell Johnson',
        'Duke Fuqua',
        'Washington Univ. (Olin)',
        'McCombs (Texas-Austin)',
        'Georgetown McDonough',
        'Carnegie Mellon Tepper',
      ]
      const clgL=initialState.SelectedExam=='SAT'?satClg:gmatClg
    const pairList = clgL.map((k) => {
        return (
            <option key={k} value={k}>{k}</option>
        )
    } );
    return (
      <>
     
        <div className='container-fluid' style={{padding:0}}>
        <div className='container-fluid' style={{backgroundImage:"url('assets/images/header.png')",backgroundPosition: 'center',
    backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
        <NavDash/>
        </div>
         <Jumbotron style={{paddingTop:'5vh',paddingBottom:'5vh'}}>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12" style={{fontFamily:'Merienda',alignItems:'center'}}>
                            <h1 style={{fontSize:'4vw',fontFamily:'Merienda'}}>SAT/GMAT College Predictor</h1>
                            
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <CGPAConverter gradeConversion={props.gradeConversion}/>
            <div className='container-fluid justify-content-center'>
                <div className='row justify-content-center' style={{paddingBottom:'20px'}}>
                <div className='col-md-6 justify-content-center border border-2' style={{borderRadius:'50px 50px',borderColor:'green',backgroundColor:'#FFFFFF',padding:'15px'}}>
                
            <Form onSubmit={handleSubmit}>
          <FormGroup className='rowL'>
              <Label style={{fontSize:'130%'}} >Choose the Exam</Label>
              <Col sm={6}>
          <Input type="select" name="SelectedExam" required onChange={handleInputChange} className='minimal' >
            <option>SAT</option>
            <option>GMAT</option>
            
          </Input>
        </Col>
              </FormGroup>
              <FormGroup className='rowL justify-content-center'>
              <Label style={{fontSize:'130%'}}>GPA</Label>
              <Col sm={6}>
              <Input
                    type="number"
                    name="GPA"
                    value={initialState.GPA}
                    onChange={handleInputChange} 
                    placeholder="Enter your GPA(max 4)"
                    required
                    style={{width:'100%'}}
                    step='0.01'
                    min='0.31'
                    max='4'
                  />
            
          
        </Col>
              </FormGroup>
              <FormGroup className='rowL justify-content-center'>
              <Label style={{fontSize:'130%'}} >Marks</Label>
              <Col sm={6}>
              <Input
                    type="number"
                    name="Marks"
                    value={initialState.Marks}
                    onChange={handleInputChange} 
                    placeholder={initialState.SelectedExam=='SAT'?'Enter your Marks(out of 1600)':'Enter your Marks(out of 800)'}
                    min={initialState.SelectedExam=='SAT'?400:200}
                    max={initialState.SelectedExam=='SAT'?1600:800}
                    required
                    style={{width:'100%'}}
                  />
            
          
        </Col>
              </FormGroup>
              <FormGroup className='rowL'>
              <Label style={{fontSize:'130%'}} >Select the college</Label>
              <Col sm={6}>
          <Input type="select" name="College" required onChange={handleInputChange} className='minimal' value={initialState.SelectedExam=='SAT'?initialState.SCollege:initialState.GCollege}>
            {pairList}
            
          </Input>
        </Col>
              </FormGroup>
              
              
              <br/><br/>
              < div  className="rowL">
    <button type='submit' style={{width:'50%'}}>Predict Now</button>
    <br/><br/>
  </div>
  </Form>
  <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader 
                    toggle={toggle}><h2>{initialState.SelectedExam} College Predictor</h2></ModalHeader>
                <ModalBody style={{alignItems:'center',alignSelf:'center',textAlign:'center'}}>
                   
                    <img src='/assets/images/scholar.png'
              style={{maxHeight:'100%',width:'200px',height:'200px',display:'block',margin:'auto'}} /> 
              
                   <br/><br/>
                    <h2 style={{alignSelf:'center'}}>
                    Chances of your getting into <span style={{color:'purple'}}> {initialState.SelectedExam=='SAT'?initialState.SCollege:initialState.GCollege}</span> is <br/><strong style={{alignContent:'center'}}> 67%</strong>
                    <br/><br/>
                    
                    </h2>
                    Explore <a href=''>more</a> about this University.
                </ModalBody>
                <ModalFooter style={{alignItems:'center'}} className='justify-content-center'>
                    <Button color="primary" onClick={toggle}>Use Again</Button>
                </ModalFooter>
            </Modal>
  </div>
  </div>
  </div>
            <Alert color="info">
        Try  <a href="/rankPrediction" className="alert-link">JEE Mains/Advanced Rank Predictor</a>. Give it a click if you like.
      </Alert>
        </div>
        <Footer/>
        </>
    );
};

export default CollegePrediction;