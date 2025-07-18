import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import Rectangle from "../../../assets/images/common/rectangle.png";
import FeatureIcon1 from "../../../assets/icons/homepage/feature-icon-1.png";
import FeatureIcon2 from "../../../assets/icons/homepage/feature-icon-2.png";
import FeatureIcon3 from "../../../assets/icons/homepage/feature-icon-3.png";

function FeaturesSection() {
  return (
    <section className="features-section">
      <Container>
        <div className="section-heading">
          <Row>
            <div className="section-title">
              Everything You Need in One Platform
            </div>
          </Row>
          <Row>
            <div className="pt-sm-2 pt-1">
              <Image src={Rectangle} className="rectangle"></Image>
            </div>
          </Row>
        </div>
        <Container>
          <div className="d-xl-none">
            <Row className="feature-content development-content-bg mb-5 mx-xl-5 ">
              <div>
                <Row>
                  <div className="content mt-3">
                    <Image src={FeatureIcon1} className="content-image"></Image>
                    <div className="content-title">AI-Powered Analytics</div>
                  </div>
                </Row>
                <Row>
                  <div
                    className="content-description   my-xl-5 my-lg-4 my-3   "
                    style={{ textAlign: "justify" }}
                  >
                    Go beyond basic metrics. Understand your API usage with
                    intelligent, real-time insights and predictive analytics to
                    stay ahead of demand.
                  </div>
                </Row>
              </div>
            </Row>
            <Row className="feature-content development-content-bg mb-5 mx-xl-5 ">
              <div>
                <Row>
                  <div className="content mt-3">
                    <Image src={FeatureIcon2} className="content-image"></Image>
                    <div className="content-title">Bank-Grade Security</div>
                  </div>
                </Row>
                <Row>
                  <div
                    className="content-description   my-xl-5 my-lg-4 my-3   "
                    style={{ textAlign: "justify" }}
                  >
                    Protect your endpoints with OAuth 2.0, API key management,
                    and automated threat detection. Your data's integrity is our
                    top priority.
                  </div>
                </Row>
              </div>
            </Row>
            <Row className="feature-content development-content-bg mb-5 mx-xl-5 ">
              <div>
                <Row>
                  <div className="content mt-3">
                    <Image src={FeatureIcon3} className="content-image"></Image>
                    <div className="content-title">
                      Superior Developer Experience
                    </div>
                  </div>
                </Row>
                <Row>
                  <div
                    className="content-description   my-xl-5 my-lg-4 my-3   "
                    style={{ textAlign: "justify" }}
                  >
                    With auto-generated documentation and a seamless CLI, we
                    make building and integrating APIs a joy, not a chore. Cut
                    your development time in half.
                  </div>
                </Row>
              </div>
            </Row>
          </div>
          <div className="d-none d-xl-block">
            <Row>
              <Col lg={4}>
                <Row className="feature-content development-content-bg mb-5 mx-xl-5 ">
                  <div>
                    <Row>
                      <div className="content mt-3">
                        <Image
                          src={FeatureIcon1}
                          className="content-image"
                        ></Image>
                        <div className="content-title">
                          AI-Powered Analytics
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <div
                        className="content-description   my-xl-5 my-lg-4 my-3   "
                        style={{ textAlign: "justify" }}
                      >
                        Go beyond basic metrics. Understand your API usage with
                        intelligent, real-time insights and predictive analytics
                        to stay ahead of demand.
                      </div>
                    </Row>
                  </div>
                </Row>
              </Col>
              <Col lg={4}>
                <Row className="feature-content development-content-bg mb-5 mx-xl-5 ">
                  <div>
                    <Row>
                      <div className="content mt-3">
                        <Image
                          src={FeatureIcon2}
                          className="content-image"
                        ></Image>
                        <div className="content-title">Bank-Grade Security</div>
                      </div>
                    </Row>
                    <Row>
                      <div
                        className="content-description   my-xl-5 my-lg-4 my-3   "
                        style={{ textAlign: "justify" }}
                      >
                        Protect your endpoints with OAuth 2.0, API key
                        management, and automated threat detection. Your data's
                        integrity is our top priority.
                      </div>
                    </Row>
                  </div>
                </Row>
              </Col>
              <Col lg={4}>
                <Row className="feature-content development-content-bg mb-5 mx-xl-5 ">
                  <div>
                    <Row>
                      <div className="content mt-3">
                        <Image
                          src={FeatureIcon3}
                          className="content-image"
                        ></Image>
                        <div className="content-title">
                          Superior Developer Experience
                        </div>
                      </div>
                    </Row>
                    <Row>
                      <div
                        className="content-description   my-xl-5 my-lg-4 my-3   "
                        style={{ textAlign: "justify" }}
                      >
                        With auto-generated documentation and a seamless CLI, we
                        make building and integrating APIs a joy, not a chore.
                        Cut your development time in half.
                      </div>
                    </Row>
                  </div>
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default FeaturesSection;
