import axios from "axios";

const openServer = process.env.REACT_APP_OPEN_API_URL;
const key = process.env.REACT_APP_OPEN_API_KEY;

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const HISNET_LOGIN_URL = `${process.env.REACT_APP_HISNET_URL}/HisnetLogin/hisnet-login`;
const HISET_RETURN_URL = process.env.REACT_APP_HISET_RETURN_URL;
const HISNET_ACCESS_KEY = process.env.REACT_APP_HISNET_ACCESS_KEY;

export const getPlantDataAPI = async (numOfRows, pageNo) => {
    try {
        const response = await axios.get(
            `${openServer}/indfltplt/indfltpltlist?pageNo=${pageNo}&numOfRows=${numOfRows}&serviceKey=${key}&_type=json`);
        console.log(response);
        // 옵셔널 체이닝
        return response?.data?.response?.body?.items?.item;
    } catch (err) {
        console.error(err);
    }
}

export const getWaterDataAPI = async (fcode, stdt, eddt, numOfRows, pageNo) => {
    try {
        const response = await axios.get(
            `${openServer}/wikwater/wikwaterlist?fcode=${fcode}&stdt=${stdt}&eddt=${eddt}&pageNo=${pageNo}&numOfRows=${numOfRows}&serviceKey=${key}&_type=json`);
        console.log(response);
        // 옵셔널 체이닝
        return response?.data?.response?.body?.items?.item;
    } catch (err) {
        console.error(err);
    }
};

// Axios 인스턴스 생성
const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 쿠키 포함
});
  
  const PublicaApiInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  // 요청 인터셉터: JWT 토큰 자동 추가
  apiInstance.interceptors.request.use(
    (config) => {
      const token = sessionStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
  // 응답 인터셉터: 401 오류 처리 (토큰 만료 시 로그아웃)
  apiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        alert('다시 로그인해 주세요.');
        sessionStorage.removeItem('token');
        window.location.href = '/';
      }
      return Promise.reject(error);
    }
  );
  const ApiService = {

// 히즈넷 로그인
  loginWithHisnet: () => {
    const url = `${HISNET_LOGIN_URL}?returnUrl=${encodeURIComponent(HISET_RETURN_URL)}&accessKey=${encodeURIComponent(HISNET_ACCESS_KEY)}`;
    window.location.href = url;
  },

  // 로그인 요청
  login: async (hisnetToken) => {
    try {
        const response = await apiInstance.post('/auth/login', { hisnetToken });
        console.log("Login Response:", response.data); // 응답 로그 확인
        return response.data; // JSON 데이터 반환
    } catch (error) {
        console.error("Login Error:", error);
        throw error;
    }
  },
};

export default ApiService;