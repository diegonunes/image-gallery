import {Container, Navbar} from 'react-bootstrap';
import PropTypes from 'prop-types';

const Header = ({title}) => {
  return (
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">{title}</Navbar.Brand>
        </Container>
      </Navbar>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;