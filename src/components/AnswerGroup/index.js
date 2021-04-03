// components/AnswerGroup/index.js

import React from "react";
import styled from "styled-components";
import { QUIZZES } from "contents";
import { Button } from "components";

// answer-section에 해당하는 스타일을 가져옴
const AnswerGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`;


// 비구조 할당으로 currentNo, handleClick 꺼내기
const AnswerGroup = ({ currentNo, handleClick }) => (
    <AnswerGroupWrapper>
        {QUIZZES[currentNo].answers.map((answer) => (
            <Button
                key={answer.text}
                onClick={() => handleClick(answer.isCorrect)}
            >{answer.text}</Button>
        ))}
    </AnswerGroupWrapper>
);
export default AnswerGroup;