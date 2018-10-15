import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { darken } from 'polished';
import Header from './Header';
import Meta from './Meta';

const theme = {
  bali: '#6e94a0',
  java: '#17B3D9',
  javaDark: `${darken('0.1', '#17B3D9')}`,
  bondi: '#0C95B6',
  cyan: '#00ffff',
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

injectGlobal`
  ${styledNormalize}

  /* open-sans-regular - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('/static/fonts/open-sans-v15-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/static/fonts/open-sans-v15-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* open-sans-italic - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
    src: local('Open Sans Italic'), local('OpenSans-Italic'),
        url('/static/fonts/open-sans-v15-latin-italic.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/static/fonts/open-sans-v15-latin-italic.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* open-sans-700 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
        url('/static/fonts/open-sans-v15-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/static/fonts/open-sans-v15-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }
  /* open-sans-800 - latin */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'),
        url('/static/fonts/open-sans-v15-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/static/fonts/open-sans-v15-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  html {
    box-sizing: border-box;
    font-size: 18px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1rem;
    line-height: 1.4em;
    font-family: 'Open Sans', Arial, Helvetica, sans-serif, sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
    border-bottom: 2px dashed;
  }
  button {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif, sans-serif;
  }
  h1 {
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.2em;
    letter-spacing: -2px;
  }
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          {this.props.children}
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
