import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import Rectangle from "../../../assets/images/common/rectangle.png";
import CompanyLogo1 from "../../../assets/images/homepage/company-logos/company-logo-1.png";
import CompanyLogo2 from "../../../assets/images/homepage/company-logos/company-logo-2.png";
import CompanyLogo3 from "../../../assets/images/homepage/company-logos/company-logo-3.png";
import CompanyLogo4 from "../../../assets/images/homepage/company-logos/company-logo-4.png";
import CompanyLogo5 from "../../../assets/images/homepage/company-logos/company-logo-5.png";

function SocialProofSection() {
  return (
    <div>
      <section className="features-section">
        <Container>
          <div className="section-heading">
            <Row>
              <div className="section-title">
                Trusted by the World's Most Innovative Companies
              </div>
            </Row>
            <Row>
              <div className="pt-sm-2 pt-1">
                <Image src={Rectangle} className="rectangle"></Image>
              </div>
            </Row>
          </div>
          <Container className="mt-5 ">
            <Row className="mt-5 justify-content-center">
              <Col xs={4}><Image src={CompanyLogo1} ></Image></Col>
              <Col xs={4}><Image src={CompanyLogo2} ></Image></Col>
              <Col xs={4}><Image src={CompanyLogo3} ></Image></Col>
            </Row>
            <Row className="mt-4 justify-content-center">
               <Col xs={4}><Image src={CompanyLogo4} ></Image></Col>
              <Col xs={4}><Image src={CompanyLogo5} ></Image></Col>
            </Row>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default SocialProofSection;
