import React,{useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Blog = () => {
    const [blogs,setBlogs] = useState([[{
        "title":"hello",
        "description":"world"
    },{
        "title":"hello",
        "description":"world"
    }]]);

  return (
    <div className="blog-container">
        <h1>Latest blog news</h1>
        <p>Keep yourself updated with the latest information on healthy lifestyle and food industry. Subscribe to our newsletter for updates on this space.</p>


        <Container>
            {
            blogs.forEach((row)=>{
                return (
                    <Row>
                        {
                            row.forEach((blog)=>{
                                return(<Col>
                                <div>
                                    <h2>
                                        {blog.title}
                                    </h2>
                                    <p>{blog.description}</p>
                                </div>
                                </Col>)
                            })
                        }
                    </Row>
                )
                
            })
            }
        </Container>
    </div>
  );
}

export default Blog;