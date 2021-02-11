import React from 'react';
import PropTypes from 'prop-types';

import {AppRoute, AuthStatus, ClassPrefix} from '@/helpers/const';

const BookmarkButton = (props) => {
  const {
    isActive,
    onBookmarkButtonClick,
    history,
    authStatus,
    id,
    classPrefix,
    size: [width, height]
  } = props;

  const activeClass = isActive ? `${classPrefix}__bookmark-button--active` : ``;
  const statusFlag = isActive ? 0 : 1;

  return (
    <button
      className={`${classPrefix}__bookmark-button button ${activeClass}`}
      type="button"
      onClick={() => authStatus === AuthStatus.AUTH ? onBookmarkButtonClick(id, statusFlag) : history.push(AppRoute.LOGIN)}
    >
      <svg className={`${classPrefix}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.defaultProps = {
  classPrefix: ClassPrefix.CARD,
  size: [18, 19]
};

BookmarkButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onBookmarkButtonClick: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  authStatus: PropTypes.oneOf(Object.values(AuthStatus)).isRequired,
  id: PropTypes.number.isRequired,
  classPrefix: PropTypes.oneOf(Object.values(ClassPrefix)),
  size: PropTypes.arrayOf(PropTypes.number)
};

export default BookmarkButton;
