import React from 'react';
import PropTypes from 'prop-types';

import Map from '@/components/map/map';

import {ClassPrefix} from '@/helpers/const';

const MapCitites = (props) => {

  return <Map classPrefix={ClassPrefix.CITY} {...props}/>;
};

MapCitites.propTypes = {
  geoCoords: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  activeGeoCoords: PropTypes.array.isRequired,
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired
};

export default MapCitites;
