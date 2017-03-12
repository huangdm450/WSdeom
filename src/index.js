import 'core-js/fn/object/assign';
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/Main';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));

let store = createStore(todoApp)
console.log(store.getState());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

