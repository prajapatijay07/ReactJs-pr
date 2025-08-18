// Footer.jsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram } from "react-icons/fa";

// Local assets
import logo from "../../assets/logo.png";
import GooglePay from "../../assets/google-play.png";
import AppStore from "../../assets/app-stor.png";
import FooterPattern from "../../assets/footer-pattern.png";

const Footer = () => {
  // --- Styles ---
  const linkStyle = {
    color: "#777",
    fontSize: "14px",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const liStyle = { marginBottom: "12px" };

  const socialStyle = (bg) => ({
    background: bg,
    padding: "8px 12px",
    borderRadius: "5px",
    color: "#fff",
    transition: "filter 0.3s ease",
  });

  // --- Data ---
  const infoLinks = ["Home", "Blog", "About Us", "Menu", "Contact Us"];
  const topItems = [
    "Pepperoni",
    "Swiss Mushroom",
    "Barbeque Chicken",
    "Vegetarian",
    "Ham & Cheese",
  ];
  const otherLinks = ["Checkout", "Cart", "Product", "Locations", "Legal"];

  return (
    <footer
      style={{
        backgroundColor: "#fef9ef",
        padding: "50px 0 0",
        fontFamily: "'Montserrat', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container>
        <Row className="mb-5">
          {/* --- Logo --- */}
          <Col md={2} className="d-flex align-items-start">
            <img
              src={logo}
              alt="Pizzon Logo"
              style={{ width: "80px", height: "auto" }}
            />
          </Col>

          {/* --- Information Links --- */}
          <Col md={2}>
            <h5 className="fw-bold mb-4" style={{ fontSize: "16px" }}>
              INFORMATION
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {infoLinks.map((item) => (
                <li key={item} style={liStyle}>
                  <a
                    href="#"
                    style={linkStyle}
                    onMouseEnter={(e) => (e.target.style.color = "#ff4b4b")}
                    onMouseLeave={(e) => (e.target.style.color = "#777")}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          {/* --- Top Items --- */}
          <Col md={2}>
            <h5 className="fw-bold mb-4" style={{ fontSize: "16px" }}>
              TOP ITEMS
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {topItems.map((item) => (
                <li
                  key={item}
                  style={{
                    ...liStyle,
                    color: "#777",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#ff4b4b")}
                  onMouseLeave={(e) => (e.target.style.color = "#777")}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Col>

          {/* --- Other Links --- */}
          <Col md={2}>
            <h5 className="fw-bold mb-4" style={{ fontSize: "16px" }}>
              OTHERS
            </h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {otherLinks.map((item) => (
                <li
                  key={item}
                  style={{
                    ...liStyle,
                    color: "#777",
                    fontSize: "14px",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#ff4b4b")}
                  onMouseLeave={(e) => (e.target.style.color = "#777")}
                >
                  {item}
                </li>
              ))}
            </ul>
          </Col>

          {/* --- Social Media + Signup --- */}
          <Col md={4} style={{ position: "relative" }}>
            <img
              src={FooterPattern}
              alt="Pattern"
              style={{
                position: "absolute",
                top: "0",
                right: "0",
                width: "120px",
                pointerEvents: "none",
              }}
            />
            <h5 className="fw-bold mb-4" style={{ fontSize: "16px" }}>
              SOCIAL MEDIA
            </h5>
            <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
              <a
                href="#"
                style={socialStyle("#3b5998")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = "brightness(0.85)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "brightness(1)")
                }
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                style={socialStyle("#bd081c")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = "brightness(0.85)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "brightness(1)")
                }
              >
                <FaPinterestP />
              </a>
              <a
                href="#"
                style={socialStyle("#1da1f2")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = "brightness(0.85)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "brightness(1)")
                }
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                style={socialStyle("#e4405f")}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = "brightness(0.85)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = "brightness(1)")
                }
              >
                <FaInstagram />
              </a>
            </div>

            <p style={{ color: "#777", fontSize: "14px", marginBottom: "15px" }}>
              Signup and get exclusive offers and coupon codes
            </p>
            <Button
              style={{
                backgroundColor: "#ffb400",
                border: "none",
                borderRadius: "50px",
                padding: "8px 25px",
                fontWeight: "bold",
                transition: "background-color 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "#e0a200")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#ffb400")
              }
            >
              SIGN UP
            </Button>
          </Col>
        </Row>

        {/* --- Policies --- */}
        <Row className="align-items-center pt-3" style={{ borderColor: "#eee" }}>
          <Col md={6}>
            <p style={{ color: "#777", fontSize: "14px", margin: 0 }}>
              Privacy Policy &nbsp; | &nbsp; Refund Policy &nbsp; | &nbsp;
              Cookie Policy &nbsp; | &nbsp; Terms & Conditions
            </p>
          </Col>
          <Col md={4} className="text-md-end mt-3 mt-md-0">
            <img
              src={GooglePay}
              alt="Google Play"
              style={{ height: "40px", marginRight: "10px" }}
            />
            <img src={AppStore} alt="App Store" style={{ height: "40px" }} />
          </Col>
        </Row>
      </Container>

      {/* --- Copyright --- */}
      <div style={{ background: "#fff", padding: "30px 0", marginTop: "30px" }}>
        <Container>
          <Row>
            <Col className="text-center">
              <p style={{ fontSize: "14px", color: "#777", margin: 0 }}>
                © 2023 Pizzon. All Rights Reserved by{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Templatescoder
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
