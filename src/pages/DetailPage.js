import { Outlet } from "react-router-dom";

function DetailPage () {
    return (
        <div>
            <Outlet/>
            <div>detail</div>
        </div>
    );
};

export default DetailPage;