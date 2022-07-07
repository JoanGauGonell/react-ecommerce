import { useState } from 'react';

const CounterApp = ({ value = 0 }) => {

  const [ counter, setCounter ] = useState( value );

  const addValue = () => {
    setCounter( counter + 1 )
  }

  const substractValue = () => {
    if (counter > 0) {
    setCounter( counter - 1 )}
  }

  const resetValue = () => {
    setCounter( value = 0 )
  }


  // const handleAdd = () => {
  //   console.log(value++);
  // }

  return (
    <>
      <div>{ counter }</div>
      <button onClick={ addValue }>+</button>
      <button onClick={ resetValue }>C</button>
      <button onClick={ substractValue }>-</button>
    </>
  )
}

export default CounterApp;
