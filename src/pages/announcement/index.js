import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../atoms';
import * as PageStyled from '../pageStyled';
import Title from '../../components/layout/title';
import AnnouncementContent from '../../components/layout/contents/announcement';

function Announcement() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Title title='📋 공지사항' description='가장 빠른 ADMIN 소식 업데이트' />
                <AnnouncementContent />
            </div>
        </PageStyled.Container>
    );
}

export default Announcement;
