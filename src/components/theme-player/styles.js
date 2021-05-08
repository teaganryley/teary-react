import styled from 'styled-components';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';

const StyledPlayer = styled.div`
  width: 20%;
  color: ${props => props.theme.text};
  border: thin solid ${props => props.theme.tertiary};
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
