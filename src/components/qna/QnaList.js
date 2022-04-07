import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '../table/Table';
import Column from '../table/Column';
import Row from '../table/Row';
import { qnaList } from '../data/QnaData';

function QnaList(props) {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        setDataList(qnaList);
    }, []);

    return (
        <Table headersName={['글번호', '제목', '등록일', '조회수']}>
            {dataList
                ? dataList.map((item) => (
                    <Row key={item.id}>
                        <Column>{item.no}</Column>
                        <Column>
                            <Link to={`/qnaView/${item.no}`}>{item.title}</Link>
                        </Column>
                        <Column>{item.createDate}</Column>
                        <Column>{item.readCount}</Column>
                    </Row>
                ))
                : ''}
        </Table>
    );
}

export default QnaList;
