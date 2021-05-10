import React, { useState, useRef } from 'react';
import { useOutsideClick } from 'rooks';
import {
  StyledHome, StyledButton,
} from './styles';
import ContactCard from '../../components/contact-card';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  const toggleOpen = () => setIsOpen(!isOpen);

  const outsideCardClick = () => toggleOpen();

  useOutsideClick(ref, outsideCardClick);

  return (
    <StyledHome>
      <h2>Home</h2>
      <div className="row center-xs">
        {(isOpen)
          ? <span ref={ref}><ContactCard className="col-xs" /></span>
          : <StyledButton onClick={toggleOpen} className="col-xs">Open!</StyledButton>}
      </div>
    </StyledHome>
  );
};

export default Home;
