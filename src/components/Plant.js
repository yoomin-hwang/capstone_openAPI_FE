import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            <div onClick={() => handleClickHeart(item.fltplt)}>
                {heart ? <p>❤️</p> : <p>🤍</p>}
            </div>
        </div>
    );                     
};

export default Plant;