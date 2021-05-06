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
      <LinkedIn className="col-xs" />
      <Mail className="col-xs" />
      <GitHub className="col-xs" />
    </div>
  </StyledCard>
);

export default ContactCard;
