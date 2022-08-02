import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Footer from '../Footer/Footer'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import "./Blog.css"
const BlogPost = () => {
        const BlogData=[{bno:1,date:"02-08-22",title:"Cold Press Oil",imgblog:"/blog/1.jpg", desc:"You may see some unrefined coconut oils labeled “cold pressed,” which means that no heat was used in its extraction. Unrefined coconut oil is solid at room temperature and has a strong coconut flavor and scent, which it can impart to foods that include it."},
        {bno:2,date:Date(),date:"02-08-22",title:"safflower oil",imgblog:"/blog/2.jpg", desc:"You may see some unrefined coconut oils labeled “cold pressed,” which means that no heat was used in its extraction. Unrefined coconut oil is solid at room temperature and has a strong coconut flavor and scent, which it can impart to foods that include it."},
        {bno:3,date:"02-08-22",date:"02-08-22",title:"turmeric powder",imgblog:"/blog/3.jpg", desc:"You may see some unrefined coconut oils labeled “cold pressed,” which means that no heat was used in its extraction. Unrefined coconut oil is solid at room temperature and has a strong coconut flavor and scent, which it can impart to foods that include it."}
      ]
      const {id}  = useParams();
      
  return (
    <div >
        <NavbarMenu />
        <Container className='blog-post'>
            {BlogData.map((item)=>{
                
            if(item.bno===1){
                return(<>
            <Row >
                <Col md={8}>
                    
                   <img className='post-img' src={item.imgblog} alt=""/>
                   <Badge bg='success'>{item.date}</Badge>
                   <h2 className='mt-3'>{item.title}</h2>
                   <p>{item.desc}</p>
                   <p>This plant-based fat has some properties that other cooking oils don’t. For instance, because it’s mostly made up of saturated fat, it’s solid at room temperature rather than liquid.

It also contains medium-chain triglycerides (MCTs) and lauric acid, which may provide some fat-burning and heart-protective benefits (1Trusted Source).

Still, you may be curious about which type of coconut oil is better for your needs.

This article reviews the differences between unrefined and refined coconut oil, as well as which type should be used in specific instances.</p>
                </Col>
                <Col md={4}>

                </Col>
            </Row>
            </>)}})}
        </Container>
        <Footer />
    </div>
  )
}

export default BlogPost