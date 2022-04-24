import * as Styled from './styled';

function StudentList({ type, setModalIsOpen }) {
    return (
        <Styled.ContentBox>
            <Styled.ContentList>
                <span>배성현</span>
                <span>201802100</span>
                <Styled.StudentInfoBtn onClick={() => setModalIsOpen(type)}>
                    보기
                </Styled.StudentInfoBtn>
            </Styled.ContentList>
        </Styled.ContentBox>
    );
}

export default StudentList;
