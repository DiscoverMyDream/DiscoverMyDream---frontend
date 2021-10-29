import React from 'react';
import { Button } from 'reactstrap';

const LandingPage = () => {
    return (
        <div className='comtainer' style={{paddingTop:'7vh',fontSize:'2.1rem',paddingBottom:'7vh',background: 'rgba(229, 241, 234, 0.76)'}}>
           <div className='row justify-content-around'>
               <div className='col-sm-4 border border-2' style={{borderRadius:'10px 50px',borderColor:'green',backgroundColor:'#FFFFFF'}}>
                    <p style={{fontFamily:'Andada Pro'}}>
                   <span className='blink'> <strong>Interested in studying abroad?</strong></span><br/><br/> Appeared for any SAT/GRE or GMAT exam..<br/><br/> Check your eligiblity in your dream college here.<br/><br/> (CGPA to GPA conversion tool provided)<br/><br/>
                    </p>
                    <Button color='warning' style={{fontSize:'1.8rem',borderRadius:'50px 10px',fontFamily:'Andada Pro'}}><a href='/collegePrediction'> Check Eligibility</a></Button>
               </div>
               <div className='col-sm-4 border border-2' style={{paddingLeft:'2vw',borderRadius:'50px 10px',borderColor:'green',backgroundColor:'#FFFFFF'}}>
                    <p style={{fontFamily:'Andada Pro'}}>
                    <span className='blink'><strong>Wanna pursue engineering?</strong></span><br/><br/> Appeared for JEE Mains/ JEE Advanced exam.. <br/><br/>Get your estimated rank on the basis of your marks<br/><br/> Know your chances in different colleges<br/><br/>
                    </p>
                    <Button color='warning' style={{fontSize:'1.8rem',borderRadius:'50px 10px',fontFamily:'Andada Pro'}}><a href='/rankPrediction'> Predict Now</a></Button>
               </div>
            </div> 
        </div>
    );
};

export default LandingPage;