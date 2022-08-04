import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../Footer/Footer';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import "./Blog.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
const Blog = () => {
//   const BlogData=[{bno:1,date:"02-08-22",title:"Cold Press Oil",imgblog:"/blog/1.jpg", desc:"You may see some unrefined coconut oils labeled “cold pressed,” which means that no heat was used in its extraction. Unrefined coconut oil is solid at room temperature and has a strong coconut flavor and scent, which it can impart to foods that include it."},
//   {bno:2,date:Date(),title:"safflower oil",imgblog:"/blog/2.jpg", desc:"You may see some unrefined coconut oils labeled “cold pressed,” which means that no heat was used in its extraction. Unrefined coconut oil is solid at room temperature and has a strong coconut flavor and scent, which it can impart to foods that include it."},
//   {bno:3,date:"02-08-22",title:"turmeric powder",imgblog:"/blog/3.jpg", desc:"You may see some unrefined coconut oils labeled “cold pressed,” which means that no heat was used in its extraction. Unrefined coconut oil is solid at room temperature and has a strong coconut flavor and scent, which it can impart to foods that include it."}
// ]
const [BlogData, setBlogData]=useState([])
useEffect(()=>{
const fetchdata=async()=>{
  const res=await axios.get('https://golden.softgenics.in/api/allblogs');

setBlogData(res.data);

}
fetchdata();
},[])
  return (
    <div className='blog-bg'>
      <NavbarMenu />
      <Container className="blog">
        <h1 className='mb-4 text-center'>Latest Blog News</h1>
        <p className='text-head-desc'>Keep yourself updated with the latest information on healthy lifestyle and food industry. <br></br>Subscribe to our newsletter for updates on this space.</p>
        <Row>
          {BlogData.map((item)=>{return(<>
          <Col lg={4}>
            <Card>
            <div className="card-image">
              <Card.Img src={`https://golden.softgenics.in/uploads/${item.image}`} />
            </div>
              <Card.Body>
                <small className='text-muted'>{item.date.slice(0,16)}</small>
                <Card.Title className='mt-3'>{item.title}</Card.Title>
                <Card.Text>{item.dics.slice(0, 300)}...</Card.Text>
                <Link to={`/blog-post/${item.id}`} className='mt-3 read-more'>Read More <i className='fas fa-angle-right'></i></Link>
              </Card.Body>
            </Card>
          </Col>
         
          </>)})}
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Blog