import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import {logoutUser  } from "../redux/actionCreators";
const NavComp = (props) => {
  
    const [collapsed, setCollapsed] = useState(true);
  const dispatch = useDispatch();
    const toggleNavbar = () => setCollapsed(!collapsed);
    const handleLogoutClick = () => {
      dispatch(logoutUser());
    }
    return (
        
        <div>
         
          <Navbar light expand='lg' >
        
        <NavbarBrand  href="/" className="mr-auto" >
        
          
    <div className='col-sm-2'>
            <img src='/assets/images/mylogo.png' height='10vh' width='10vh' 
              style={{float:'left',maxHeight:'50%',width:'6vw',height:'5vw'}} /> 
              </div>
              

             { /*
          </div>
          <div style={{width:'100%',textAlign:'center',justifyContent:'center',verticalAlign:'center',marginTop:'auto'}} className='col-sm-2 my-auto'> 
             <h1 className='my-auto' id='top' style={{fontSize:'3.1vw',alignContent:'center'}}>Compra Venta</h1></div></div></div>*/}
          </NavbarBrand>
        
        <NavbarToggler  onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar className='mr-0'>
          <Nav className='col-sm-12 justify-content-end' navbar style={{fontFamily:'Lato', fontSize:'1rem',alignContent:'space-between',verticalAlign:'top'}} >
            <NavItem>
              <NavLink style={{color:'whitesmoke',paddingRight:'3.5vw'}}  href="/home">Home</NavLink>
            </NavItem>
            {props.auth.isAdmin? 
            <NavItem>
              <NavLink style={{color:'whitesmoke',paddingRight:'3.5vw'}}  href="/admin">Dashboard</NavLink>
            </NavItem>:null}
            <NavItem>
              <NavLink style={{color:'whitesmoke',paddingRight:'3.5vw'}}  href="/colleges">Colleges</NavLink>
            </NavItem>
            {!(props.auth.isAuthenticated)?<>
            <NavItem>
              <NavLink style={{color:'whitesmoke',paddingRight:'3.5vw'}}  href="/studentLogin">Student</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'whitesmoke',paddingRight:'1.5vw'}}  href="/adminLogin">Admin</NavLink>
            </NavItem>
            </>:
            <NavItem>
            <NavLink style={{color:'whitesmoke',paddingRight:'2vw'}}  onClick={handleLogoutClick} className='logoutt'>Logout </NavLink>
          </NavItem>}
          </Nav>
        </Collapse>
        {/*</div>*/}
      </Navbar>
      
        </div>
        
    );
};

export default NavComp;