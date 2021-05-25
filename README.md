# 📖 ReactJS 기초 지식

- ReactJS의 기초 지식을 익히기 위해 영화 웹을 제작

## ✅ ReactJS 란?

- 웹 프레임워크로, 자바스크립트 라이브러리의 하나로서 사용자 인터페이스(View) 를 만들기 위해 사용된다.
  - SPA (Single Page Application)이나 Mobile Application의 개발 시 토대로 사용

## ✅ React의 특징

1. **Data Flow**

   - React는 데이터의 흐름이 한 방향으로만 흐르는 `단반향 데이터 흐름`을 가진다. (데이터 흐름에서 일어나는 변화를 예측가능 하게 만든다.)
   - Angular.js와 같은 양방향 데이터 바인딩은 규모가 커질수록(대규모 애플리케이션의 경우) 데이터의 흐름을 추적하기가 힘들고 복잡해지는 경향이 있다.

2. **Componenet 기반 구조**

   - `Componenet란?` 독립적인 단위의 소프트웨어 모듈
   - React는 UI(View)를 여러 컴포넌트를 쪼개서 만든다. 한 페이지 내에서도 여러 독립된 컴포넌트를 만들고 이 컴포넌트를 조립해 화면을 구성한다.

   - `Component 구조의 장점`

     1. 전체 코드를 파악하기 쉽다.
     2. 기능 단위, UI 단위로 캡슐화 시켜 코드를 관리하기 때문에 재사용성이 높다.
        - 컴포넌트만 Import해 사용하면 된다는 간편함
        - 애플리케이션이 복잡해지더라도 코드의 유지보수, 관리가 용이해진다.

     - Header, Footer와 같은 구조등을 컴포넌트로 만들고, 이를 조합해 RootComponent를 만드는 예제.

```react
class App extends Component {
  render() {
    return (
      <Layout>
        <Header />
        <Navigation />
        <Content>
          <Sidebar></Sidebar>
          <Router />
        </Content>
        <Footer></Footer>
      </Layout>
    );
  }
}
```

- `함수형 컴포넌트 vs 클래스형 컴포넌트`
  - 현재는 함수형 컴포넌트 + React Hooks를 사용하길 권장.

1.  함수형 컴포넌트
    - 기존의 함수 형식과 동일

```react
function App() {
  const name = 'react';
  return <div className = "react">{name}</div>
}
```

2.  클래스형 컴포넌트
    - class 키워드가 필요
    - Component를 상속
    - render() 메소드와 보여주어야 할 JSX를 반환

```react
class App extends Component {
  render() {
    const name = 'react';
    return <div className="react">{name}</div>
  }
}
```

- `함수형과 클래스형의 차이`
  - 함수형
    - state,lifeCycle 관련 기능 사용 불가(Hook을 통해 해결)
    - 메모리 자원을 클래스형보다 덜 사용
    - 컴포넌트 선언이 편함
  - 클래스형
    - state,lifeCycle 관련 기능 사용 가능
    - 메모리 자원을 함수형보다 더 사용
    - 임의 메서드를 정의

[함수형과 클래스형 더 자세히 알아보기](https://velog.io/@sdc337dc/0.%ED%81%B4%EB%9E%98%EC%8A%A4%ED%98%95-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)

[React LifeCycle 더 자세히 알아보기](https://velog.io/@sdc337dc/Class-Component%EC%9D%98-Life-Cycle)

3. **Virtual DOM**

   - `DOM이란? (Documnet Object Model)` HTML, XML, CSS등을 트리 구조로 인식하고 데이터를 객체로 간주하고 관리한다.

   - `Virtual DOM이란?` 가상의 DOM으로, 이벤트가 발생하는 경우 Virtual DOM을 만들고, 다시 그릴 때마다 실제 DOM과 비교하고 전후 상태를 비교해, `변경이 필요한 최소한의 변경사항만 실제 DOM에 반영` (앱의 속도와 효율성을 개선)

4. **Props and State**

   - `Props란?` 부모 컴포넌트에서 자식 컴포넌트로 전달해 주는 데이터 (읽기 전용 데이터)

     - 자식 컴포넌트에서 전달받은 props는 변경이 불가
     - props를 전달해준 최상위 부모 컴포넌트만 props를 변경

   - `State란?` 컴포넌트 내부에서 선언하여 내부에서 값을 변경할 수 있다. (동적 데이터 Control) 클래스형 컴포넌트에서만 사용 가능 하고, 각각의 state는 독립적

5. **JSX**
   - JavaScript를 확장한 문법(필수는 아니다.)

```react
const element = <h1>Hello, world!</h1>;
```
