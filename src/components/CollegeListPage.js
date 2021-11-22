import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message"
import Loader from "./Loader"
import { COLLEGE_CREATE_RESET } from "../redux/actionTypes";
import { createCollege, deleteCollege, listColleges } from "../redux/actionCreators";
import Paginate from "./Paginate";

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

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch({ type: COLLEGE_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }

    if (successCreate) {
      history.push(`/admin/college/${createdcollege._id}/edit`);
    } else {
      dispatch(listColleges('', pageNumber));
    }
  }, [
    dispatch,
    history,
    userInfo,
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
      <Row className="align-items-center">
        <Col>
          <h1>colleges</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createcollegeHandler}>
            <i className="fas fa-plus"></i> Create College
          </Button>
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
              <th>ID</th>
              <th>NAME</th>
              <th>DESCRIPTION</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college) => (
              <tr key={college._id}>
                <td>{college._id}</td>
                <td>{college.name}</td>
                <td>{college.description}</td>
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
    </>
  );
};

export default CollegeListPage;
