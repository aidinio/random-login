import { Middleware } from "@reduxjs/toolkit";

export const localStorageMiddleware: Middleware = (store) => (next) => (action: any) => {
    const result = next(action);
    if ( action.type?.startsWith('user/login') ) {
      const authState = store.getState().user;
      localStorage.setItem('user', JSON.stringify(authState))
    }
    if ( action.type?.startsWith('user/logout') ) {
      localStorage.removeItem('user')
    }
    return result;
  };