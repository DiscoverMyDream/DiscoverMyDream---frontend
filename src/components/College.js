import React,{useDispatch} from "react";
import { Link} from "react-router-dom";
import { Card , Button} from "react-bootstrap";

import { fetchSCollege, listCollegeDetails } from "../redux/actionCreators";
const College = ({ college }) => {
  //const dispatch = useDispatch();
  /*const handle=() => {
      dispatch(listCollegeDetails(college._id))
  }*/
  return (
    // <Card >
    //   <Link to={`/colleges/${college._id}`}>
    //     <Card.Img style={{height:'15rem'}} src={college.image} variant="top" />
    //   </Link>
    //   <Card.Body>
        
    //     <Link to={`/colleges/${college._id}`}>
    //       <Card.Title as="div">
    //         <strong>{college.name}</strong>
    //       </Card.Title>
    //     </Link>
      
      
    //   </Card.Body>
    // </Card>
    <Card style={{ width: '18rem', height:'22rem' }}>
    <Card.Img variant="top" src={college.image} />
    <Card.Body>
      <Card.Title>{college.name}</Card.Title>
      <Link to={`/colleges/${college._id}`}>
      <Button variant="primary">Read More</Button>
      </Link>    
    </Card.Body>
     
  </Card>
  );
};

export default College;
