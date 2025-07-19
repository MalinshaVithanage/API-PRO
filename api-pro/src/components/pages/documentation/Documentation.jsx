import React from "react";
import { Container, Row, Image } from "react-bootstrap";
import Rectangle from "../../../assets/images/common/rectangle.png";

const sidebarLinks = [
  {
    category: "GETTING STARTED",
    links: [{ name: "Authentication", href: "#", active: false }],
  },
  {
    category: "CORE RESOURCES",
    links: [
      { name: "GET /users", href: "#", active: true },
      { name: "POST /users", href: "#", active: false },
      { name: "GET /analytics", href: "#", active: false },
      { name: "GET /logs", href: "#", active: false },
    ],
  },
];

const exampleRequest = `fetch('https://api.pro/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
`;

const exampleResponse = `[
  {
    "id": "user_01",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "role": "admin"
  },
  {
    "id": "user_02",
    "name": "John Smith",
    "email": "john@example.com",
    "role": "member"
  }
]
`;

function Documentation() {
  return (
    <section className="documentation-page mt-xl-5 mt-sm-4 mt-5  mb-5">
      <Container>
        <div className="section-heading">
          <Row>
            <div className="section-title">API PRO Developer Documentation</div>
          </Row>
          <Row>
            <div className="pt-sm-2 pt-1">
              <Image src={Rectangle} className="rectangle"></Image>
            </div>
          </Row>
        </div>
        <div className="api-pro-doc-page4 mt-5">
<aside className="sidebar">
          <nav>
            {sidebarLinks.map((section) => (
              <div key={section.category} className="sidebar-section">
                <div className="sidebar-category">{section.category}</div>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className={link.active ? "active-link" : ""}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
        <main className="content">
          <h1 className="endpoint-title">
            GET <span className="endpoint-url">/v1/users</span>
          </h1>
          <p className="endpoint-description">
            Retrieves a list of all users associated with your project.
          </p>

          <h2 className="sub-heading">Example Request</h2>
          <div className="code-block">
            <pre>
              <code>{exampleRequest}</code>
            </pre>
          </div>

          <h2 className="sub-heading">Example Response (200 OK)</h2>
          <div className="code-block">
            <pre>
              <code>{exampleResponse}</code>
            </pre>
          </div>
        </main>
        </div>
        
      </Container>
    </section>
  );
}

export default Documentation;
