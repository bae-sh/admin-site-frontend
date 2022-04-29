import React from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router-dom';
import { modalVisibleState } from '../../../atoms';
import * as PageStyled from '../../pageStyled';
import Title from '../../../components/layout/title';
import GalleryDetailContent from '../../../components/layout/contents/gallery/detail';

function GalleryDetail() {
    const { id } = useParams();
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Title title='📋 공지사항' description='' />
                <GalleryDetailContent id={id} />
            </div>
        </PageStyled.Container>
    );
}

export default GalleryDetail;
