import React, {  useEffect } from 'react'
import {Link,Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import College from './College'
import Message from './Message'
import Loader from './Loader'
import Paginate from './Paginate'
import SearchBox from './SearchBox'
//import { listProducts } from '../actions/productActions'
//import ProductCarousel from '../components/ProductCarousel'
import Meta from './Meta'


const CollegeScreen = ({ match }) => {

   //const keyword = match?match.params.keyword:''

   //const pageNumber = match?match.params.pageNumber:'' || 1
    
    
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
        
        
        {isLoading ? (
        <Loader />
         ) : errMess ? (
              <Message variant='danger'>error</Message>
          ) : ( 
              <>
              {/*<Row>
                <Col md={6} style={{margin:'auto'}}>
              <Route render={({history}) => <SearchBox history={history}/>} />
              </Col>
              </Row>*/}
         <Row style={{paddingTop:'7vh', paddingBottom:'7vh'}}>
             {clgs.map((clg) => (
                <Col key={clg._id} sm ={12} md={6} lg={4} xl={3} style= {{paddingTop:'3vh'}}>
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