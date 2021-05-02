import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // Axios에서 온  Data를 잡는 과정
    // Axios는 느린 과정이기에 비동기처리
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
  };
  componentDidMount() {
    this.getMovies(); // 비동기 처리를 위해 함수 생성.
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "로딩중...😪" : "준비 완료!😁"}</div>;
  }
}

export default App;
