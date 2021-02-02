import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import SortItem from '@/components/sort-item/sort-item';

import {SortType} from '@/helpers/const';

export default class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    this._handleSortListToggle = this._handleSortListToggle.bind(this);
    this._onCurrentSortChange = this._onCurrentSortChange.bind(this);
  }

  _handleSortListToggle() {
    this.setState({isOpen: !this.state.isOpen});
  }

  _onCurrentSortChange(sortType) {
    this.props.onCurrentSortChange(sortType);
    this._handleSortListToggle();
  }

  render() {
    const {currentSort} = this.props;
    const {isOpen} = this.state;

    const activeClass = isOpen ? `places__options--opened` : ``;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0} onClick={this._handleSortListToggle}>
          {currentSort}
          <svg className="places__sorting-arrow" width={7} height={4}>
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${activeClass}`}>
          {Object.values(SortType).map((item) => (
            <SortItem
              key={item}
              item={item}
              isActive={currentSort === item}
              onCurrentSortChange={this._onCurrentSortChange}
            />
          ))}
        </ul>
      </form>
    );
  }
}

Sort.propTypes = {
  currentSort: PropTypes.oneOf(Object.values(SortType)).isRequired,
  onCurrentSortChange: PropTypes.func.isRequired
};

