import React from 'react'; 
import { Connect } from 'react-redux';
import {increase, decrease} from './actions';
import counterReducer from '../redux/reducers';

const calculate = ({increase, decrease, counter}) => {
  return (
    <div>
      <h1>Counder{counter} </h1>      
    <button onClick={increase} >Add</button>
    <button onClick={decrease} >Minuse</button>

    </div>
  );
}
