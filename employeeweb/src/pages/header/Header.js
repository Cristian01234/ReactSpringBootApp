import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <NavbarBrand as={Link} to="/">
            <strong>Employee Management System</strong>
          </NavbarBrand>
          <Nav className="ml-auto">
            <NavLink as={Link} to="/" className="nav-link">Employee</NavLink>
            <NavLink as={Link} to="/create" className="nav-link">Post Employee</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
