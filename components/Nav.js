import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.nav`
  margin: 0 0 0 -1rem;

  a {
    display: inline-block;
    color: white;
    padding: 0.75rem 1rem;
    border: 0;
  }
`;

const Nav = () => (
  <NavStyles role="navigation">
    <Link href="/music">
      <a>Music</a>
    </Link>
    <Link href="/tutorials">
      <a>Tutorials</a>
    </Link>
    <Link href="/websites">
      <a>Websites</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </NavStyles>
);

export default Nav;
