import React from 'react';
import PropTypes from 'prop-types';

import Main from '@/components/main/main';

const App = (props) => {
  const {titlesOffers} = props;

  return <Main titlesOffers={titlesOffers} />;
};

App.propTypes = {
  titlesOffers: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
