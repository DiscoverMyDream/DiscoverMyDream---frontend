import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { listCollegeDetails } from "../redux/actionCreators";



const CollegePage = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const collegeDetails = useSelector((state) => state.collegeDetails);
  const { loading, error, college } = collegeDetails;

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
        <Row>
          <Meta title={college.name}/>
          <Col md={4}>
            <Image src={college.image} alt={college.name} fluid />
          </Col>
          <Col md={5}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{college.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5> Description:</h5> {college.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        </>
      )}
    </>
  );
};

export default CollegePage;
