// components/AnswerGroup/index.js

import React from "react";
import styled from "styled-components";
// QUIZZES를 사용하기 위해 import 해왔습니다.
import { QUIZZES } from "../../contents";
import { Images } from "../../Images";
import Button from "../Button";

// answer-section에 해당하는 스타일을 가져옴
const AnswerGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`;

const ImagesGroup = [
    {
        id: 1,
        name: "life",
        image:"../../assets/images/health-care.png",
    },
    {
        id: 2,
        name: "ball",
        image:"../../assets/images/ball.png",
    },
    {
        id: 3,
        name: "idea",
        image:"../../assets/images/idea.png",
    },
    {
        id: 4,
        name: "tshirt",
        image:"../../assets/images/tshirt.png",
    },
    {
        id: 5,
        name: "country",
        image:"../../assets/images/country.png",
    },

]

// 비구조 할당으로 currentNo, handleClick 꺼내기
const AnswerGroup = ({ currentNo, handleClick }) => (
    <AnswerGroupWrapper>
        <ImagesGroup key={Index.id}/>
        {QUIZZES[currentNo].answers.map((answer, Index) => (
            
            <Button
                text={answer.text}
                onClick={() => handleClick(answer.isCorrect)}
            ></Button>
        ))}
    </AnswerGroupWrapper>
);
export default AnswerGroup;