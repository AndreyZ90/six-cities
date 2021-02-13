import React, {PureComponent} from 'react';

const withValidationForm = (Component) => {
  return class WithValidationForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        review: ``,
        rating: -1,
        isValid: false
      };

      this._handleValueChange = this._handleValueChange.bind(this);
      this._onFormClear = this._onFormClear.bind(this);
    }

    _handleValueChange(name, value) {
      this.setState({[name]: value}, this._checkValidForm);
    }

    _checkValidForm() {
      const {review, rating} = this.state;

      if ((review.length >= 50 && review.length <= 300) && rating !== -1) {
        this.setState({isValid: true});
      } else {
        this.setState({isValid: false});
      }
    }

    _onFormClear() {
      this.setState(({review: ``, rating: -1, isValid: false}));
    }

    render() {
      const {review, rating, isValid} = this.state;

      return (
        <Component
          review={review}
          rating={Number(rating)}
          isValid={isValid}
          onValueChange={this._handleValueChange}
          onFormClear={this._onFormClear}
          {...this.props}/>
      );
    }
  };
};

export default withValidationForm;
