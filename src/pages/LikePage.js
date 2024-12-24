import { Outlet } from "react-router-dom";

function LikePage () {
    return (
        <div>
            <Outlet/>
            <div>
                like
            </div>
        </div>
    );
};

export default LikePage;