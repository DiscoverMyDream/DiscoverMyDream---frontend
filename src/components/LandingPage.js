import React from 'react';
import { Button } from 'reactstrap';
import CollegeCarousel from './CollegeCarousel';


const LandingPage = () => {
    return (
       
        <>
        <CollegeCarousel/>
            
           <div className='row justify-content-around' style={{paddingTop:'3vh',paddingBottom:'3vh',backgroundColor:"white"}}>
           
               <div className='col-sm-4' backgroundColor='#837E7C' style={{paddingTop:'1.5vh', paddingBottom:'0.5vh'}}>
                    <div className='Cardy'>
                    <p style={{fontFamily:'Andada Pro'}}>
                   <span className='blink'> <strong> Thinking of Studying Abroad?</strong></span><br/><br/> Appeared for any SAT or GMAT exam..<br/> Check your eligiblity in your dream college here.<br/> (CGPA to GPA conversion tool provided)<br/>
                    </p>
                    
                    <Button color='warning' style={{fontSize:'1.8rem',borderRadius:'50px 10px',fontFamily:'Andada Pro'}}><a style={{textDecoration:"none"}}href='/collegePrediction'> Check Eligibility</a></Button>
                    </div>
            </div>
    
               <div className='col-sm-4'>
               <div className='Cardy'>
                    <p style={{fontFamily:'Andada Pro'}}>
                    <span className='blink'><strong>Wanna pursue engineering?</strong></span><br/><br/> Appeared for JEE Mains/ JEE Advanced exam..<br/>Get your estimated rank on the basis of your marks<br/> Know your chances in different colleges<br/>
                    </p>
                    <Button color='warning' style={{fontSize:'1.8rem',borderRadius:'50px 10px',fontFamily:'Andada Pro'}}><a style={{textDecoration:"none"}} href='/rankPrediction'> Predict Now</a></Button>
               </div>
               </div>
            </div> 
      
        </>
    );
};

export default LandingPage;