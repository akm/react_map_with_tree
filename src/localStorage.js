// See https://github.com/akm/redux-todo/blob/30f50b4d36b0297323b31dce1dcb06154ec911ab/src/localStorage.js
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(err) {
    // Ignore write errors.
  }
};
