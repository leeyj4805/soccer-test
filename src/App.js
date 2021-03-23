import React,{useState} from "react";
import "./App.css";
import life from "./assets/images/health-care.png";

function App() {
  const [currentNo, setCurrentNo] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const quizzes = [{
    id: 1,
    question: "1. 당신의 삶에서 가장 중요한 것은 무엇인가요?",
    answers: [
            { text: "돈", isCorrect: true },
            { text: "명예", isCorrect: false },
            { text: "성공", isCorrect: false },
            { text: "노력", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "2. 내가 생각을 해봤을 때...",
    answers: [
        { text: "천재가 다수의 똑똑한 사람보다 낫다", isCorrect: false },
        { text: "다수의 똑똑한 사람이 천재 보다 낫다", isCorrect: true },
        { text: "돈이 최고다", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "3. 운동할 때 입고 싶은 티셔츠 색은?",
    answers: [
        { text: "빨강", isCorrect: true },
        { text: "파랑", isCorrect: false },
        { text: "검정색", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "4. 축구는 ( )이다.",
    answers: [
        { text: "공격", isCorrect: false },
        { text: "패스", isCorrect: true },
        { text: "수비", isCorrect: false },
        { text: "조직력", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "5. 당신이 가고 싶은 나라는 어디인가요?",
    answers: [
        { text: "영국", isCorrect: false },
        { text: "독일", isCorrect: true },
        { text: "이탈리아", isCorrect: false },
    ],
  },
  
  ];

  const handleClick = (isCorrect) => {
    if (isCorrect) {
        setScore((score)=> score + 1);
    } 
    // 마지막 퀴즈인지 체크하기
    if (currentNo === quizzes.length - 1) {
        setShowResult(true);
    } else {
        setCurrentNo((currentNo) => currentNo + 1);
    }
  };
  const convertedScore = Math.floor((score / quizzes.length) * 100);
    
  return (
        <div className="container">
          {showResult ? (
              <div className="app">
                <h1 className="result-header">당신의 점수는?</h1>
                <p className="result-score">{convertedScore}</p>
              </div>
            ) : ( 
              <div className="app">
                  <div className="question-section">
                      <h1 className="question-header">
                        <span>{quizzes[currentNo].id}</span>/{quizzes.length}
                      </h1>
                      <img src={life} alt="life" />
                      <div className="question-text">{quizzes[currentNo].question}</div>
                  </div>
                  <div className="answer-section">
                      {quizzes[currentNo].answers.map((answer) => (
                        <button 
                            value={answer.text} 
                            onClick={() => handleClick(answer.isCorrect)}
                          >
                            {answer.text}
                        </button>
                      ))} 
                  </div>
              </div>  
            )}
          </div>
    );
}

export default App;