/* 실제로 movies를 render하기 위한 목적 */
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

/* 함수형 컴포넌트 사용 -> props를 위해서 */
function Movie({ id, year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title}></img>
      <div class="movie_data">
        <h3 class="movie_title">{title}</h3>
        <h5 class="movie_year">{year}</h5>
        <p class="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

/* propTypes를 설정해 prop의 타입을 정한다. */
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
export default Movie;
