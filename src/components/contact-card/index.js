import React from 'react';
import {
  StyledCard, LinkedIn, Mail, GitHub,
} from './styles';

const ContactCard = () => (
  <StyledCard>
    <div className="row center-xs">
      <div className="col-xs">
        Text will go here!
      </div>
    </div>
    <div className="row center-xs">
      <a
        className="col-xs"
        href="https://www.linkedin.com/in/teagan-ryley/"
        aria-label="LinkedIn"
      >
        <LinkedIn />
      </a>
      <a
        className="col-xs"
        href="mailto:teaganschultz@gmail.com"
        aria-label="Mail"
      >
        <Mail />
      </a>
      <a
        className="col-xs"
        href="https://github.com/teaganryley"
        aria-label="GitHub"
      >
        <GitHub />
      </a>
    </div>
  </StyledCard>
);

export default ContactCard;
