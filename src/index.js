import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import  ContextProvider  from './login_Context/authContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);

// Redux itself is synchronous bcz after action creation that action is dispach immediatyly after that according to action reducer will call and state is created all of this process is fast.
// but when we work with API we have to take some rest to fatch data this type is introduce an asynchronous behaviour.to convert sync to async we use thunk middleware.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
