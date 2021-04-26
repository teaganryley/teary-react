import styled from 'styled-components';

const StyledButton = styled.button`
  width: 300px;
  height: 100px;
  color: ${props => props.theme.text};
  background: ${props => props.theme.primary};
`;

export default StyledButton;
