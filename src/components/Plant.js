import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Plant (item) {
    item = item.item;
    let [heart, setHeart] = useState(false);

    const postHeart = async (fltplt) => {
        try {

        } catch (err) {
            console.error(err);
        }
    }
    
    const handleClickHeart = (fltplt) => {
        setHeart(!heart);
    }

    const navigate = useNavigate();
    
    const handleClickDetail = (fltplt) => {
        navigate(`/detail/${fltplt}`);
    };

    return (
        <div>
            <div onClick={() => handleClickDetail(item.fltplt)}>
                {item.fltpltnm}
            </div>
            <Heart onClick={() => handleClickHeart(item.fltplt)}>
                {heart ? <h1>❤️</h1> : <h1>🤍</h1>}
            </Heart>
        </div>
    );                     
};

export default Plant;

const Heart = styled.div`
cursor: pointer;
`