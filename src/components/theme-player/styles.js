import styled from 'styled-components';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';

const StyledPlayer = styled.div`
  outline: solid;
  width: 300px;
  color: ${props => props.theme.text};
  outline-color: ${props => props.theme.tertiary};
`;

const SkipPrevious = styled(SkipPreviousOutlinedIcon)`
  cursor: pointer;
  color: ${props => props.theme.text};
`;

const SkipNext = styled(SkipNextOutlinedIcon)`
  cursor: pointer;
  color: ${props => props.theme.text};
`;

export {
  StyledPlayer, SkipPrevious, SkipNext,
};
