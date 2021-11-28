import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const NavDash = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const handleLogoutClick = () => {
      props.logoutUser();
    }
    return (
        
        <div>
          
          <Navbar light expand='lg' >
        
        <NavbarBrand  href="/" className="mr-auto" >
        
          
    <div className='col-sm-2'>
            <img src='/assets/images/mylogo.png' height='10vh' width='10vh' 
              style={{float:'left',maxHeight:'50%',width:'7vw',height:'6vw'}} /> 
              </div>
              

            
          </NavbarBrand>
        
        <NavbarToggler  onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar className='mr-0'>
          <Nav className='col-sm-12 justify-content-end' navbar style={{fontFamily:'Andada Pro', fontSize:'1.35rem',alignContent:'space-between',verticalAlign:'top'}} >
            <NavItem>
              <NavLink style={{color:'#FEFAFA',paddingRight:'3.5vw'}}  href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'#FEFAFA',paddingRight:'3.5vw'}}  href="/colleges">Colleges</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink style={{color:'red',paddingRight:'1.5vw'}}  onClick={handleLogoutClick} className="logoutt">Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {/*</div>*/}
      </Navbar>
        </div>
        
    );
};

export default NavDash;