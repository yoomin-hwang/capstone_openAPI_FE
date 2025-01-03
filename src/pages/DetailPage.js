import { Outlet, useParams } from "react-router-dom";
import { Water } from "../components/Water";
import { useEffect, useState } from "react";
import { getWaterDataAPI } from "../api/api";

function DetailPage () {
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
        if(fltplt?.fltplt) {
            getWaterData();
        }
    }, [fltplt]);

    return (
        <div>
            <Outlet/>
            <div>
                <h3>수질 데이터</h3>
                {Array.isArray(waterData) && waterData.length > 0 ? ( // 배열인지 확인
                    waterData.map((item, index) => (
                        <div key={index}>
                            <Water data={item} /> {/* 데이터 전달 */}
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default DetailPage;