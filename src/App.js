import React from 'react';
import FAPage from "./containers/1FApage";
import FA2 from "./containers/2FAPage";
import Limit from "./containers/limit";
import Guard from "./containers/guard";
import Error from "./containers/error";
import { Route, BrowserRouter } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Guard>
          <Route path="/1fa" component={FAPage} />
          <Route path="/limit" component={Limit} />
          <Route path="/2fa" component={FA2} />

        </Guard>

        <Route path="/error" component={Error} />


      </BrowserRouter>




    </div>);
}

export default App;
