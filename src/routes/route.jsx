import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import Search from '../pages/SearchPage/SearchIndex';
import MyPageIndex from '../pages/MyPage/MyPageIndex';

const RootRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/:recipeId/detail' element={<Detail />} />
                <Route path='/fridge' element={<Search />} />
                <Route path='/mypage' element={<MyPageIndex />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RootRoute;
