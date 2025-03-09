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
        <PlantWrapper>
            <div onClick={() => handleClickDetail(item.fltplt)}>
                {item.fltpltnm}
            </div>
            <Heart onClick={() => handleClickHeart(item.fltplt)}>
                {heart ? <h1>❤️</h1> : <h1>🤍</h1>}
            </Heart>
        </PlantWrapper>
    );                     
};

export default Plant;

const PlantWrapper = styled.div`
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
width: 15rem;
margin: 1rem;
padding: 0.3rem 1rem;
background-color: ${(props) => props.theme.fade0};
border: 1px solid ${(props) => props.theme.fade1};
border-radius: 1rem;

&:hover {
    background-color: ${(props) => props.theme.fade1};
}
`

const Heart = styled.div`
&:hover {
    transform: scale(1.1);
}
`