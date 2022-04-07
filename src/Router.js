import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Board from './pages/board';
import QnA from './pages/qna';
import Calendar from './pages/calendar';
import Member from './pages/member';
import Header from './components/layout/header';
import Login from './pages/login';
import Modal from './components/modal';
import Signup from './pages/signup';
import QnaView from './components/qna/QnaView';

function Router() {
    return (
        <BrowserRouter>
            <Modal />
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/board' element={<Board />} />
                <Route path='/qna' element={<QnA />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/member' element={<Member />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/qnaView/:id' element={<QnaView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
