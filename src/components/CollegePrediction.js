import React from 'react';
import { Jumbotron } from 'reactstrap';
import CGPAConverter from './CGPAConverter';
import NavDash from './NavDash';

const CollegePrediction = () => {
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
                            <h1 style={{fontSize:'4vw',fontFamily:'Merienda'}}>GRE/SAT College Predictor</h1>
                            
                        </div>
                    </div>
                </div>
            </Jumbotron>
            <CGPAConverter/>
        </div>
    );
};

export default CollegePrediction;