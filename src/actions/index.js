const BASE_URL = 'https://wagon-garage-api.herokuapp.com';

// Action will go in reducer, so we need to update it.
export function fetchCars(garage) {
  // AJAX Request
  const url = `${BASE_URL}/${garage}/cars`;
  const promise = fetch(url)
    .then(r => r.json());

  return {
    type: 'FETCH_CARS',
    payload: promise // Will be resolved by redux-promise middleware
  };
}

export function removeCar(history, car) {
  const url = `${BASE_URL}/cars/${car.id}`;
  fetch(url, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => history.push(""));

  return {
    type: 'REMOVE_CAR',
    payload: car
  };
}

// Here we have garage and car in props.
// We will build the car with the information of the form.
// We add a callback.
export function addCar(garage, car, callback) {
  const url = `${BASE_URL}/${garage}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  }).then(r => r.json())
    .then(() => callback());
    // we call the callback after the HTTP request has comeback.
    // When the HTTP request comes back, we will call the callback we provided
    // So we return to containers/cars_new and execute the rest of the onSubmit function
  return {
    type: 'ADD_CAR',
    payload: request // Will be resolved by redux-promise
  };
}
