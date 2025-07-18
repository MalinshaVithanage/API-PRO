import React, { useEffect, useState } from "react";
import { Container, Row, Image } from "react-bootstrap";
import Rectangle from "../../../assets/images/common/rectangle.png";

function AboutPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleWebsiteClick = (website) => {
    const url = website.startsWith("http") ? website : `https://${website}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="about-us-page mt-xl-5 mt-sm-4 mt-5  mb-5">
      <Container>
        <div className="section-heading">
          <Row>
            <div className="section-title">Our Mission</div>
          </Row>
          <Row>
            <div className="pt-sm-2 pt-1">
              <Image src={Rectangle} className="rectangle"></Image>
            </div>
          </Row>
        </div>

        <div className="about-content pt-xxl-5 pt-4">
          <Row className="pt-sm-3 pt-2">
            <div className="content-title pt-xl-4 pt-md-3 pt-2">
              We Empower Developers to Build The Future.
            </div>
            <div className="about-content-description pt-xl-4 pt-md-2 pt-1 mt-2 ">
              In today's digital world, APIs are the backbone of innovation.
              Yet, managing them has become increasingly complex. API PRO was
              founded on a simple principle: to give developers and businesses
              the tools they need to build, manage, and scale their APIs without
              the headache. We handle the complexity, so you can focus on
              creating amazing products.
            </div>
          </Row>
          <Row className="pt-3">
            <div className="content-title pt-xl-4 pt-md-2 pt-1 mt-2 ">
              The Team Behind API PRO
            </div>
          </Row>
          <div className="profile-cards-container">
            <div className="profile-cards__grid">
              {loading ? (
                <p>Loading team...</p>
              ) : (
                <>
                  {users.map((user) => (
                    <div className="profile-card" key={user.id}>
                      <div className="profile-card__header">
                        <div className="profile-card__avatar">
                          <div className="profile-card__initials">
                            {getInitials(user.name)}
                          </div>
                        </div>
                      </div>

                      <div className="profile-card__content">
                        <h3 className="profile-card__name">{user.name}</h3>

                        <div className="profile-card__info">
                          <div className="profile-card__field">
                            <span className="profile-card__label">Email:</span>
                            <button
                              className="profile-card__email"
                              onClick={() => handleEmailClick(user.email)}
                              title={`Send email to ${user.email}`}
                            >
                              {user.email}
                            </button>
                          </div>

                          <div className="profile-card__field">
                            <span className="profile-card__label">
                              Website:
                            </span>
                            <button
                              className="profile-card__website"
                              onClick={() => handleWebsiteClick(user.website)}
                              title={`Visit ${user.website}`}
                            >
                              {user.website}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPage;
