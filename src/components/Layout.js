import { Route } from "react-router-dom";
import { Header } from "./Header";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import LikePage from "../pages/LikePage";

function Layout () {
    <Route path="/" element={<Header/>}>
        <Route path="/" element={<MainPage/>} />
        {/* 여기 이름 fltplt 대로 useParams 의 key 명 정해짐 */}
        <Route path="/detail/:fltplt" element={<DetailPage/>} />
        <Route path="/likes" element={<LikePage/>} />
    </Route>
};

export default Layout;