import React from 'react';
import {Provider} from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import PostForm from './components/postform';
import Posts from'./components/posts';

function App() {
  return (
    <Provider store={store}>
    <div>
      <PostForm/>
      <hr/>
      <hr />
     < Posts/>
    </div>
    </Provider>
  );
}

export default App;
