import React from 'react';
import './App.css';


interface Props{
    title: string;
    poster: string;
}

const Movie: React.FC<Props> = ({title,poster}) => { /** App 은 React.FC 타입 이며, 이 함수의 반환 타입은 JSX.Element 라는 의미 */
    return ( /** 그럼 이 리,턴값의 타입은 JSX.Element 가 아닐 시 에러가 난다. 컴파일 전에 확인 및 디버깅 가능 */
        <div>
            <MoviePoster />
            <h1>{title} {poster}</h1>
        </div>

    );
  
    /** 위 문법은 html 과 비슷한 JSX 문법이다 */
}

 
const MoviePoster: React.FC = (): JSX.Element => { 
    return ( 
        <img src="https://lh3.googleusercontent.com/proxy/pjRHc7MFfURSuS1bnJuC5T63y4OLZAQXsHQGJk_5YGRIH7QQKfoDrTNU9OfZtdXggS8LSQy0YfIVg9j4u8IaufgoIXK_8nzqN7YuIoTD3xQVVa2x-1I" className="mapleStory" alt="안녕"/>
    );
  
    /** 위 문법은 html 과 비슷한 JSX 문법이다 */
}


export default Movie