import { Offcanvas, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FiBell,
  FiLock,
  FiCreditCard,
  FiHelpCircle,
  FiGift,
  FiRepeat,
} from "react-icons/fi";

const menuItems = [
  { icon: <FiBell />, title: "Notifications", link: "/notifications", disabled: false },
  { icon: <FiLock />, title: "Your Orders", subtitle: "Bookings & Purchases", link: "/orders", disabled: true },
  { icon: <FiLock />, title: "Stream Library", subtitle: "Rented & Purchased Movies", link: "/stream", disabled: true },
  { icon: <FiCreditCard />, title: "Play Credit Card", subtitle: "View offers", link: "/credit", disabled: false },
  { icon: <FiHelpCircle />, title: "Help & Support", subtitle: "FAQs & chat", link: "/help", disabled: false },
  { icon: <FiLock />, title: "Accounts & Settings", subtitle: "Profile & payments", link: "/settings", disabled: true },
  { icon: <FiGift />, title: "Rewards", subtitle: "View & redeem", link: "/rewards", disabled: false },
  { icon: <FiRepeat />, title: "BookAChange", subtitle: "", link: "/bookachange", disabled: false },
];

const Menu = ({ show, handleClose }) => (
  <Offcanvas
    show={show}
    onHide={handleClose}
    placement="end"
    backdrop
    scroll
    style={{
      "--bs-offcanvas-width": "280px",
      "--bs-offcanvas-bg": "#fff",
      "--bs-offcanvas-box-shadow": "0 0 15px rgba(0,0,0,0.1)"
    }}
  >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title className="fw-bold fs-4">Hey there!</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className="p-0">
      <Nav className="flex-column">
        {menuItems.map(item => (
          <Nav.Link
            as={Link}
            to={item.link}
            key={item.title}
            onClick={handleClose}
            disabled={item.disabled}
            className="d-flex align-items-start px-4 py-3"
            style={{
              color: item.disabled ? "#999" : "#333",
              opacity: item.disabled ? 0.5 : 1,
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#f8f9fa"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            <span className="me-3 text-danger fs-5">{item.icon}</span>
            <div>
              <div className="fw-semibold">{item.title}</div>
              {item.subtitle && (
                <small className="text-muted">{item.subtitle}</small>
              )}
            </div>
          </Nav.Link>
        ))}
      </Nav>
    </Offcanvas.Body>
  </Offcanvas>
);

export default Menu;
