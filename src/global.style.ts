import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    background-color:#e9e9e9;
    font-family: 'SpoqaHanSansNeo',-apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  #root{
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    overflow: auto;
    &::-webkit-scrollbar {
    display: none;
    }
    -webkit-tap-highlight-color: transparent;
    --blue:#abcfeb;
    --beige:rgb(246,232,219);
    --pink:rgb(221,184,207);
    --green:rgb(80,164,197);
    --grey:rgb(164,175,195);
    --header:rgba(rgba(46, 105, 154, 0.5))

  }

  * {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  p {
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  button {
    cursor: pointer;
    border: none;
    font-family:'SpoqaHanSansNeo';
  }

  pre{
    margin:0;
    font-family:'SpoqaHanSansNeo';
  }

  ul {
  list-style: none;
  padding: 0;
  margin: 0;
  }
  input {
    font-family:'SpoqaHanSansNeo';
    :focus{
      outline:none;
    }
  }
  hr {
    border: 0.5px solid #D4D2D9;
  }
  @font-face {
    font-family: 'SpoqaHanSansNeo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'SpoqaHanSansNeo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
      font-family: 'SpoqaHanSansNeo';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Bold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
  }
  @font-face {
    font-family: 'SpoqaHanSansNeo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: 'SpoqaHanSansNeo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }
`;
