
import useCounterStore from './CounterStore';

const Counter = () => {

  // const [value, dispatch] = useReducer(CounterReducer, 0)

  const {counter, increament, reset} = useCounterStore(); 

  return (
    <div>
      Counter ({counter})
      <button
        // onClick={() => dispatch({type: 'INCREMENT'})}
        onClick={() => increament()}
        className="btn btn-primary mx-1"
      >
        Increment
      </button>
      <button
        // onClick={() => dispatch({type: 'RESET'})}
        onClick={() => reset()}
        className="btn btn-primary mx-1"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
