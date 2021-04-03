
import React from "react";
import styled from "styled-components";
import RESULT from "./Result";
import { SocialButtonGroup } from "components";

const SectionTitle = styled.h1`
	font-size: 64px;
	font-weight: bold;
	margin-top: 0px;
	text-align: center;
`;

const StyledImage = styled.img`
	border-radius: 16px;
	opacity: 80%;
	max-width: 100%;
	display: block;
    margin-left: 28px;
`;

const ResultTitle = styled.div`
	font-size: 24px;
	margin-bottom: 20px;
	text-align: center;
`;

const ResultContant = styled.div`
    font-size: 13px;
    text-align: center;
    line-height: 26px;
    margin-bottom: 20px;
`;

const ResultSection = ({ cCode }) => (
	<>
		<SectionTitle>당신은 혹시?</SectionTitle>
		<StyledImage src={RESULT[cCode].src} />
		<ResultTitle>{RESULT[cCode].title}</ResultTitle>
        <SocialButtonGroup></SocialButtonGroup>
        <ResultContant>{RESULT[cCode].Contents}</ResultContant>
	</>
);
export default ResultSection;