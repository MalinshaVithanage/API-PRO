import React from "react";
import { Button, Row, Container, Col} from "react-bootstrap";

export default function HeroSection() {
  return (
      <section className="hero-section ">
        <Container>
          <div className="hero-content ">
            <div className="hero-content-title pt-xl-4 pt-md-3 pt-2" style={{ color: "#EF9335" }}>
              Effortless API Management.
            </div>
            <div className="hero-content-title pt-xl-4 pt-md-3 pt-2">
              Powerful Results.
            </div>
            <Row>
    
                <div className="hero-content-description pt-xl-4 pt-md-2 pt-1 mt-2 ">
                  API PRO is the all-in-one platform designed to take your APIs from development to production with unparalleled speed, security, and AI-driven insights.
                </div>
           
            </Row>


            <Row className="hero-content-button pt-xl-5 pt-4  ">
              <div className="d-flex justify-content-center">
                <Button
                  variant="outline-success"
                  href="mailto:malinshkv@gmail.com?subject=Hire%20Me&body=Hi%20Malinsha,%0D%0A%0D%0AI%20am%20interested%20in%20hiring%20you%20for%20a%20project.%0D%0A%0D%0AThanks,%0D%0AYour%20Name"
                  className="button-hc her-btn "
                >
                  Get Started for Free
                </Button>{" "}
                
              </div>
            </Row>
          
          </div>
        </Container>
      </section>
  );
}
