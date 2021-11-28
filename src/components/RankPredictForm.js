import React,{useState} from 'react';
import { Jumbotron } from 'reactstrap';
import NavDash from './NavDash';
import Header from "./Header";
import Footer from './Footer';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody,
    FormFeedback,Spinner,UncontrolledAlert,Alert
  } from 'reactstrap';

const RankPredictForm = (props) => {
    const [initialState, setState] = useState({
        SelectedExam: 'JEE Mains',
        Marks: '',
        Category:'OPEN',
        touched: {
        Marks:false
    }
    })

    const [data,setData]=useState([1,1,1])
    const [loading,toggleLoading]=useState(false)
    const callM =() =>{
      toggleLoading(true)
      var url = `http://localhost:8000/mainspredict?marks=${initialState.Marks}&totalMarks=${300}&category=${initialState.Category}`;
      console.log(url);
      fetch(url)
      .then(res => res.json())
    .then(data => {
      setData(data);
      toggleLoading(false);
      //console.log(data)
    })
    .catch(rejected => {
        console.log(rejected);
    })
  }
  const callA =() =>{
    toggleLoading(true)
    var url = `http://localhost:8000/advancepredict?marks=${initialState.Marks}&totalMarks=${372}&category=${initialState.Category}`
    fetch(url)
    .then(res => res.json())
  .then(data => {
    setData(data);
    toggleLoading(false);
    //console.log(data)
  })
  .catch(rejected => {
      console.log(rejected);
  })
  
}
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
    initialState.SelectedExam=="JEE Mains"?callM():callA()
    //alert("EmailId: " +initialState.EmailId)
    }
    const rank=data[0]
    const low=data[1]
    const high= data[2]
    return (
<>

        <div className='container-fluid' >
            <div className='container-fluid' style={{padding:0,backgroundImage:"url('/assets/images/header.png')",backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
            <NavDash auth={props.auth} logoutUser={props.logoutUser}/>
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
                    max={initialState.SelectedExam=='JEE Mains'?300:372}
                    required
                    style={{width:'100%'}}
                  />
            
          
        </Col>
              </FormGroup>
              <FormGroup className='rowL'>
              <Label >Category</Label>
              <Col sm={6}>
          <Input type="select" name="Category" required onChange={handleInputChange} className='minimal'>
            <option>OPEN</option>
            <option>OBC-NCL</option>
            <option>SC</option>
            <option>ST</option>
            
          </Input>
        </Col>
              </FormGroup>
              
              
              <br/><br/>
              < div  className="rowL">
    <button type='submit' style={{width:'50%'}}>Predict Now</button>
  </div>
  </Form>
  <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader 
                    toggle={toggle}><h2>{initialState.SelectedExam} Predictor</h2></ModalHeader>
                <ModalBody style={{alignItems:'center',alignSelf:'center',textAlign:'center'}}>
                   
                    <img src='/assets/images/scholar.png'
              style={{maxHeight:'100%',width:'200px',height:'200px',display:'block',margin:'auto'}} /> 
              
                   <br/><br/>
                   {loading?<Spinner type='grow' color = "primary" children={false}/>:
                    <h2 style={{alignSelf:'center'}}>
                    Predicted {initialState.SelectedExam} Rank is <br/><strong style={{alignContent:'center'}}> {rank}</strong>
                    <br/><br/>
                    {/*initialState.SelectedExam=='JEE Mains'? <span>Approximate Percentile is<br/><strong style={{alignContent:'center'}}> ~99.2235</strong></span>:<span></span>*/}
                    Your rank is between {low} and {high}
                    </h2>}
                </ModalBody>
                <ModalFooter style={{alignItems:'center'}} className='justify-content-center'>
                    <Button color="primary" onClick={toggle}>Use Again</Button>
                </ModalFooter>
            </Modal>
              <br/><br/>
            </div>
            </div>
            <Alert color="info">
        Try  <a href="/collegePrediction" className="alert-link">SAT/GMAT College Predictor</a>. Give it a click if you like.
      </Alert>
            </div>

        </div>
        <Footer/>
        </>
    );
};

export default RankPredictForm;