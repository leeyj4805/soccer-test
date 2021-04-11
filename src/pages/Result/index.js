import { Button, ResultSection, Container } from "components";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import RESULT from "components/ResultSection/result";

const Result = ({ setScore }) => {
	const { cCode } = useParams();
	const currentUrl = window.document.href;
	return (
		<>
		<Helmet>
			<meta property="og:url" content={currentUrl} />
			<meta property="og:title" content={RESULT[cCode]["ogTitle"]} />
			<meta
				property="og:description"
				content={RESULT[cCode]["ogDescription"]}
			/>
			<meta property="og:image" content={RESULT[cCode]["ogImage"]} />
			<meta name="twitter:title" content={RESULT[cCode]["ogTitle"]} />
			<meta
				name="twitter:description"
				content={RESULT[cCode]["ogDescription"]}
			/>
			<meta name="twitter:image" content={RESULT[cCode]["ogImage"]} />
        </Helmet>
		<Container>
			<ResultSection cCode={cCode}></ResultSection>
			<Button onClick={() => setScore(0)} to="/">
				테스트 다시하기
			</Button>
		</Container>
		</>
	);
};

export default Result;