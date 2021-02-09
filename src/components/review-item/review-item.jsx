import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import RatingReviews from '@/components/rating-reviews/rating-reviews';

const ReviewItem = (props) => {
  const {
    comment,
    date,
    rating,
    user: {
      avatarUrl,
      isPro,
      name
    }
  } = props;

  const activeClass = isPro ? `reviews__avatar--active` : ``;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className={`reviews__avatar user__avatar ${activeClass}`} src={`${avatarUrl}`} width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <RatingReviews rating={rating} />
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={moment(date).format(`YYYY-MM-DD`)}>{moment(date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default ReviewItem;
