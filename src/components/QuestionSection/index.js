import React from "react";
import styled from "styled-components";
import { QUIZZES } from "../../contents";

// .question-section에 해당하는 CSS를 가져옴
const QuestionSectionWrapper = styled.div`
    margin-bottom: 16px;
`;

// .question-header에 해당하는 CSS를 가져옴
const PageLabel = styled.h1`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
`;

// .question-text에 해당하는 CSS를 가져옴
const QuestionTitle = styled.div`
    font-size: 20px;
    margin-bottom: 8px;
    font-weight: 600;
`;

const StyledImage = styled.img`
    border-radius: 16px;
    opacity: 80%;
    margin-bottom: 16px;
    max-width: 100%;
    display: block;
`;

const QuestionSection = ({currentNo,props}) => (
    <QuestionSectionWrapper>
        <PageLabel>
            <span>{QUIZZES[currentNo].id}</span>/{QUIZZES.length}
        </PageLabel>
        <StyledImage src={QUIZZES[currentNo].image} />
        <QuestionTitle>{QUIZZES[currentNo].question}</QuestionTitle>
    </QuestionSectionWrapper>
);
export default QuestionSection;