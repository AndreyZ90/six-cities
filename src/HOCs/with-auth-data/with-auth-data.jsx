import React, {PureComponent} from 'react';

const withAuthData = (Component) => {
  return class WithAuthData extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``
      };

      this._handleInputChange = this._handleInputChange.bind(this);
    }

    _handleInputChange(name, value) {
      this.setState({[name]: value});
    }

    render() {
      const {email, password} = this.state;

      return (
        <Component
          email={email}
          password={password}
          onDataChange={this._handleInputChange}
          {...this.props}
        />
      );
    }
  };
};

export default withAuthData;
