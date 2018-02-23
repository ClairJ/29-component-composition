import React from 'react';
import Dashboard from '../dashboard/dashboard';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <BrowserRouter>
        <div>
          <Route exact path="/" component={() => <h1>Made it to the home!</h1>}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
