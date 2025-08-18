import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import logo from "../../assets/logo.png";
import Tomato from "../../assets/tamato.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        backgroundColor: isScrolled ? "#ffffff" : "#fff8ec",
        transition: "background-color 250ms ease, box-shadow 250ms ease",
        boxShadow: isScrolled ? "0 6px 18px rgba(0,0,0,0.08)" : "none",
        zIndex: 1100,
      }}
    >
        {/* Tomato Image */}
      <Container fluid className="px-4 position-relative">
        {!isScrolled && (
          <Image
            src={Tomato}
            alt="Tomato"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: -20,
              width: 100,
              transition: "opacity 0.3s ease",
            }}
          />
        )}

        {/* Logo */}
        <Navbar.Brand href="#">
          <Image
            src={logo}
            alt="Pizzon Logo"
            width={90}
            height={90}
            style={{ objectFit: "contain" }}
          />
        </Navbar.Brand>

        {/* Menu Toggle (Hamburger) */}
        <Navbar.Toggle
          aria-controls="main-navbar"
          style={{
            border: "none",
            outline: "none",
            fontSize: "1.5rem",
          }}
        />

        {/* Collapsible Menu */}
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto gap-3">
            {["HOME", "SHOP", "PAGES", "BLOG", "CONTACT"].map((item) => (
              <Nav.Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="fw-semibold"
                style={{
                  fontSize: "18px",
                  color: item === "BLOG" ? "#ff4b4b" : "#111111",
                  borderBottom:
                    item === "BLOG"
                      ? "2px solid #ff4b4b"
                      : "2px solid transparent",
                  paddingBottom: item === "BLOG" ? "6px" : "8px",
                  transition: "color 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#ff4b4b";
                  e.target.style.borderBottom = "2px solid #ff4b4b";
                  e.target.style.paddingBottom = "6px";
                }}
                onMouseLeave={(e) => {
                  if (item !== "BLOG") {
                    e.target.style.color = "#111111";
                    e.target.style.borderBottom = "2px solid transparent";
                    e.target.style.paddingBottom = "8px";
                  }
                }}
              >
                {item}
              </Nav.Link>
            ))}
          </Nav>

          {/* Icons */}
          <div className="d-flex align-items-center gap-3 ms-lg-3 mt-3 mt-lg-0">
            <div style={{ cursor: "pointer", position: "relative" }}>
              <FiSearch size={28} />
            </div>
            <div style={{ cursor: "pointer", position: "relative" }}>
              <FiShoppingCart size={28} />
              <span
                style={{
                  position: "absolute",
                  top: -6,
                  right: -8,
                  background: "#ff4b4b",
                  color: "#fff",
                  fontSize: 12,
                  fontWeight: 700,
                  borderRadius: "50%",
                  minWidth: 20,
                  height: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                0
              </span>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
