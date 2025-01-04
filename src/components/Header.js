import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
    return (
        <div>
            <HeaderWrapper>
                <Logo>
                    <Link to="/">
                        공업용 수질 조회 서비스
                    </Link>
                </Logo>
                <MenuWrapper>
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
                </MenuWrapper>
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

const Logo = styled.h2`
a {
    text-decoration: none;
    color: ${(props) => props.theme.darkblue};

    &:hover {
        color: ${(props) => props.theme.blue};
    }
    margin: 0.5rem 5rem;
}
`

const MenuWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 10rem;
margin: 0.5rem 5rem;
`

const Menu = styled.h3`
a {
    text-decoration: none;
    color: ${(props) => props.theme.midblue};

    &:hover {
        color: ${(props) => props.theme.blue};
    }
}
`