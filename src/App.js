import React, { Component } from 'react';
import Posts from './components/Posts';
import Postform from './components/Postform';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  state = {  }
  render() { 
    return (
      <Provider store={store}>
        <div>
          <Postform/>
          <hr/>
          <Posts/>        
        </div>
      </Provider>
    );
  }
}
 
export default App;
