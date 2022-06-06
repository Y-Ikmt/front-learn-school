import React from 'react';
import './App.css';
import { HeaderComponents } from './components/headerComponent';
import { TopComponents } from './components/topComponents';
import { MenuComponents } from './components/menuComponent';
import { InfoComponents } from './components/infoComponent';
import { FooterComponents } from './components/footerComponent';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";



function App() {

  const [state, setState] = useState("top");

  const shoutParent = (props: string) => {
    setState(props);
    console.log(state);
  }

  return (
    <div className="App">


      <BrowserRouter>
      <HeaderComponents parentMethod={shoutParent}/>
        <Switch>
          <Route exact path="/">
            <TopComponents parentMethod={shoutParent}/>
          </Route>
          <Route path="/menu">
            <MenuComponents parentMethod={shoutParent}/>
          </Route>
          <Route path="/info">
            <InfoComponents  parentMethod={shoutParent}/>
          </Route>

        </Switch>
      </BrowserRouter>

      <FooterComponents/>

      {/*}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  {*/}
      
    </div>
  );
}

export default App;
