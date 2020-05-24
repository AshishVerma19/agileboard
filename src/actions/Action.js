// actions
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
// action creater

export function incrementCount() {
  return dispatch => {
    setTimeout(
      () => { dispatch({ type: INCREMENT }); },
      2000
    );
  };
}

export function decrementCount() {
  return { type: DECREMENT };
}
