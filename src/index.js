import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store  from './redux/redux-store';
// import store  from './redux/store'
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';

 let renderEntireTree = (state) => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
        {/* <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}/> */}
        <App />
        </Provider>
      </React.StrictMode>
      </BrowserRouter>
    )
    // ReactDOM.render(
    //   <BrowserRouter>
    //     <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    //   </BrowserRouter>, document.getElementById('root')
    // )
  }

  renderEntireTree();

// renderEntireTree(store.getState());

// store.subscribe(renderEntireTree);

// store.subscribe(() => {
//   let state = store.getState();
//   renderEntireTree(state)
// });


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

