import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    setTimeout(() => {
      // JS함수 이다.
      this.setState({ isLoading: false });
    }, 6000);
  } // 1분 로딩창 설계
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "로딩중...😪" : "준비 완료!😁"}</div>;
  }
}

export default App;
