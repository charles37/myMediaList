import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
var ReactDOM = require('react-dom');



// function Header() {
//     return (
//       <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
//         <Navbar.Brand href="#" style={{ color: '#FFF' }}>MyMediaList</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
//           <Nav className="mr-auto" style={{ color: '#FFF' }}>
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#profile">Profile</Nav.Link>
//             <Nav.Link href="#compare">Compare</Nav.Link>
//           </Nav>
//           <Form inline className="align-items-center">
//             <Dropdown className="mr-2">
//               <Dropdown.Toggle variant="outline-secondary" id="media-type-dropdown" style={{ color: '#FFF' }}>
//                 Media Type
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 <Dropdown.Item href="#movies">Movies</Dropdown.Item>
//                 <Dropdown.Item href="#tv-shows">TV Shows</Dropdown.Item>
//                 <Dropdown.Item href="#books">Books</Dropdown.Item>
//                 <Dropdown.Item href="#video-games">Video Games</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>
//             <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ color: '#FFF' }} />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//           <Nav className="ml-auto" style={{ color: '#FFF' }}>
//             <Nav.Link href="#my-list">My List</Nav.Link>
//             <Nav.Link href="#notifications">
//               <i className="fas fa-bell"></i>
//               <span className="badge badge-pill badge-secondary">3</span>
//             </Nav.Link>
//             <Nav.Link href="#login">Log In</Nav.Link>
//             <Nav.Link href="#sign-up">Sign Up</Nav.Link>
//             <Nav.Link href="#settings">
//               <i className="fas fa-cog"></i>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     );
//   }
  
function Header() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#" style={{ color: '#FFF' }}>MyMediaList</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{ color: '#FFF' }}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#compare">Compare</Nav.Link>
          </Nav>
          <Form inline>
            <Dropdown>
              <Dropdown.Toggle variant="outline-secondary" id="media-type-dropdown" style={{ color: '#FFF' }}>
                Media Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#movies">Movies</Dropdown.Item>
                <Dropdown.Item href="#tv-shows">TV Shows</Dropdown.Item>
                <Dropdown.Item href="#books">Books</Dropdown.Item>
                <Dropdown.Item href="#video-games">Video Games</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ color: '#FFF' }} />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto" style={{ color: '#FFF' }}>
            <Nav.Link href="#my-list">My List</Nav.Link>
            <Nav.Link href="#notifications">
              <i className="fas fa-bell"></i>
              <span className="badge badge-pill badge-secondary">3</span>
            </Nav.Link>
            <Nav.Link href="#login">Log In</Nav.Link>
            <Nav.Link href="#sign-up">Sign Up</Nav.Link>
            <Nav.Link href="#settings">
              <i className="fas fa-cog"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
  

ReactDOM.render(<Header />, document.getElementById('header'));

export default Header;
