import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    // #주소를 이용해 route 구분
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

/*
  <Route>
    path => url에 붙는 주소 값을 나타낸다
    component => 해당 url일때 나타나는 component
    exact={true} => 해당 path일 때만 rendering이 되게끔 설정
*/

export default App;
