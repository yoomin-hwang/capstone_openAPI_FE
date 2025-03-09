// LoginCallback.js
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { authState } from '../authState';
import { memberState } from '../memberState';
import ApiService from "../api/api";

const LoginCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const setAuthState = useSetRecoilState(authState);
  const setMemberState = useSetRecoilState(memberState);

  // URL에서 토큰 추출
  const getTokenFromUrl = (search) => {
    const params = new URLSearchParams(search);
    return params.get('token'); // ?token=eyJhbGci... -> 토큰 반환
  };

  useEffect(() => {
    const handleToken = async () => {
      const token = getTokenFromUrl(location.search);
  
      if (token) {
        try {
          console.log(token);
          const response = await ApiService.login(token);
          
          // 세션 스토리지에 토큰 저장
          sessionStorage.setItem('token', response.data.token);
          console.log('토큰 저장:', response.data.token); 

          // 인증 상태 변경
          setAuthState({ isAuthenticated: true });

          // 토큰 정보 디코딩
          const payload = jwtDecode(response.data.token);
          console.log('payload:', payload);

          // 사용자 정보 상태 변경
          setMemberState({
            unique_id: payload.uniqueId,
            name: payload.name,
            email: payload.email,
          });
          // 페이지 이동
          navigate('/');
        } catch (error) {
          console.error("토큰 넘기는 과정에서 오류 발생:", error);
        }
      } else {
        console.error('토큰이 존재하지 않습니다.');
      }
    };
  
    handleToken();
  }, [location.search, navigate, setAuthState, setMemberState]);
};

export default LoginCallback;