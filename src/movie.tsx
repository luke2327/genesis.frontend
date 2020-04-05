import React from 'react';
import './App.css';

const movie: React.FC = (): JSX.Element => { /** App 은 React.FC 타입 이며, 이 함수의 반환 타입은 JSX.Element 라는 의미 */
    return ( /** 그럼 이 리턴값의 타입은 JSX.Element 가 아닐 시 에러가 난다. 컴파일 전에 확인 및 디버깅 가능 */
        <div>
             <moviePoster />
            <h1>hello thias is a mov</h1>
        </div>

    );
  
    /** 위 문법은 html 과 비슷한 JSX 문법이다 */
}


const moviePoster: React.FC = (): JSX.Element => { 
    return ( 
        <img src="https://lh3.googleusercontent.com/proxy/pjRHc7MFfURSuS1bnJuC5T63y4OLZAQXsHQGJk_5YGRIH7QQKfoDrTNU9OfZtdXggS8LSQy0YfIVg9j4u8IaufgoIXK_8nzqN7YuIoTD3xQVVa2x-1I" className="mapleStory" alt="안녕"/>
    );
  
    /** 위 문법은 html 과 비슷한 JSX 문법이다 */
}


export default movie