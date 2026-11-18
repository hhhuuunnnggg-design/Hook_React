import { useReducer } from 'react';

type Action = { type: 'inc' } | { type: 'dec' } | { type: 'reset' };

function reducer(state: { count: number }, action: Action) {
  switch (action.type) {
    case 'inc': return { count: state.count + 1 };
    case 'dec': return { count: state.count - 1 };
    case 'reset': return { count: 0 };
  }
}

export function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: <strong>{state.count}</strong></p>
      <div className="row">
        <button onClick={() => dispatch({ type: 'inc' })}>+1</button>
        <button onClick={() => dispatch({ type: 'dec' })}>-1</button>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      </div>
    </div>
  );
}
