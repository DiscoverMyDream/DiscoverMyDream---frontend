import React, {  useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import College from './College'
import Message from './Message'
import Loader from './Loader'
import Paginate from './Paginate'
//import { listProducts } from '../actions/productActions'
//import ProductCarousel from '../components/ProductCarousel'
import Meta from './Meta'


const CollegeScreen = ({ match }) => {

   // const keyword = match.params.keyword

   // const pageNumber = match.params.pageNumber || 1
    
    
    const dispatch = useDispatch()

    const collegeDetails = useSelector((state) => state.satColleges);
  const { isLoading, errMess, sColleges,pages,page } = collegeDetails;
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
    return (
        <>
        
        <Link to='/' className='btn btn-light'>Go Back</Link>
        {isLoading ? (
        <Loader />
         ) : errMess ? (
              <Message variant='danger'>error</Message>
          ) : ( 
              <>
         <Row>
             {clgs.map((clg) => (
                <Col key={clg._id} sm ={12} md={6} lg={4} xl={3}>
                    <College college={clg} />
                </Col>
            ))}
         </Row>
         {/*<Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
         />*/}
         </>
          )}

        </>
    )
}

export default CollegeScreen