import React from "react";

function Food(props) {
  console.log(props, props.example1, props.example2, props.example3); // props는 객체로써 전달된다.
  return <h2>나는 {props.example1}입니다.</h2>;
}
/*
단일 props의 사용법
function Food({fav}) {
  return <h2>나는 {fav}입니다.</h2>;
}

<Food fav="김치" />
*/

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food example1="감자" example2={true} example3={[1, 2, 3, 4, "hello"]} />
    </div>
  );
}

export default App;
