import React from "react";
import { Link } from "react-router-dom";
import { Card,} from "react-bootstrap";

const College = ({ college }) => {
  return (
    <Card className="my-3 p-3 rounded" style={{height:'37rem'}}>
      <Link to={`/product/${college._id}`}>
        <Card.Img src={college.image} variant="top" />
      </Link>
      <Card.Body>
        
        <Link to={`/product/${college._id}`}>
          <Card.Title as="div">
            <strong>{college.name}</strong>
          </Card.Title>
        </Link>
      
      
      </Card.Body>
    </Card>
  );
};

export default College;
