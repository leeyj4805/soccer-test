import LIFE from './assets/images/health-care.png'
import BALL from './assets/images/ball.png'
import IDEA from './assets/images/idea.png'
import TSHIRT from './assets/images/tshirt.png'
import COUNTRY from './assets/images/country.png'


    const QUIZZES = [{
    id: 1,
    question: "1. 당신의 삶에서 가장 중요한 것은 무엇인가요?",
    image: LIFE,
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
    image: IDEA,
    answers: [
        { text: "천재가 다수의 똑똑한 사람보다 낫다", isCorrect: false },
        { text: "다수의 똑똑한 사람이 천재 보다 낫다", isCorrect: true },
        { text: "돈이 최고다", isCorrect: false },
    ],
  },
  { 
    id: 3,
    question: "3. 운동할 때 입고 싶은 티셔츠 색은?",
    image: TSHIRT,
    answers: [
        { text: "빨강", isCorrect: true },
        { text: "파랑", isCorrect: false },
        { text: "검정색", isCorrect: false },
    ],
  },
  { 
    id: 4,
    question: "4. 축구는 ( )이다.",
    image: BALL,
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
    image: COUNTRY,
    answers: [
        { text: "영국", isCorrect: false },
        { text: "독일", isCorrect: true },
        { text: "이탈리아", isCorrect: false },
    ],
  },
  
  ];

export {QUIZZES};