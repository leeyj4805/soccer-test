import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import GlobalStyle from "globalStyle";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Quiz, Landing, Result, Loading } from "pages";
import { QUIZZES } from "contents";
import { Helmet } from "react-helmet";
import favicon from "assets/images/favicon.ico";
import Title from "assets/images/title-photo.jpg";

function App() {
	const [score, setScore] = useState(0);
	const convertedScore = Math.floor((score / QUIZZES.length) * 100)
	const currentUrl = document.location.href;

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			 <Helmet>
				<meta property="og:url" content={currentUrl} />
				<meta property="og:title" content="나와 잘 맞는 축구팀은?" />
				<meta
                    property="og:description"
                    content="나와 맞는 축구팀은 어떤 팀일까?"
                />
				<meta property="og:image" content={Title} />
				<meta name="twitter:title" content="나와 잘 맞는 축구팀은?" />
                <meta name="twitter:description" content="나와 맞는 축구팀은 어떤 팀일까?" />
                <meta name="twitter:image" content={Title} />
    			<title>나와 잘 맞는 축구팀은?</title>
				<link rel="icon" href={favicon} />
            </Helmet>
			<Router>
				<Route path="/result/:cCode">
					 <Result setScore={setScore} />
				</Route>
				<Route path="/quiz">
					<Quiz setScore={setScore} />
				</Route>
				<Route path="/loading">
					<Loading convertedScore={convertedScore} />
				</Route>
				<Route path="/" exact>
					<Landing />
				</Route>
			</Router>
		</ThemeProvider>
	);
}

export default App;