import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const NotFound = () => {
    return (
        <Container>
            <Row>
                <Col md={5} className='mx-auto'>
                    <div className="text-center p-5">
                        <h1> 404 Page Not Found</h1>
                        <p> Sorry, The page you requested not found.</p>
                        <a href="/">Back to homepage</a>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;