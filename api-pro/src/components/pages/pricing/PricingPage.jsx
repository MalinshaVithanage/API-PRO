import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import Rectangle from "../../../assets/images/common/rectangle.png";

function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      period: "month",
      features: [
        "1 Project",
        "10,000 API Calls/mo",
        "Basic Analytics",
        "Community Support",
      ],
      buttonText: "Start for Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$46",
      period: "month",
      features: [
        "10 Projects",
        "1 Million API Calls/mo",
        "AI-Powered Analytics",
        "Advanced Security",
        "Email Support",
      ],
      buttonText: "Choose Pro",
      popular: true,
    },
  ];
  return (
    <section className="pricing-page mt-xl-5 mt-sm-4 mt-5  mb-5">
      <Container>
        <div className="section-heading">
          <Row>
            <div className="section-title">
              Simple, Transparent Pricing for Teams of All Sizes
            </div>
          </Row>
          <Row>
            <div className="pt-sm-2 pt-1">
              <Image src={Rectangle} className="rectangle"></Image>
            </div>
          </Row>
        </div>

        <div className="pricing-content pt-xxl-5 pt-4 ">
          <Row className="pt-sm-3 pt-2 text-center">
            <div className="pricing-title pt-xl-4 pt-md-3 pt-2">
              Start for free and scale as you go. No hidden fees, ever.
            </div>
          </Row>

          <Container>
            <div className="pricing-grid mt-5">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`pricing-card ${plan.popular ? "popular" : ""}`}
                >
                  {plan.popular && (
                    <div className="popular-badge text-center">
                      Most Popular
                    </div>
                  )}

                  {/* Title & Price */}
                  <header className="card-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="price-section">
                      <span className="price">{plan.price}</span>
                      <span className="period">/ {plan.period}</span>
                    </div>
                  </header>

                  <div className="card-body">
                    <ul className="features-list">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="feature-item">
                          <svg
                            className="check-icon"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-footer">
                    <button
                      className={`cta-button ${
                        plan.popular ? "primary" : "secondary"
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </Container>
    </section>
  );
}

export default PricingPage;
