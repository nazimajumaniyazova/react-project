import React from 'react';
import { increment } from '../../store/reducers/SearchBarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store/store';
export type RootState = ReturnType<typeof store.getState>;
function About() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        clic
      </button>
    </div>
  );
}

export default About;
