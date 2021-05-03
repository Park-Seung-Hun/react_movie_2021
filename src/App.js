import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // Axios에서 온  Data를 잡는 과정
    // Axios는 느린 과정이기에 비동기처리
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );

    this.setState({ movies, isLoading: false });
    console.log(movies, movies[0].genres);
  };

  componentDidMount() {
    this.getMovies(); // 비동기 처리를 위해 함수 생성.
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">준비 중...😁</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(
              (movie) => (
                (movie.genres =
                  typeof movie.genres == "undefined"
                    ? ["undefined"]
                    : movie.genres),
                console.log(movie.genres),
                (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                  />
                )
              )
            )}
          </div>
        )}
      </section>
    );
  }
}

export default App;
