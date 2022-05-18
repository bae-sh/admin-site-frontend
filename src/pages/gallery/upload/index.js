import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../../atoms';
import * as PageStyled from '../../pageStyled';
import Title from '../../../components/layout/title';
import GalleryUploadContent from '../../../components/layout/contents/gallery/upload';

function GalleryUpload() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Title title='📷 갤러리' description='' />
                <GalleryUploadContent />
            </div>
        </PageStyled.Container>
    );
}

export default GalleryUpload;
