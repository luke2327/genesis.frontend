import React,{useState} from 'react';
import './App.css';
import Movie from './movie';



/** 기본적으로 functional 컴포넌트를 사용 */
/** class 컴포넌트에 비해 가볍다 */
/** function App() {  << 이것과 같은 의미 */
const movies = [
  {
    title:"예끔 하이",
    poster:"URL 자리",
  },
  {
    title:"원석 하이",
    poster:"URL 자리",
  },
  {
    title:"준서 하이",
    poster:"URL 자리",
  }
];

const App: React.FC = (): JSX.Element => { /** App 은 React.FC 타입 이며, 이 함수의 반환 타입은 JSX.Element 라는 의미 */
  return ( /** 그럼 이 리턴값의 타입은 JSX.Element 가 아닐 시 에러가 난다. 컴파일 전에 확인 및 디버깅 가능 */
    <div className="App">
     {movies.map((movie) => 
     {
        
      return <Movie title={movie.title} poster={movie.poster}/>
     }
     )}
    </div>
  );

  /** 위 문법은 html 과 비슷한 JSX 문법이다 */
}
/** export 한다 뭐를? App 을 근데 어디에? default 에 */
/** export 방법은 es6 문법을 참고하면 좋을듯 */
export default App;
