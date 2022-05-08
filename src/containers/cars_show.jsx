import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// You can get access to the history object’s properties and the closest <Route>'s match
// via the withRouter higher-order component. withRouter will pass updated match,
// location, and history props to the wrapped component whenever it renders.
import { Link, withRouter } from 'react-router-dom';

import Aside from '../components/aside';
import { removeCar } from '../actions';

class CarsShow extends Component {

  // history accessible thanks to withRouter
  handleClick = () => {
    this.props.removeCar(this.props.history, this.props.car);
  }

  render() {
    const car = this.props.car;
    if (!car) {
      return (
        <Aside key="aside" garage={this.props.garage}>
          <Link to="/">Back to list</Link>
        </Aside>);
    }
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div className="car-container" key="car">
        <div className="car-card">
          <img className="car-picture" src="/assets/images/logo_square.svg" />
          <div className="car-details">
            <span>{car.brand} - {car.model}</span>
            <ul>
              <li><strong>Owner:</strong> {car.owner}</li>
            </ul>
            <span className="plate">{car.plate}</span>
          </div>
          <button className="delete" onClick={this.handleClick}>
            <i className="fa fa-trash-o" aria-hidden="true"></i>
            Delete
          </button>
        </div>
      </div>
    ];
  }
};

// connects to the Redux State
// How do I get just one single post?
// 1: I should get the ID of the URL.
// 2: we have to access the existing component, with ownProps.
// We get it first automatically by the React Rooter. We don't have to do anything for it to happen.
// ownProps is a parameter given by Redux containing the props from the connected component.
// 3: id: we get the current ID of the URL. we parseInt to get the integer.
// 4: car: with find, i will parse the cars id to get the one similar to the URL
// 5: I then return the car.
function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id);
  return {
    car: state.cars.find((car) => car.id === id),
  };
}

// Connect to the Action
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeCar }, dispatch);
}

// Create a new component that is "connected" (to borrow redux terminology) to the router.
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarsShow));
