import React from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { modalVisibleState } from '../../../atoms';
import * as PageStyled from '../../pageStyled';
import Title from '../../../components/layout/title';
import AnnouncementModifyContent from '../../../components/layout/contents/announcement/modify';

function AnnouncementUpload() {
    const { id } = useParams();
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Title title='📋 공지사항' description='' />
                <AnnouncementModifyContent id={id} />
            </div>
        </PageStyled.Container>
    );
}

export default AnnouncementUpload;
