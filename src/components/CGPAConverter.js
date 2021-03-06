import React,{useState} from 'react';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, Modal, ModalFooter,
    ModalHeader, ModalBody,
    FormFeedback,Spinner,UncontrolledAlert,Alert
  } from 'reactstrap';
  import { connect } from "react-redux";
  import{getMainsPrediction,getAdvancedPrediction,getSatCollegePrediction,registerUser,loginUser,fetchSCollege,updateSCollege,deleteSCollege,postSCollege,logoutUser, convertGrade} from '../redux/actionCreators';



  const mapDispatchToProps = (dispatch) => ({

    convertGrade: (cgpa) => dispatch(convertGrade(cgpa)),
    
  })
  
  const mapStateToProps = (state) => {
    return {
        
        gradeConversion: state.gradeConversion,
      
    }
  }
  

const CGPAConverter = (props) => {
    const [initialState, setState] = useState({
        CGPA: '',
        touched: {
        CGPA:false
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

    const handleSubmit =async (event) => {
    event.preventDefault();
    setShowGpa(true);
    //await props.convertGrade(initialState.CGPA)
    call();
    }
    const [showGpa,setShowGpa]=useState(false);
    const [data,setData]=useState([10,'A'])
    const [loading,toggleLoading]=useState(false)
    const convert= () => {
        setShowGpa(true);
        call();
    }
    const call =() =>{
      toggleLoading(true)
      var url = 'http://localhost:8000/gradeConvert?cgpa='+initialState.CGPA;
      fetch(url)
      .then(res => res.json())
    .then(data => {
      setData(data);
      toggleLoading(false);
      //console.log(data)
    })
    .catch(rejected => {
        console.log(rejected);
    });
   //await props.convertGrade(initialState.CGPA)

      

    }
    //const grade = props.gradeConversion.grade
    const grade = data
    const GPA= grade[0]
    const grad=grade[1]
    return (
        <div className='container-fluid  justify-content-center' style={{alignItems:'center',paddingBottom:'30px'}}>
            <div className='row center justify-content-center'style={{alignItems:'center',paddingBottom:'30px'}}>
            <div className='col-md-6 center justify-content-center' style={{background:'#c99e66',alignItems:'center'}}>
                <span style={{fontSize:'150%',color:'whitesmoke'}}>10 Point Scale CGPA to GPA</span>
            </div>
            </div>
            
            <div className='row center justify-content-center' style={{alignItems:'center',paddingBottom:'30px'}}>
                <div className='col-md-6 justify-content-center'>
            <Form onSubmit={handleSubmit}>
            <FormGroup className='justify-content-center ' style={{flexDirection:'row',alignContent:'center'}}>
              <Label style={{fontSize:'130%'}}>CGPA</Label>
              <Col sm={6} style={{margin:'auto'}} >
              <Input
                    type="number"
                    name="CGPA"
                    value={initialState.CGPA}
                    onChange={handleInputChange} 
                    placeholder="Enter your CGPA(max 10)"
                    required
                    style={{width:'100%'}}
                    step='any'
                    min='1'
                    max='10'
                  />
            
          
        </Col>
              </FormGroup>
              <br/>
              <div class="col-md-2 text-center" style={{margin:'auto'}}>
            <button class="btn btn-dark " type='submit' >Convert</button>
            
              
          </div>
</Form>
</div>
              { /*<div className='col-md-5'>
                    <h4>
                Enter CGPA(Max 10)    &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                
                <input type="number" required max='10' min='1' style={{border:0, borderBottom: '1px dotted', background: 'transparent'}}></input>
                
                </h4>
    </div>*/}
               {/*<div class="col-md-2 text-center">
            <a class="btn btn-dark " href="#" onClick={convert}>Convert</a>
            
              
    </div>*/}
            
    </div>
            
            <div className='row center justify-content-center'>
            <div className="col-md-5" id='show_gpa'>
              
                {showGpa?loading?<Spinner type='grow' color = "primary" children={false}/>:<div className="well" ><p style={{fontSize:'130%'}} >As per the 4 point scale, your GPA is <b>{GPA}</b></p><p style={{fontSize:'130%'}}>Your grade is <b>{grad}</b></p></div>:<div class="well grey-bg text-white" style={{backgroundColor:'#186344',fontSize:'130%'}}>Enter CGPA to check GPA &amp; Grade</div>}
            </div>
            
                
            </div>
        </div>
    );
};

export default CGPAConverter;


