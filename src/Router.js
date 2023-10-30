import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/home';
import Announcement from './pages/announcement';
import AnnouncementDetail from './pages/announcement/detail';
import AnnouncementModify from './pages/announcement/modify';
import AnnouncementUpload from './pages/announcement/upload';
import Gallery from './pages/gallery';
import GalleryDetail from './pages/gallery/detail';
import GalleryModify from './pages/gallery/modify';
import GalleryUpload from './pages/gallery/upload';
import QnA from './pages/qna';
import QnADetail from './pages/qna/detail';
import QnAUPload from './pages/qna/upload';
import QuestionModify from './pages/qna/modify/question';
import AnswerModify from './pages/qna/modify/answer';
import Calendar from './pages/calendar';
import Member from './pages/member';
import Header from './components/layout/header';
import Login from './pages/login';
import Modal from './components/modal';
import Signup from './pages/signup';
import MyPage from './pages/mypage';
import Admin from './pages/admin';
import Footer from './components/layout/footer';

function Router() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Modal />
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/announcement' element={<Announcement />} />
                <Route path='/announcement/:id' element={<AnnouncementDetail />} />
                <Route path='/announcement/modify/:id' element={<AnnouncementModify />} />
                <Route path='/announcement/upload' element={<AnnouncementUpload />} />
                <Route path='/gallery' element={<Gallery />} />
                <Route path='/gallery/:id' element={<GalleryDetail />} />
                <Route path='/gallery/modify/:id' element={<GalleryModify />} />
                <Route path='/gallery/upload' element={<GalleryUpload />} />
                <Route path='/qna' element={<QnA />} />
                <Route path='/qna/:id' element={<QnADetail />} />
                <Route path='/qna/upload' element={<QnAUPload />} />
                <Route path='/qna/modify/:id' element={<QuestionModify />} />
                <Route path='/qna/modify/:qId/answers/:aId' element={<AnswerModify />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/member' element={<Member />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/admin' element={<Admin />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
