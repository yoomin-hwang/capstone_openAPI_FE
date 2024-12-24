import { Outlet } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <div>header</div>
            <Outlet/>
        </div>
    );
};