import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Aside from '../components/aside';
import { addCar } from '../actions';

class CarsNew extends Component {
  // Callback that we have whenever the form is submitted.
  // 1: we trigger the addCar action and pass values
  // 2: we are passing a callback to the addCar action.
  // 3: the callback comes back, and this code just pushes
  // on the history the slash "/"
  // 4: So now that we have the form, we create a Post (localhost:8080/posts/new)
  // 5: it will submit the post and bring back to (localhost:8080)
  onSubmit = (values) => {
    this.props.addCar(this.props.garage, values, () => {
      this.props.history.push('/'); // Navigate after submit
    });
  }

  render() {
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpeg')" }}>
        <div className="overlay"></div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <Field name="brand" type="text" placeholder="Aston Martin" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <Field name="model" type="text" placeholder="DB Mark III" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <Field name="owner" type="text" placeholder="James Bond" component="input" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <Field name="plate" type="text" placeholder="DB Mark III" component="input" className="form-control" />
          </div>
          <button type="submit">Add car</button>
        </form>
      </div>
    ];
  }
};

// Connect to Redux State and access the garage.
function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

// When we connect a redux component containing a form, we export default reduxForm with specific ID
// Then connect with the action we want to use in the form.
export default reduxForm({
  form: 'newCarForm' // a unique identifier
})(
  connect(mapStateToProps, { addCar })(CarsNew)
);
