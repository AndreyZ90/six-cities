import React, {PureComponent} from 'react';

const withActiveFlag = (Component) => {
  return class WithActiveFlag extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActiveFlag: false
      };

      this._hangleFlagChange = this._hangleFlagChange.bind(this);
    }

    _hangleFlagChange() {
      this.setState({isActiveFlag: !this.state.isActiveFlag});
    }

    render() {
      return <Component isActiveFlag={this.state.isActiveFlag} onFlagChange={this._hangleFlagChange} {...this.props} />;
    }
  };
};

export default withActiveFlag;
