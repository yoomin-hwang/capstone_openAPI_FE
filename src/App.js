import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import LoginCallback from './auth/LoginCallback';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<Layout/>}/>
        <Route path="/login-ing" element={<LoginCallback/>}/>
      </Routes>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100vw;
min-height: 100vh;
`

export const PageWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
width: 100vw;
min-height: 90vh;
background-color: ${(props) => props.theme.ivory0};
`