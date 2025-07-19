import React, { useState } from "react";
import { Container, Row, Image } from "react-bootstrap";
import Rectangle from "../../../assets/images/common/rectangle.png";

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    companyName: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = "Work email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      newErrors.workEmail = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);

      setFormData({
        fullName: "",
        workEmail: "",
        companyName: "",
        message: "",
      });

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="contact-page mt-xl-5 mt-sm-4 mt-5  mb-5">
      <Container>
        <div className="section-heading">
          <Row>
            <div className="section-title">Get In Touch</div>
          </Row>
          <Row>
            <div className="pt-sm-2 pt-1">
              <Image src={Rectangle} className="rectangle"></Image>
            </div>
          </Row>
        </div>
        <div className="contact-content pt-xxl-5 pt-4">
          <Row className="pt-sm-3 pt-2">
            <div className="content-title pt-xl-4 pt-md-3 pt-2">
              Have a technical question, a sales inquiry, or just want to chat?
              We'd love to hear from you.
            </div>
          </Row>
        </div>
        <div className="contact-container">
          <div className="contact-wrapper">
            <div className="contact-form-section">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="fullName" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`form-input ${errors.fullName ? "error" : ""}`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <span className="error-message">{errors.fullName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="workEmail" className="form-label">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleChange}
                    className={`form-input ${errors.workEmail ? "error" : ""}`}
                    placeholder="Enter your work email"
                  />
                  {errors.workEmail && (
                    <span className="error-message">{errors.workEmail}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="companyName" className="form-label">
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? "error" : ""}`}
                    placeholder="Tell us about your project or inquiry..."
                    rows="5"
                  />
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className={`submit-button ${
                    isSubmitting ? "submitting" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            <div className="contact-details-section">
              <h3 className="details-title">Contact Information</h3>

              <div className="contact-detail">
                <div className="detail-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="detail-content">
                  <h4 className="detail-title">Our Office</h4>
                  <p className="detail-text">
                    123 Tech Avenue, Innovation City, Connectiville 45678
                  </p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="detail-content">
                  <h4 className="detail-title">Email Us</h4>
                  <p className="detail-text">hello@apipro.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="detail-content">
                  <h4 className="detail-title">Call Us</h4>
                  <p className="detail-text">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactPage;
