import React, { useState, useEffect } from "react";
import { Link,useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  FormGroup,
} from "react-bootstrap";
import Message from "./Message";
import Loader from "./Loader";
import Meta from "./Meta";
import { fetchSCollege, listCollegeDetails } from "../redux/actionCreators";
import { Container } from "reactstrap";



const CollegePage = ({ match }) => {

//const [Col,setClg]=useState({_id:null});
  const dispatch = useDispatch();

  //const userLogin = useSelector((state) => state.satColleges.sColleges.colleges);
  
  //const { name } = userLogin;
 /* const collegeDetails = useSelector((state) => state.satColleges);
  const { isLoading, errMess, sColleges,pages,page } = collegeDetails;
  
  const clgs=[];
  for (const [key, value] of Object.entries(sColleges)) {
    //console.log(`${key}: ${JSON.stringify(value)}`);
    clgs.push({
        _id: value._id,
      name: value.name,
      description: value.description,
      image: value.image,
      collegelink: value.collegelink
    })
    
  }*/
 // Col.concat(clgs)
 // console.log(clgs);
  
  
  //const College =clgs.filter((clg) => (clg._id === match.params.id))[0];
  //setClg(College);
 // console.log("c",College)
  //dispatch(listCollegeDetails(match.params.id))
  const CollegeDetails = useSelector((state) => state.collegeDetails);
  const { loading, error, college } = CollegeDetails;
  console.log(CollegeDetails);
  /*const college =  {
    "_id": "619d52ac8ae3095e5c971777",
    "name": "California Institute of Technology",
    "user": "619be96f3181ee06dc66e8da",
    "image": "https://transitinglosangeles.files.wordpress.com/2021/01/20210126_120500.jpg?w=1568",
    "description": "The California Institute of Technology (Caltech) is a private research university in Pasadena, California, US. The university is known for its strength in science and engineering, and is one among a small group of institutes of technology in the United States which is primarily devoted to the instruction of pure and applied sciences.",
    
    "collegelink": "https://www.caltech.edu/",
    

}*/
const history= useHistory();
  useEffect(() => {
    //console.log(error)
   dispatch(fetchSCollege());
  // if(error) history.push('/colleges')

   
   //const collegeDetails = useSelector((state) => state.satColleges);
 /* const { isLoading, errMess, sColleges,pages,page } = collegeDetails;
  
  const clgs=[];
  for (const [key, value] of Object.entries(sColleges)) {
    //console.log(`${key}: ${JSON.stringify(value)}`);
    clgs.push({
        _id: value._id,
      name: value.name,
      description: value.description,
      image: value.image,
      collegelink: value.collegelink
    })
    
  }
 // Col.concat(clgs)
  console.log(clgs);
  
  
  const College =clgs.filter((clg) => (clg._id === match.params.id))[0];*/
  //const College =clgs.filter((clg) => (clg._id === match.params.id))[0];
  //console.log(sColleges)
    //if (!College._id || College._id !== match.params.id) {
     dispatch(listCollegeDetails(match.params.id));
      
   // }
  }, []);
 /* const clgs = [];
  for (const [key, value] of Object.entries(sColleges)) {
    //console.log(`${key}: ${JSON.stringify(value)}`);
    clgs.push({
      _id: value._id,
      name: value.name,
      description: value.description,
      image: value.image,
      collegelink: value.collegelink
    })
    console.log(clgs)
  }
  
  const clgList=[]
 for (const key of clgs){
   clgList.push(key.name)
 }
 console.log(clgList)*/
    /*colleges.forEach(element => {
      clgs.push({
        name: element.name,
        description: element.description,
        image: element.image,
        collegelink: element.collegelink
      })
    });*/
  return (
    <>
    
      <Link className="btn btn-light my-3" to="/colleges">
        Go Back
    </Link>
      {/*loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">error</Message>
      ) : */(
        <>
        <Container>
        <Row >
          
          <Col md={4} className="mx-auto">
            <Image src={college.image} alt={college.name} fluid />
          </Col>
          </Row>
          <Row>
          <Col md={5} className="mx-auto">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{college.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5> Description:</h5> {college.description}
              </ListGroup.Item>
              <ListGroup.Item>
                <h5> Official Site:</h5> <a href={college.collegelink}>{college.collegelink}</a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        </Container>
        </>
      )
      }
    </>
  );
};

export default CollegePage;
