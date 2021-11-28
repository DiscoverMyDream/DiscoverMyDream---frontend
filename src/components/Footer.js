import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'


const Footer = () => {
    return (
        <div className='main-footer' id="footer" style={{backgroundColor:'#0A2648', paddingTop:'2vh'}}>
        <div className='footer-middle'>
        <div className='container'>
        <div className='row'>
            {}
            <div className='col-md-4 col-sm-4' style={{color:'white'}}>
                <h4 className='fh'>Contact Us</h4>
                <ul className='list-unstyled'>
                    <li><i className="fas fa-envelope"></i> discovermydream1234@gmail.com</li>
                    <li><i className="fas fa-phone-alt"></i> +91 9876226982</li>
                    <li><i className="fas fa-phone-alt"></i> +91 8427066452</li>
                </ul>
            </div>
            {}
            <div className='col-md-4 col-sm-4' style={{color:'white'}}>
                <h4 className='fh'>Social Media</h4>
                <ul className='list-unstyled'>
                <li><i className="fab fa-twitter"></i> Twitter</li>
                    <li><i className="fab fa-instagram"></i> Instagram</li>
                    <li><i className="fab fa-facebook"></i> Facebook</li>
                </ul>
            </div> 
            {}
            <div className='col-md-4 col-sm-4' style={{color:'white'}} >
                <h4 className='fh'>Company</h4>
                <ul className='list-unstyled'>
                    <li>Author Services</li>
                    <li>Accessibility Statement</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
        {/*Footer Bottom*/}
        <div className='footer-bottom'>
            <p className='text-xs-center' style={{color:'white'}}>
               <h5 className='tradem'> Created by Milind Saini | Dhruv Chopra | Tanveer Sodhi | Ayush Kumar</h5> 
               <Col className='text-center py-3'>Copyright &copy; DiscoverMyDream</Col>
            </p>
        </div>
        </div>
        </div>   
        </div>
    )
    
}

export default Footer;

