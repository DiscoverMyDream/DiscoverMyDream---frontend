import React from 'react';
import NavComp from './NavComp';
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return (
        <div className='container-fluid' style={{backgroundImage:"url('assets/images/header.png')",backgroundPosition: 'center',
        backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}>
            <NavComp/>
            <Jumbotron style={{paddingTop:'5vh',paddingBottom:'20vh'}}>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12" style={{fontFamily:'Merienda',color:'#F7F0F0',alignItems:'center'}}>
                                <h1 style={{fontSize:'7vw',fontFamily:'Merienda'}}>DiscoverMyDream</h1>
                                
                            </div>
                        </div>
                    </div>
                </Jumbotron>
        </div>
    );
};

export default Header;