import styled from 'styled-components';

const StyledHome = styled.div`
  color: ${props => props.theme.text};
`;

const StyledButton = styled.button`
  color: ${props => props.theme.text};
  background: ${props => props.theme.primary};
  border-color: ${props => props.theme.secondary};
`;

export {
  StyledHome, StyledButton,
};
