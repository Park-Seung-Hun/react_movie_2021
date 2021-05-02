import React from "react";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("마운트"); // mount 동작 (새로고침 등)
  }
  componentDidUpdate() {
    console.log("갱신"); // update 동작
  }
  componentWillUnmount() {
    console.log("언마운트 "); // 변경사항을 저장하면 확인 가능
  }
  render() {
    console.log("렌더링"); // render 동작 (새로고침 등)
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
