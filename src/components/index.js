import React from 'react'; 
import { connect } from 'react-redux';
import {increase, decrease, reset} from '../redux/actions'


const Calculate = ({increase, decrease, reset, counter}) => {
  return (
    <div className='counterBody'>
      <h1>The magic here for free<p>Just put the button</p><p className='counter'>{counter}</p> </h1>      
    <button className='button1 increase' onClick={increase} >Add</button>
    <button className='button2 decrease'  onClick={decrease} >Minuse</button>
    <button className='button3 reset' onClick={reset} >Reset</button>

    </div>
  );
}; 

const mapStateProps = (state) => ({
  counter:state.counter
}); 

const mapDispatchToProp = {
  increase, 
  decrease,
  reset
}

export default connect(mapStateProps, mapDispatchToProp)(Calculate);
