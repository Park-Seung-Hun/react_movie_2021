/* 실제로 movies를 render하기 위한 목적 */
import React from "react";
import PropTypes from "prop-types";

/* 함수형 컴포넌트 사용 -> props를 위해서 */
function Movie({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
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
