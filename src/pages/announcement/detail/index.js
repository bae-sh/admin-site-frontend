import React from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { modalVisibleState } from '../../../atoms';
import * as PageStyled from '../../pageStyled';
import Title from '../../../components/layout/title';
import AnnouncementDetailContent from '../../../components/layout/contents/announcement/detail';
// import Comment from '../../../components/layout/comment';

function AnnouncementDetail() {
    const { id } = useParams();
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                {/* <Title title='📋 공지사항' description='' /> */}
                <AnnouncementDetailContent id={id} />
                {/* <Comment id={id} kind='announcement' /> */}
            </div>
        </PageStyled.Container>
    );
}

export default AnnouncementDetail;
