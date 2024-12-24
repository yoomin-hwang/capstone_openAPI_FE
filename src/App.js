import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';
import LikePage from './pages/LikePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header/>}>
          <Route path="/" element={<MainPage/>} />
          <Route path="/detail/:id" element={<DetailPage/>} />
          <Route path="/likes" element={<LikePage/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
