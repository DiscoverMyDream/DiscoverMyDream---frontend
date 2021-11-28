import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, Image, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import College from './College'
import { listColleges } from "../redux/actionCreators";
const CollegeCarousel = () => {
  const dispatch = useDispatch();


  const collegeCar = useSelector((state) => state.satColleges);
  const { loading, error, sColleges } = collegeCar;
  const clgs = [];
  for (const [key, value] of Object.entries(sColleges)) {
    //console.log(`${key}: ${JSON.stringify(value)}`);
    clgs.push({
        _id: value._id,
      name: value.name,
      description: value.description,
      image: value.image,
      collegelink: value.collegelink
    })
    //console.log(clgs)
  }
  
  const clgList=[]
 for (const key of clgs){
   clgList.push(key.name)
 }
 console.log(clgList)

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-primary">
      
      {clgs.map((clg) => (
        <Carousel.Item key={clg._id}>
          <Link to={`/colleges/${clg._id}`}>
            <Image src={clg.image} alt={clg.name} fluid />
            <Carousel.Caption className="carousel-caption">
              <h2 className="carousel-text">{clg.name}</h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CollegeCarousel;