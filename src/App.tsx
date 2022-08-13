import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalLayout from './pages/_layout';

const Main = React.lazy(()=> import('./pages/main'));
const Board = React.lazy(()=> import('./pages/board'));
const BoardDetail = React.lazy(()=> import('./pages/board-detail'));

function App() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route index element={<Main />} />
        <Route path='board' element={<Board />} />
        <Route path='board/:id' element={<BoardDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
