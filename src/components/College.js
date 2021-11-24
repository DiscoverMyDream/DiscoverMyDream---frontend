import React,{useDispatch} from "react";
import { Link } from "react-router-dom";
import { Card,} from "react-bootstrap";
import { fetchSCollege, listCollegeDetails } from "../redux/actionCreators";
const College = ({ college }) => {
  //const dispatch = useDispatch();
  /*const handle=() => {
      dispatch(listCollegeDetails(college._id))
  }*/
  return (
    <Card className="my-3 p-3 rounded" style={{height:'20rem'}}>
      <Link to={`/colleges/${college._id}`}>
        <Card.Img style={{height:'15rem'}} src={college.image} variant="top" />
      </Link>
      <Card.Body>
        
        <Link to={`/colleges/${college._id}`}>
          <Card.Title as="div">
            <strong>{college.name}</strong>
          </Card.Title>
        </Link>
      
      
      </Card.Body>
    </Card>
  );
};

export default College;
