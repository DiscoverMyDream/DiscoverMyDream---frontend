import React ,{useState,useEffect} from 'react';
import NavComp from './NavComp';
import { Jumbotron } from 'reactstrap';

const Header = (props) => {
    useEffect( ()=>{
        console.log(props.auth)
        
    }
    );
    return (
         <div className='container-fluid' style={{padding:'0px',backgroundPosition: 'center',
         backgroundSize: '1.2em',backgroundRepeat: 'no-repeat'}}>
            <NavComp auth={props.auth} logoutUser={props.logoutUser}/>
            <Jumbotron >
                    <div className="container">
                        <div className="row row-header">
                            
                                
                            
                        </div>
                    </div>
                </Jumbotron>
        </div>
    );
};

export default Header;