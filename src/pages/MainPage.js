import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { getPlaceDataAPI } from "../api/api";
import Plant from "../components/Plant";

function MainPage () {
    const [placeData, setPlaceData] = useState([]);

    const getPlaceData = async () => {
        try {
            const response = await getPlaceDataAPI("10", "1");
            setPlaceData(response);
        } catch (err) { 
            console.error(err);
        }
    }

    useEffect(() => {
        getPlaceData();
    }, []);

    return (
        <div>
            <Outlet/>
            <MainWrapper>
                {Array.isArray(placeData) && placeData.length > 0 ? ( // 배열인지 확인
                    placeData.map((item) => {
                        // 이 syntax 로는 JSX 구문을 사용할 수 있어서 변수 선언과 같은 더 복잡한 로직 구현 가능함
                        return <Plant key={item.fltplt} item={item} />;
                    })
                ) : (
                    <p>Loading...</p>
                )}
            </MainWrapper>
        </div>
    );
};

export default MainPage;

const MainWrapper = styled.div`
display: flex;
flex-direction: column;
`