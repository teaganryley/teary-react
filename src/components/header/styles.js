import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  height: 80px;
  background: purple;
  color: #000;
  figure {
    margin: auto;
    text-align: left;
  }
`;

const Menu = styled('nav')`
  margin: auto;
  ul {
    display: flex;
    flex-flow: row;
    justify-content: space-evenly;
    
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
