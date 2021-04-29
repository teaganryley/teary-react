import styled from 'styled-components';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';

const StyledHeader = styled.header`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.text};
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

const SkipPrevious = styled(SkipPreviousOutlinedIcon)`
  cursor: pointer;
`;

const SkipNext = styled(SkipNextOutlinedIcon)`
  cursor: pointer;
`;

export {
  StyledHeader, StyledButton, SkipPrevious, SkipNext,
};
