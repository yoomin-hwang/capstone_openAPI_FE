import { Outlet } from "react-router-dom";
import { PageWrapper } from "../App";

function LikePage () {
    return (
        <PageWrapper>
            <Outlet/>
            <div>
                like
            </div>
        </PageWrapper>
    );
};

export default LikePage;