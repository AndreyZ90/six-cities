import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  return class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: -1
      };

      this._handleActiveItemChange = this._handleActiveItemChange.bind(this);
    }

    _handleActiveItemChange(item) {
      this.setState({activeItem: item});
    }

    render() {
      return (
        <Component
          activeItem={this.state.activeItem}
          onActiveItemChange={this._handleActiveItemChange}
          {...this.props}
        />
      );
    }
  };
};

export default withActiveItem;
