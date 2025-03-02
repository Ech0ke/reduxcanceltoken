import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
} from "../state/counter/counterSlice";
import { useLocation } from "react-router";
import { useEffect } from "react";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  const location = useLocation();

  useEffect(() => {
    const promise = dispatch(incrementAsync(10));
    return () => {
      promise.abort();
    };
  }, [location.pathname]);

  return (
    <div>
      <span>Counter</span>
      {count}
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
