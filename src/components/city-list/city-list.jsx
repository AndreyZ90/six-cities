import React, {memo} from 'react';
import PropTypes from 'prop-types';

import CityItem from '@/components/city-item/city-item';

const CityList = (props) => {
  const {cities, currentCity} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <CityItem
              key={city}
              city={city}
              isActive={city === currentCity}
            />))}
        </ul>
      </section>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentCity: PropTypes.string.isRequired,
};

export default memo(CityList);
