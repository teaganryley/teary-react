import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background: purple;
  color: #000;
  figure {
    text-align: left;
    display: block;
  }
`;

const Menu = styled('nav')`
  ul {
    display: flex;
    flex-flow: row;
    list-style: none;

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
