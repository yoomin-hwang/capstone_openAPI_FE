import { useNavigate } from "react-router-dom";
import { PageWrapper } from "../App";

function LandingPage () {
    const navigate = useNavigate();

    const toLogin = () => {
        navigate(`/login-ing`);
    };

    return(
        <PageWrapper>
            <button onClick={() => {toLogin()}}>Move to Login</button>
        </PageWrapper>
    );
};

export default LandingPage;