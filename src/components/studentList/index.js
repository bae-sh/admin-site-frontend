import * as Styled from './styled';

function StudentList({ type, setModalIsOpen, item, setSelectNumber, idx }) {
    console.log(item);
    return (
        <Styled.ContentList>
            <span>{item?.name}</span>
            <span>{item?.studentNumber}</span>
            <Styled.StudentInfoBtn
                onClick={() => {
                    setSelectNumber(idx);
                    setModalIsOpen(type);
                }}
            >
                보기
            </Styled.StudentInfoBtn>
        </Styled.ContentList>
    );
}

export default StudentList;
