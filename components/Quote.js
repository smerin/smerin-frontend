import styled from 'styled-components';

const QuoteStyle = styled.div`
  background: ${props => props.theme.java};
  color: white;
  padding: 1.5rem 2rem;

  blockquote {
    margin: 0;
  }
  p {
    margin: 0 0 1rem;
  }
  cite {
    display: block;
  }
`;

const Quote = () => (
  <QuoteStyle>
    <blockquote>
      <p>
        It must be a great feeling to know that you’ve made your own name a
        synonym for good-time fun, but that’s just what George Smerin has
        achieved with his eponymous Anti-Social Club
      </p>
      <cite>Tony Benjamin, Venue Magazine 2014</cite>
    </blockquote>
  </QuoteStyle>
);

export default Quote;
