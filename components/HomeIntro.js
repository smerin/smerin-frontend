import styled from 'styled-components';
import Link from 'next/link';
import { darken } from 'polished';

const HomeIntroStyle = styled.div`
  background: linear-gradient(
    ${props => props.theme.java},
    ${props => props.theme.javaDark}
  );
  display: flex;
  justify-content: space-between;

  div {
    padding: 2rem;
  }
  img {
    display: block;
  }
  p {
    font-size: 1.25rem;
    line-height: 1.5em;
  }
  a {
    border-color: ${props => props.theme.cyan};
    transition: all 0.3s ease;

    &:hover {
      color: white;
      border-color: whitHomee;
    }
  }
`;

const HomeIntro = props => (
  <HomeIntroStyle>
    <div>
      <h1>I'm a musician and web developer from Bristol, UK</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <p>
        Check out{' '}
        <Link href="music">
          <a>my music</a>
        </Link>
        ,{' '}
        <Link href="blog">
          <a>read my blog</a>
        </Link>{' '}
        or{' '}
        <Link href="contact">
          <a>get in touch!</a>
        </Link>
      </p>
    </div>
    <img
      src="/static/george-smerin-800x800.png"
      alt="George Smerin"
      width="700"
      height="700"
    />
  </HomeIntroStyle>
);

export default HomeIntro;
