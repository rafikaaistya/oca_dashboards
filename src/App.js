import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";
import Sms from "./container/SmsScheduller";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/sms-scheduller">
            <Sms />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
