import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import Loader from "./Loader";
import FormContainer from "./FormContainer";
import { listCollegeDetails, createCollege,logoutUser  } from "../redux/actionCreators";
import {  COLLEGE_CREATE_RESET} from "../redux/actionTypes";
import Header from "./Header";
import Footer from "./Footer";


const CollegeCreatePage = ({ match, history }) => {
  const collegeId = match.params.id;

  const [name, setName] = useState("");
  
  const [image, setImage] = useState("");
  
 
  const [description, setDescription] = useState("");
  const [collegelink,setLink]=useState("");
  const [dataset,setDataset]=useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const collegeCreate = useSelector((state) => state.collegeCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
  } = collegeCreate;

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: COLLEGE_CREATE_RESET });
      history.push("/admin/collegelist");
    } 
  }, [dispatch , successCreate]);

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
    console.log(name,
      image,
      description,
      collegelink,
      dataset)
    dispatch(
      createCollege({
         name:name,
        image:image,
        description:description,
        collegelink:collegelink,
        dataset:dataset
        
      })
    );
  };

  return (
    <>
    <Header auth={auth} logoutUser={dispatch(logoutUser)}/>
      <Link to="/admin/collegelist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Create college</h1>
        {loadingCreate && <Loader />}
        {errorCreate && <Message variant="danger">{errorCreate}</Message>}
        
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
              Create
            </Button>
          </Form>
        
      </FormContainer>
      <Footer/>
    </>
  );
};

export default CollegeCreatePage;
