import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
    return (
        <div>
            <HeaderWrapper>
                <Menu>
                    <Link to="/">
                        지수모
                    </Link>
                </Menu>
                <Menu>
                    <Menu>
                        <Link to="/">
                            홈
                        </Link>
                    </Menu>
                    <Menu>
                        <Link to="/likes">
                            즐겨찾기
                        </Link>
                    </Menu>
                </Menu>
            </HeaderWrapper>
            <Outlet/>
        </div>
    );
};

const HeaderWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100vw;
background-color: ${(props) => props.theme.fade1};
`

const Menu = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 0.5rem 1rem;
`