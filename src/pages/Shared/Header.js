import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import puLogo from "../../image/pu-logo.png";
import NoticeBoard from "../Dashboard/NoticeBoard";
import './Header.css'

function Header() {

  const navigate = useNavigate();

  const loginUser = JSON.parse(localStorage.getItem("user"));

  // signoutHandler
  const signoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }


  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="primary"  sticky="top" expand={expand} className="mb-3">
          <Container fluid >
            <Navbar.Brand as={Link} to="/">
              <img style={{ width: "7%" }} src={puLogo} alt="" /> <span>Presidency
                University</span>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img style={{ width: "7%" }} src={puLogo} alt="" /> Presidency
                  University

                </Offcanvas.Title>

              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <hr className="p-0 m-0" />

                  <Nav.Link as={Link} to="/">
                    Dashboard
                  </Nav.Link>

                  <hr className="p-0 m-0" />

                  <NavDropdown
                    title="Add Items"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/addBook">
                      Add Book
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/addThesis">
                      Add Thesis
                    </NavDropdown.Item>

                  </NavDropdown>

                  <hr className="p-0 m-0" />

                  <NavDropdown
                    title="View Items"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/viewBooks">
                      View Book
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/viewTheses">
                      View Thesis
                    </NavDropdown.Item>

                  </NavDropdown>

                  <hr className="p-0 m-0" />

                  {/* <NavDropdown
                    title="Item Issue"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item as={Link} to="/issueBook">
                      Book Issue
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/issueThesis">
                      Thesis Issue
                    </NavDropdown.Item>

                  </NavDropdown>

                  <hr className="p-0 m-0" /> */}

                  <NavDropdown
                    title="Members"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    { loginUser && loginUser.adminType !== null && loginUser.adminType === 'master-admin' &&
                      <>
                        <NavDropdown.Item as={Link} to="/adminList">
                          Admin List
                        </NavDropdown.Item>
                        <NavDropdown.Divider />

                      </>
                    }
                    <NavDropdown.Item as={Link} to="/userList">
                      User List
                    </NavDropdown.Item>
                    <NavDropdown.Divider />

                    {
                    loginUser && loginUser.adminType !== null && loginUser.adminType === 'master-admin' &&
                      <>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/addNewAdmin">
                          Add New Admin
                        </NavDropdown.Item>
                      </>
                    }
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/addNewUser">
                      Add New User
                    </NavDropdown.Item>
                  </NavDropdown>
                  <hr className="p-0 m-0" />
                  <Nav.Link as={Link} to="/issueRequest">
                    Issue Request
                  </Nav.Link>
                  <hr className="p-0 m-0" />
                  <hr className="p-0 m-0" />
                  <hr className="p-0 m-0" />
                  <hr className="p-0 m-0" />
                  <Nav.Link className="fw-bold text-uppercase text-center" as={Link} >
                    {
                      loginUser ? loginUser.name : "Admin name"
                    }
                  </Nav.Link>
                  <hr className="p-0 m-0" />
                  <Nav.Link className="btn btn-secondary text-white" as={"button"} onClick={signoutHandler}>
                    SIGN OUT
                  </Nav.Link>
                  <hr className="p-0 m-0" />
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
