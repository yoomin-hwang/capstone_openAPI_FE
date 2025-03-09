import { PageWrapper } from "../App";
import ApiService from "../api/api";
import { useRecoilValue } from "recoil";
import { authState } from "../authState";
import { useState } from "react";
import styled from "styled-components";

function LoginPage () {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const auth = useRecoilValue(authState);

    const handleLoginClick = () => {
        setIsLoggingIn(true);
        ApiService.loginWithHisnet()
            .then(() => setIsLoggingIn(false))  // 로그인 성공 시 상태 변경
            .catch(() => setIsLoggingIn(false)); // 로그인 실패 시 상태 변경
    };

    return (
        <PageWrapper>
            <CenterContainer>
                <img src="/assets/frame.png" alt="CSEE 로고" />
                {auth.isAuthenticated ? (
                    <WelcomeMessage>환영합니다, {auth.userName}님!</WelcomeMessage>
                ) : (
                    <HisnetLoginButton onClick={handleLoginClick}>
                        {isLoggingIn ? "로그인 중..." : "히즈넷으로 로그인"}
                    </HisnetLoginButton>
                )}
            </CenterContainer>
        </PageWrapper>
    );
};

export default LoginPage;

const CenterContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

const WelcomeMessage = styled.h2`
    font-size: 24px;
    color: #333;
    font-weight: bold;
`;

const HisnetLoginButton = styled.button`
    background-color: #87CEFA;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    text-decoration: none;

    &:hover {
        background-color: #4682B4;
    }

    &:active {
        background-color: #0056b3;
    }
`;