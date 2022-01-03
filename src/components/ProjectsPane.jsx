import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import CardProps from "react-bootstrap/Card";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
CardProps.defaultProps.bg= "dark";


const createProjectCard = (props) => {

return <Container className="container">

   <Row >

   <Col lg={6} md={6} sm={6} xsm={12}> 
       <Card className="projectCard" >
         <Card.Img variant="top" src={props.projImg0} />
         <Card.Body>
            <Card.Title>{props.projTitle0}</Card.Title>
         <Card.Text>
           {props.projSummary0}
         </Card.Text>
         <Button variant="outline-warning">Check me</Button>
         </Card.Body>
      </Card>
   </Col>

   <Col lg={6} md={6} sm={6}> 
       <Card className="projectCard" >

         <Card.Img variant="top" src={props.projImg1} />
         <Card.Body>
            <Card.Title>{props.projTitle1}</Card.Title>
         <Card.Text>
           {props.projSummary1}
         </Card.Text>
         <Button variant="outline-warning">Check me</Button>



         
       </Card.Body>
      </Card>
      </Col>
  </Row>

  </Container>
   
}


const ProjectsPane = (props) => {

    return<div>{createProjectCard(props)}</div>
}

export default ProjectsPane
