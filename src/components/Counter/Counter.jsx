import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/mySlice';

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  return (
    <>
      <button onClick={() => dispatch(decrement(100))}>decrement</button>
      {value}
      <button onClick={() => dispatch(increment(100))}>increment</button>
    </>
  );
};
