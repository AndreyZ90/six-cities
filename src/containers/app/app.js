import {connect} from 'react-redux';

import App from '@/components/app/app';

const mapStateToProps = ({offerList}) => {
  return {
    offers: offerList
  };
};

export default connect(mapStateToProps)(App);
