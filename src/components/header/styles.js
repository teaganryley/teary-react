import styled from 'styled-components';

const StyledHeader = styled.header`
  background: purple;
  color: #000;
  figure {
    text-align: left;
    display: block;
    padding: 1em;
  }
`;

const Menu = styled('nav')`
  ul {
    display: flex;
    flex-flow: row;
    list-style: none;
    padding: 0;
    background: deepskyblue;
    a {
      text-align: center;
      text-decoration: none;
      display: block;
      padding: 1em;
      color: white;
    }
  }
`;

export { StyledHeader, Menu };
