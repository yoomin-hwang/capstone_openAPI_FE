import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './components/Header';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import LikePage from './pages/LikePage';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="/" element={<MainPage/>} />
          {/* 여기 이름 fltplt 대로 useParams 의 key 명 정해짐 */}
          <Route path="/detail/:fltplt" element={<DetailPage/>} />
          <Route path="/likes" element={<LikePage/>} />
        </Route>
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
justify-content: space-between;
align-items: center;
width: 100vw;
`