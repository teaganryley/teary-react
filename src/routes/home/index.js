import React, { useState } from 'react';
import {
  StyledHome, StyledButton,
} from './styles';
import ContactCard from '../../components/contact-card';

/*
  ideas:
    1) user clicks anywhere outside of the contact card-> card closes
*/

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  let content;

  if (isOpen) {
    content = <ContactCard className="col-xs" />;
  } else {
    content = (
      <StyledButton
        onClick={toggleOpen}
        className="col-xs"
      >
        Open!
      </StyledButton>
    );
  }
  return (
    <StyledHome>
      <h2>Home</h2>
      <div className="row center-xs">
        {content}
      </div>
    </StyledHome>
  );
};

export default Home;
