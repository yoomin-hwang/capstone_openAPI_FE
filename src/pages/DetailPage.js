import { Outlet, useParams, useNavigate } from "react-router-dom";
import { Water } from "../components/Water";
import { useEffect, useState } from "react";
import { getWaterDataAPI } from "../api/api";
import { PageWrapper } from "../App";
import { useSetRecoilState } from 'recoil';
import { authState } from '../authState';
import { memberState } from '../memberState';

function DetailPage () {
    const setAuth = useSetRecoilState(authState);
    const setMember = useSetRecoilState(memberState);
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth({
          isAuthenticated: false,
        });
        setMember({
          unique_id: null,          // 사용자 ID
          name: '',          // 사용자 이름
          email: '',         // 사용자 이메일
          level: '',         // 사용자 권한
        });
        sessionStorage.removeItem('token'); // 로그아웃 시 토큰 삭제
        navigate('/'); // 로그아웃 후 로그인 페이지로 이동
      };

    let fltplt = useParams();
    const [waterData, setWaterData] = useState([]);

    const getWaterData = async () => {
        try {
            const data = await getWaterDataAPI(fltplt.fltplt, "2018-10", "2018-11", "10", "1");
            console.log(fltplt);
            setWaterData(data);
        } catch (error) {
            console.error("메인 데이터 가져오기 실패:", error);
        }
    };

    useEffect(() => {
        getWaterData();
    }, []);

    return (
        <PageWrapper>
            <Outlet/>
            <div>
                <h3>수질 데이터</h3>
                {Array.isArray(waterData) && waterData.length > 0 ? ( // 배열인지 확인
                    waterData.map((item, index) => (
                        <div key={index}>
                            <Water item={item} /> {/* 데이터 전달 */}
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <button onClick={handleLogout}>로그아웃</button>
        </PageWrapper>
    );
};

export default DetailPage;