import {
  Navbar,
  Container,
  Nav,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { BsPhone, BsBagCheck } from 'react-icons/bs';
import { BiSearch, BiUser } from 'react-icons/bi';
import logo from '../../assets/image/logo3.png';
const Header = () => {
  return (
    <div className="header_component">
      <div className="top-header py-2 bg-light border-bottom">
        <Container className="d-flex align-items-center justify-content-between">
          <ul className="list-unstyled d-flex gap-4 align-items-center">
            <li>
              <FiPhoneCall />
              <a href="tel:">+8801517037484</a>
            </li>
            <li>
              <MdOutlineEmail />
              <a href="tel:">support@blackbirds.com</a>
            </li>
          </ul>
          <div>
            <BsPhone />
            <a href="">Our App</a>
          </div>
        </Container>
      </div>

      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center py-2">
            <img className="brand-logo" src={logo} alt="" />
            <InputGroup>
              <FormControl
                className="border border-primary"
                placeholder="Search here...."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled ">
              <li>
                <BsBagCheck />
              </li>
              <li>
                <BiUser />
              </li>
            </ul>
          </div>
        </Container>
      </div>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/help">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
