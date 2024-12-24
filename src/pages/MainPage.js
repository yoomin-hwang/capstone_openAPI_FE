import { Outlet } from "react-router-dom";

function MainPage () {
    return (
        <div>
            <Outlet/>
            <div>
                main
            </div>
        </div>
    );
};

export default MainPage;