import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineSharpIcon from '@material-ui/icons/MailOutlineSharp';
import GitHubIcon from '@material-ui/icons/GitHub';

const StyledCard = styled.div`
  width: 30%;
  margin: 2% 0;
  color: ${props => props.theme.text};
  border: thin solid ${props => props.theme.tertiary};
`;

const LinkedIn = styled(LinkedInIcon)`
  cursor: pointer;
  color: ${props => props.theme.text};
`;

const Mail = styled(MailOutlineSharpIcon)`
  cursor: pointer;
  color: ${props => props.theme.text};
`;

const GitHub = styled(GitHubIcon)`
  cursor: pointer;
  color: ${props => props.theme.text};
`;

export {
  StyledCard, LinkedIn, Mail, GitHub,
};
