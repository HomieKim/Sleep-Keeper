import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalLayout from './pages/_layout';

const Main = React.lazy(()=> import('./pages/main'));
const Room = React.lazy(()=> import('./pages/room'));
const RoomDetail = React.lazy(()=> import('./pages/room-detail'));

function App() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route index element={<Main />} />
        <Route path='board' element={<Room />} />
        <Route path='board/:id' element={<RoomDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
