import {connect} from 'react-redux';
import {compose} from 'redux';

import SignInPage from '@/pages/sign-in-page/sign-in-page';

import withAuthData from '@/HOCs/with-auth-data/with-auth-data';

import Operation from '@/store/actions/operation';
import Selector from '@/store/selectors/selector';

const mapStateToProps = (state) => ({
  city: Selector.getCities(state)[0]
});

const mapDispatchToProps = {
  onButtonSubmit: Operation.fetchLoginRequestPost
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthData
)(SignInPage);
