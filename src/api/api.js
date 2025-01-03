import axios from "axios";

const openServer = process.env.REACT_APP_OPEN_API_URL;
const key = process.env.REACT_APP_OPEN_API_KEY;

export const getPlaceDataAPI = async (numOfRows, pageNo) => {
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

