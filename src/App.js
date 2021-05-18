import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    // #주소를 이용해 route 구분
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

/*
  <Navigation>
    홈이랑 About으로 가는 버튼 2가지 만드리
*/

export default App;
