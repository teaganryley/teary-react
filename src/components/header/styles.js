import styled from 'styled-components';

const StyledHeader = styled.header`
  background: ${props => props.theme.primary};
  text: ${props => props.theme.text};
  align-items: center;
  figure {
    text-align: left;
    display: block;
  }
`;

const StyledButton = styled.button`
  width: 300px;
  height: 100px;
  color: ${props => props.theme.text};
  background: ${props => props.theme.secondary};
`;

export { StyledHeader, StyledButton };
