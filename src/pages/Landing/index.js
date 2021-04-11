import styled from "styled-components";
import cover from "assets/images/title-photo.jpg";
import { Container, Button } from "components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import TitlePhoto from "assets/images/title-photo.jpg";

const Title = styled.h1`
	font-size: 40px;
	font-weight: bold;
	margin: 8px 0px;
	text-align: center;
	color: ${(props) => props.theme.primaryColor100};
`;

const SubTitle = styled.h1`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 24px;
	text-align: center;
	color: ${(props) => props.theme.gray80};
`;

const StyledImage = styled.img`
	border-radius: 16px;
	opacity: 80%;
	margin-bottom: 16px;
	max-width: 100%;
	display: block;
`;

const Text = styled.p`
	font-size: 16px;
	margin-bottom: 24px;
`;

const Landing = () => {
	const currentUrl = window.location.href;
	return (
	<>
		<Helmet>
				<meta property="og:url" content={currentUrl} />
				<meta property="og:title" content="나와 잘 맞는 축구팀은?" />
				<meta
                    property="og:description"
                    content="나와 맞는 축구팀은 어떤 팀일까?"
                />
				<meta property="og:image" content={TitlePhoto} />
				<meta name="twitter:title" content="나와 잘 맞는 축구팀은?" />
                <meta name="twitter:description" content="나와 맞는 축구팀은 어떤 팀일까?" />
                <meta name="twitter:image" content={TitlePhoto} />
		</Helmet>
		<Container>
			<Title>나에게 맞는 축구팀은?</Title>
			<SubTitle>나는 어떤 팀과 잘 맞을까?</SubTitle>
			<StyledImage src={cover} alt="cover"></StyledImage>
			<Text>
				2021년 3월 기준 최고의 축구팀 리버풀, 바이에른 뮌헨, 유벤투스
				이 중 당신에게 딱 맞는 축구팀은 무엇일까요? 지금 바로 테스트해보세요!
			</Text>
			<Link to="/quiz">
				<Button>테스트 바로가기</Button>
			</Link>
		</Container>
	</>
	);
};

export default Landing;