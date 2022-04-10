import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Announcement from './pages/announcement';
import AnnouncementDetail from './pages/announcement/detail';
import AnnouncementModify from './pages/announcement/modify';
import AnnouncementUpload from './pages/announcement/upload';
import Gallery from './pages/gallery';
import QnA from './pages/qna';
import Calendar from './pages/calendar';
import Member from './pages/member';
import Header from './components/layout/header';
import Login from './pages/login';
import Modal from './components/modal';
import Signup from './pages/signup';

function Router() {
    return (
        <BrowserRouter>
            <Modal />
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/announcement' element={<Announcement />} />
                <Route path='/announcement/:id' element={<AnnouncementDetail />} />
                <Route path='/announcement/modify/:id' element={<AnnouncementModify />} />
                <Route path='/announcement/upload' element={<AnnouncementUpload />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/qna' element={<QnA />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/member' element={<Member />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
