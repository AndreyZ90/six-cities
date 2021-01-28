import React from 'react';
import PropTypes from 'prop-types';

import Main from '@/components/main/main';

const App = (props) => {
  const {titlesOffers, onTitleClick} = props;

  return <Main titlesOffers={titlesOffers} onTitleClick={onTitleClick} />;
};

App.propTypes = {
  titlesOffers: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default App;
