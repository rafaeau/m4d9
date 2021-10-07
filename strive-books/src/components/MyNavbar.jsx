import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { Link, useHistory, withRouter } from 'react-router-dom'

const TopNavbar = ({ history }) => {

    return (
        <Navbar bg="dark" variant="dark" /* className="sticky-top" */>
            <Navbar.Brand href="#home">Strive-books</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/" className="no-underline">
                    <span className="nav-link navbar-links">Home</span>
                </Link>
                <Nav.Link onClick={() => history.push('/register')}>Registration</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default withRouter(TopNavbar)