import React from 'react';
import { useReducer } from 'react'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';



const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  additionalFeatures: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
};

// set up reducer and initial state
const reducer = (state, action) => {
  switch (action.type) {
    case "BUY_ITEM":
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.item.price,
        car: { ...state.car, features: [...state.car.features, action.item] },
        additionalFeatures: state.additionalFeatures.filter(feat => feat.id !== action.item.id)
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.item.price,
        car: { ...state.car, features: state.car.features.filter((feat) => feat.id !== action.item.id) },
        additionalFeatures: [...state.additionalFeatures, action.item]

      }

    default:

      return state;
  }
}
const App = () => {


  const [state, dispatch] = useReducer(reducer, initialState)

  const removeFeature = item => {
    // dispatch an action here to remove an item
    dispatch({ type: 'REMOVE_ITEM', })
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    dispatch({ type: 'BUY_ITEM', item })
  };



  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
