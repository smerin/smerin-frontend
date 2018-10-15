import styled from 'styled-components';
import Nav from './Nav';

const HeaderStyles = styled.div`
  background: ${props => props.theme.black};
  color: white;
  padding: 1.5rem 2rem 0.5rem;
  height: 9rem;

  h1 {
    margin: 0 0 0.25rem;
  }
`;
const Header = () => (
  <HeaderStyles>
    <h1>George Smerin</h1>
    <Nav />
  </HeaderStyles>
);

export default Header;
