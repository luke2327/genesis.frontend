import React ,{useState,useEffect}from 'react';
import './App.css';
import Movie from './movie';

/** 기본적으로 functional 컴포넌트를 사용 */
/** class 컴포넌트에 비해 가볍다 */
/** function App() {  << 이것과 같은 의미 */
  const movies = [
    {
      title:"예끔 하이",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNqxnmuvuEwDiYmKMtO1FJw5uMnjVfKnG5fbOm_ibD4AK6I6Fn&usqp=CAU",
    },
    {
      title:"원석 하이",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqpaZFjoQjLOWt6rZs43VoNCmaIFcVOnifBDm5Mr-Fq_oPCH1h&usqp=CAU",
    },
    {
      title:"준서 하이",
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHu7_i5FBXO4tFDpi_8qMv17RC5IQX5rXNfKy810Zt8myK11sJ&usqp=CAU",
    }];
const App: React.FC = (): JSX.Element => { 

  const [state, setState] = useState(0);
  const check = (status : number) => status === 1 ? true : false;

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?%20sort_by=rating')
    .then(response => 
      {
        console.log(response.json());
        setState(1);
      })
      
    .catch(error => console.log(error))
  })

  return (
    <div className="App">
      {
        check(state)
          ? movies.map((movie,k) => <Movie title= {movie.title} poster = {movie.poster} key={k}/>)
          : <h1>loding...</h1>
      }
    </div>
  );
}

export default App;
