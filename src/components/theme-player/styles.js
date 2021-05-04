import styled from 'styled-components';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';

const StyledPlayer = styled.div`
  outline: double;
`;

const SkipPrevious = styled(SkipPreviousOutlinedIcon)`
  cursor: pointer;
`;

const SkipNext = styled(SkipNextOutlinedIcon)`
  cursor: pointer;
`;

export {
  StyledPlayer, SkipPrevious, SkipNext,
};
