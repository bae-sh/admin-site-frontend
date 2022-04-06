import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../../atoms';
import * as PageStyled from '../../pageStyled';
import Title from '../../../components/layout/title';
import AnnouncementUploadContent from '../../../components/layout/contents/announcement/upload';

function AnnouncementUpload() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Title title='📋 공지사항' description='' />
                <AnnouncementUploadContent />
            </div>
        </PageStyled.Container>
    );
}

export default AnnouncementUpload;
