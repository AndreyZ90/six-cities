import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

import BookmarkButton from '@/components/bookmark-button/bookmark-button';

import Operation from '@/store/actions/operation';
import Selector from '@/store/selectors/selector';

const mapStateToProps = (state) => {
  return {
    authStatus: Selector.getAuthStatus(state)
  };
};

const mapDispatchToProps = {
  onBookmarkButtonClick: Operation.fetchFavoritesRequest
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(BookmarkButton);
