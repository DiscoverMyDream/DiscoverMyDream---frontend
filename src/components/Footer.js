import React from 'react'

function Footer() {
    return (
        <footer className="container-fluid mt-auto wrapper flex-grow-1 justify-content-center" id="footer" style={{backgroundColor:'#0A2648',fontSize:'30px'}} >
            <div className="row ">
                <div className="row mr-auto ml-auto " style={{display:'flex',flexDirection:'column',fontFamily:'Andada Pro'}}>

                    <a href="" style={{color:'white'}} target="_blank" rel="noopener noreferrer">Contact Us</a>

                    <a href="" style={{color:'white'}} target="_blank" rel="noopener noreferrer">Meet the Developers</a>

                </div>
            </div>
            <p className="col-12 copyright" style={{color:'white',fontFamily:'Andada Pro'}}>Copyright © 2021</p>
        </footer>
    )
}

export default Footer;