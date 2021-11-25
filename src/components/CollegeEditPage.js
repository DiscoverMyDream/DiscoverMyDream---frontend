import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Loader from "./Loader";
import FormContainer from "./FormContainer";
import { listCollegeDetails, updateCollege,logoutUser  } from "../redux/actionCreators";
import {  COLLEGE_UPDATE_RESET} from "../redux/actionTypes";
import Header from "./Header";
import Footer from "./Footer";


const CollegeEditPage = ({ match, history }) => {
  const collegeId = match.params.id;

  const [name, setName] = useState("");
  
  const [image, setImage] = useState("");
  
 
  const [description, setDescription] = useState("");
  const [collegelink,setLink]=useState("");
  const [dataset,setDataset]=useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const collegeDetails = useSelector((state) => state.collegeDetails);
  const { loading, error, college } = collegeDetails;

  const collegeUpdate = useSelector((state) => state.collegeUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = collegeUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: COLLEGE_UPDATE_RESET });
      history.push("/admin/collegelist");
    } else {
      if (!college || college._id !== collegeId) {
        dispatch(listCollegeDetails(collegeId));
      } else {
        setName(college.name);
        setImage(college.image);
        setDescription(college.description);
        setLink(college.collegelink)
        setDataset(college.dataset)
      }
    }
  }, [dispatch, history, collegeId, college, successUpdate]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateCollege({
        _id: collegeId,
        name,
        image,
        description,
        collegelink,
        dataset
        
      })
    );
  };

  return (
    <>
    <Header auth={auth} logoutUser={logoutUser}/>
      <Link to="/admin/collegelist" className="btn btn-dark my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit college</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              {/*<Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}*/}
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            
            <Form.Group controlId="collegelink">
              <Form.Label>Official Site</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter College Link"
                value={collegelink}
                onChange={(e) => setLink(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="dataset">
              <Form.Label>Dataset</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Dataset link"
                value={dataset}
                onChange={(e) => setDataset(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
      <Footer/>
    </>
  );
};

export default CollegeEditPage;
