import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

const NavComp = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        
        <div>
          <Navbar light expand='lg' >
        
        <NavbarBrand  href="/" className="mr-auto" >
        
          
    <div className='col-sm-2'>
            <img src='/assets/images/mylogo.png' height='50vh' width='50vh' 
              style={{float:'left',maxHeight:'100%',width:'14vw',height:'12vw'}} /> 
              </div>
              

             { /*
          </div>
          <div style={{width:'100%',textAlign:'center',justifyContent:'center',verticalAlign:'center',marginTop:'auto'}} className='col-sm-2 my-auto'> 
             <h1 className='my-auto' id='top' style={{fontSize:'3.1vw',alignContent:'center'}}>Compra Venta</h1></div></div></div>*/}
          </NavbarBrand>
        
        <NavbarToggler  onClick={toggleNavbar} className="me-0"/>
        <Collapse  isOpen={!collapsed} navbar className='mr-0'>
          <Nav className='col-sm-12 justify-content-end' navbar style={{fontFamily:'Andada Pro', fontSize:'2.35rem',alignContent:'space-between',verticalAlign:'top'}} >
            <NavItem>
              <NavLink style={{color:'#FEFAFA',paddingRight:'5.5vw'}}  href="/home">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'#FEFAFA',paddingRight:'5.5vw'}}  href="">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'#FEFAFA',paddingRight:'5.5vw'}}  href="/studentLogin">Student</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'#FEFAFA',paddingRight:'1.5vw'}}  href="/adminLogin">Admin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:'#FEFAFA',paddingRight:'1.5vw'}}  href="/CollegePage">Colleges</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {/*</div>*/}
      </Navbar>
        </div>
        
    );
};

export default NavComp;