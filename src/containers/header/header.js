import {connect} from 'react-redux';

import Header from '@/components/header/header';

import Selector from '@/store/selectors/selector';

const mapStateToProps = (state) => {
  return {
    email: Selector.getEmail(state),
    authStatus: Selector.getAuthStatus(state)
  };
};


export default connect(mapStateToProps)(Header);
