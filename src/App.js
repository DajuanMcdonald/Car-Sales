import React from 'react';
import { useReducer } from 'react'
import { connect } from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { buyItem, removeFeature } from '../src/actions/index'
import { reducer, initialState } from '../src/reducers/index';


const App = (state) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures
          car={state.car}
          removeFeature={removeFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={state.additionalFeatures}
          buyItem={buyItem}
        />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = {
  buyItem,
    removeFeature
}


export default connect(
  state => ({
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }),
  mapStateToProps)(App);
