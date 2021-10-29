import React,{useState} from 'react';

const CGPAConverter = () => {
    const [showGpa,setShowGpa]=useState(false);
    const convert= () => {
        setShowGpa(true);
    }
    return (
        <div className='container-fluid  justify-content-center' style={{alignItems:'center',paddingBottom:'30px'}}>
            <div className='row center justify-content-center'style={{alignItems:'center',paddingBottom:'30px'}}>
            <div className='col-md-6 center justify-content-center' style={{background:'#c99e66',alignItems:'center'}}>
                <span style={{fontSize:'150%',color:'whitesmoke'}}>10 Point Scale CGPA to GPA</span>
            </div>
            </div>
            <div className='row center justify-content-center' style={{alignItems:'center',paddingBottom:'30px'}}>
                <div className='col-md-5'>
                    <h4>
                Enter CGPA(Max 10)    &nbsp;  &nbsp;  &nbsp;  &nbsp; 
                <input type="number" step='0.01' required max='10' min='1' style={{border:0, borderBottom: '1px dotted', background: 'transparent'}}></input>
                </h4>
                </div>
                <div class="col-md-2 text-center">
            <a class="btn btn-dark " href="#" onClick={convert}>Convert</a>
              
          </div>
            </div>
            <div className='row center justify-content-center'>
            <div className="col-md-5" id='show_gpa'>
                {showGpa?<div className="well" ><p style={{fontSize:'130%'}} >As per the 4 point scale, your GPA is <b>3.02</b></p><p style={{fontSize:'130%'}}>Your grade is <b>A</b></p></div>:<div class="well grey-bg text-white" style={{backgroundColor:'#186344',fontSize:'130%'}}>Enter CGPA to check GPA &amp; Grade</div>}
            </div>
            
                
            </div>
        </div>
    );
};

export default CGPAConverter;