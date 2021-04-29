import styled from 'styled-components';
// import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
// import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';

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

/*
const SkipPrevious = styled()`

`;

const SkipNext = styled()`

`;
*/

export { StyledHeader, StyledButton };
