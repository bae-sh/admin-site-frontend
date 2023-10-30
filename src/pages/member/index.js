import React from 'react';
import { useRecoilValue } from 'recoil';
import { modalVisibleState } from '../../atoms';
import * as Styled from './styled';
import * as PageStyled from '../pageStyled';

const members = [
    { position: '회장', name: '18 정민석' },
    { position: '부회장', name: '20 한서영' },
    { position: '총무', name: '19 권태욱' },
    { position: '부총무', name: '22 박민지' },
    { position: '기획홍보부장', name: '19 노형우' },
    { position: '기획부원', name: '22 박채연' },
    { position: '홍보부원', name: '22 최효은' },
    { position: '홍보부원', name: '22 김도현' },
    { position: '교육부장', name: '18 채승규' },
];
function Member() {
    const modalVisible = useRecoilValue(modalVisibleState);
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <Styled.Container>
                {members.map((member, index) => (
                    <Styled.Card>
                        <img src={`img/${index + 1}.png`} alt={member.name} width='100%' />
                        <div className='position'>{member.position}</div>
                        <div className='name'>{member.name}</div>
                    </Styled.Card>
                ))}
            </Styled.Container>
        </PageStyled.Container>
    );
}

export default Member;
