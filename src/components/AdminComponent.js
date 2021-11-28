import React ,{useEffect}from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link ,useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {logoutUser  } from "../redux/actionCreators";
const AdminComponent = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    
    return (
        <>
        <Header auth={auth} logoutUser={logoutUser}/>
        <h1>Admin</h1>
        <div className='row' style={{paddingTop:'5vh', paddingBottom:'32vh'}}>
        <div className='col-md-6'>
      <Link to="/admin/collegelist" className="btn btn-dark my-3">
        Colleges Portal
      </Link>
      </div>
      <div className='col-md-6'> 
      <Link to="/admin/userlist" className="btn btn-dark my-3">
        Users Portal
      </Link>
      </div>
      </div>
      <Footer/>
        </>
    );
};

export default AdminComponent;