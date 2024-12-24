import { Outlet, Link } from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <div>
                <Link to="/">
                    지수모
                </Link>
                <div>
                    <Link to="/">
                        홈
                    </Link>
                    <Link to="/likes">
                        즐겨찾기
                    </Link>
                </div>
            </div>
            <Outlet/>
        </div>
    );
};