import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers'
import 'font-awesome/css/font-awesome.min.css';
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import SongsOverview from "./mainComponents";
import About from "./mainComponents/About";
<script src="https://kit.fontawesome.com/c290d7fcd1.js" crossorigin="anonymous"></script>

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <SongsOverview /> },
      { path: 'about', element: <About /> }
    ],
  }
])

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
