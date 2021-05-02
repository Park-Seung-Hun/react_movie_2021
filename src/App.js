import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    console.log("증가");
  };
  minus = () => {
    console.log("감소");
  };
  render() {
    return (
      <div>
        <h1>지금 나오는 숫자는 {this.state.count}</h1>
        <button onClick={this.add}>증가</button>
        <button onClick={this.minus}>감소</button>
      </div>
    );
  }
}

export default App;
