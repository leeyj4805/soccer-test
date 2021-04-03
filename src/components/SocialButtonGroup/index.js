import styled from "styled-components";
import { 
    FacebookShareButton, 
    FacebookIcon,    
    TwitterShareButton,
    TwitterIcon,
 } from "react-share";
 import { CopyToClipboard } from "react-copy-to-clipboard";
 import { useScript } from "hooks";
 import { useEffect } from "react";
 import kakaoLogo from "assets/images/kakao.png";

// 버튼별로 40px을 확보하고, 각 영역 간에는 8px의 간격을 둠.
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-column-gap: 8px;
    justify-content: center;
    margin-bottom: 16px;
`;

// Style을 적용한 버튼 컴포넌트 추가
const URLShareButton = styled.button`
    width: 48px;
    height: 48px;
    color: white;
    border-radius: 24px;
    border: 0px;
    font-weight: 800;
    font-size: 16px;
    cursor: pointer;
    background-color: ${(props) => props.theme.primaryColor100};
    &:hover {
        background-color: ${(props) => props.theme.primaryColor80};
    }
`;
const KakaoShareButton = styled.a`
    cursor: pointer;
`;

const KakaoIcon = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 24px;
`;

// Button Group을 감싸는 Flex Container 추가
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// 공유 버튼 제목란 추가
const Title = styled.div`
    font-size: 16px;
    text-align: center;
    margin-bottom: 8px;
    font-weight: bold;
`;

const SocialButtonGroup = () => {
     // window 객체에서 현재 url 가져오기
    const currentUrl = window.location.href;
    const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
    // kakao sdk 초기화하기
    // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
    useEffect(() => {
        if (status === "ready" && window.Kakao) {
            // 중복 initialization 방지
            if (!window.Kakao.isInitialized()) {
                // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
                window.Kakao.init("582e69234e96d0039c3a20651bc9c9ba");
            }
        }
    }, [status]);
    const handleKakaoButton = () => {
        window.Kakao.Link.sendScrap({
            requestUrl: currentUrl,
        });
    };
    return (
        <FlexContainer>
            <Title>나의 결과 공유하기</Title>
            <GridContainer>
                <FacebookShareButton url={currentUrl}>
                    <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
                </FacebookShareButton>
                <TwitterShareButton url={currentUrl}>
                    <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
                </TwitterShareButton>
                <CopyToClipboard text={currentUrl}>
                    <URLShareButton>URL</URLShareButton>
                </CopyToClipboard>
                <KakaoShareButton onClick={handleKakaoButton}>
                    <KakaoIcon src={kakaoLogo}></KakaoIcon>
                </KakaoShareButton>
        </GridContainer>
        </FlexContainer>
    );
};

export default SocialButtonGroup;