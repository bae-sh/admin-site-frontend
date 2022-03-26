import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Board from './pages/board';
import Calendar from './pages/calendar';
import Member from './pages/member';
import Header from './components/layout/header';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/board' element={<Board />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/member' element={<Member />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
