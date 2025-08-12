export const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    if ( action.type?.startsWith('user/') ) {
      const authState = store.getState().user;
      localStorage.setItem('user', JSON.stringify(authState))
    }
    return result;
  };