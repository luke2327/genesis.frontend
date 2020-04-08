import React, { useState, useEffect } from 'react';
import './App.css';
import Movie from './movie';

/** 기본적으로 functional 컴포넌트를 사용 */
/** class 컴포넌트에 비해 가볍다 */
/** function App() {  << 이것과 같은 의미 */
const movies = [
  {
    title: '예끔 하이',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNqxnmuvuEwDiYmKMtO1FJw5uMnjVfKnG5fbOm_ibD4AK6I6Fn&usqp=CAU',
  },
  {
    title: '원석 하이',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRqpaZFjoQjLOWt6rZs43VoNCmaIFcVOnifBDm5Mr-Fq_oPCH1h&usqp=CAU',
  },
  {
    title: '준서 하이',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHu7_i5FBXO4tFDpi_8qMv17RC5IQX5rXNfKy810Zt8myK11sJ&usqp=CAU',
  },
];

interface YTMovie {
  data: {
    limit: number;
    movie_count: number;
    movies: Array<Record<any, string>>;
    page_number: number;
  };
}

const App: React.FC = (): JSX.Element => {
  const [state, setState] = useState<any>();

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?%20sort_by=rating')
      .then(response => {
        if(!response.ok) {
          throw new Error('not ok');
        }

        return response.json() as Promise<YTMovie>;
      }).then(re => {
        setState(re.data.movies);
      })
      .catch(e => {
        console.log(e);
      });
  });

  console.log(state);

  return (
    <div className="App">
      {
        state !== undefined
        ? state.map((v: any, k: number) => <Movie key={k} title={v.title} poster={v.medium_cover_image} />)
        : 'loading'
      }
    </div>
  );
};

export default App;
