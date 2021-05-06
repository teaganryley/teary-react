import React from 'react';
import StyledHome from './styles';
import ContactCard from '../../components/contact-card';

const Home = () => (
  <StyledHome>
    <h2>Home</h2>
    <div className="row center-xs">
      <ContactCard className="col-xs" />
    </div>
  </StyledHome>
);

export default Home;
