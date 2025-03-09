import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { getPlantDataAPI } from "../api/api";
import Plant from "../components/Plant";
import { PageWrapper } from "../App";

function MainPage () {
    const numOfRows = 30;
    const pageNo = 1;

    const [plantData, setPlantData] = useState([]);
    
    const getPlantData = async () => {
        try {
            const response = await getPlantDataAPI(numOfRows, pageNo);
            setPlantData(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getPlantData(); // 초기 데이터 로드
    }, [pageNo]);
    
    return (
        <PageWrapper>
            <Outlet/>
            <h1>정수장 목록</h1>

            <PlantsWrapper>
                {Array.isArray(plantData) && plantData.length > 0 ? ( // 배열인지 확인
                    plantData.map((item, index) => {
                        // 이 syntax 로는 JSX 구문을 사용할 수 있어서 변수 선언과 같은 더 복잡한 로직 구현 가능함
                        return <Plant key={index} item={item} />;
                    })
                ) : (
                    <p>No data</p>
                )}
            </PlantsWrapper>
        </PageWrapper>
    );
};

export default MainPage;

const PlantsWrapper = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 90%;
`