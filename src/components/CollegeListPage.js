import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "./Message"
import Loader from "./Loader"
import { COLLEGE_CREATE_RESET } from "../redux/actionTypes";
import { createCollege, deleteCollege, listColleges, logoutUser } from "../redux/actionCreators";
import Paginate from "./Paginate";
import NavDash from "./NavDash";
import Header from "./Header";
import Footer from "./Footer";

const CollegeListPage = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch();

  const collegeList = useSelector((state) => state.collegeList);
  const { loading, error, colleges, page, pages } = collegeList;

  const collegeDelete = useSelector((state) => state.collegeDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = collegeDelete;

  const collegeCreate = useSelector((state) => state.collegeCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    college: createdcollege,
  } = collegeCreate;

  const auth = useSelector((state) => state.auth);
  

  useEffect(() => {
    dispatch({ type: COLLEGE_CREATE_RESET });

    /*if (!auth || !auth.isAdmin) {
      history.push("/login");
    }*/

    if (successCreate) {
      history.push(`/admin/colleges/${createdcollege._id}/edit`);
    } else {
      dispatch(listColleges('', pageNumber));
    }
  }, [
    dispatch,
    history,
    auth,
    successDelete,
    successCreate,
    createdcollege,
    pageNumber,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteCollege(id));
    }
  };

  const createcollegeHandler = () => {
    dispatch(createCollege());
  };

  return (
    <>
    <Header auth={auth} logoutUser={dispatch(logoutUser)}/>
    <Link to="/admin" className="btn btn-info my-3">
        Go to Dashboard
      </Link>
      <Row className="align-items-center">
        <Col>
          <h1>Colleges</h1>
        </Col>
        <Col className="text-right">
        <LinkContainer to={`/admin/college/add`}>
          <Button className="my-3" >
            <i className="fas fa-plus"></i> Create College
          </Button>
          </LinkContainer>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              
              <th>NAME</th>
              <th>IMAGE</th>
              <th>DESCRIPTION</th>
              <th>OFFICIAL SITE</th>
              <th>DATASET</th>
              <th>ACTIONS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college) => (
              <tr key={college._id}>
                
                <td>{college.name}</td>
                <td> 
                <a class="lightbox" href="#college">
   <img src={college.image}/>
</a> 
<div class="lightbox-target" id="college">
   <img src={college.image}/>
   <a class="lightbox-close" href="#"></a>
</div>
                </td>
                <td>{college.description}</td>
                <td><a href={college.collegelink} target='_blank'>{college.collegelink}</a></td>
                <td>{college.dataset}</td>
                <td>
                  
                  <LinkContainer to={`/admin/college/${college._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(college._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Paginate pages={pages} page={page} isAdmin={true} />

        </>
      )}
      <Footer/>
    </>
  );
};

export default CollegeListPage;
