import {connect} from 'react-redux';
import {compose} from 'redux';

import SignIn from '@/components/sign-in/sign-in';

import withAuthData from '@/HOCs/with-auth-data/with-auth-data';

import Operation from '@/store/actions/operation';

const mapDispatchToProps = {
  onButtonSubmit: Operation.fetchLoginRequestPost
};

export default compose(
    connect(null, mapDispatchToProps),
    withAuthData
)(SignIn);
