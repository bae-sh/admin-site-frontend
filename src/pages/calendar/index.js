import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { GoChevronLeft, GoChevronRight, GoPlus } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import * as Styled from './styled';
import * as PageStyled from '../pageStyled';
import { modalVisibleState } from '../../atoms';

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 600;
`;

const CalendarBody = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin-top: 40px;
    font-weight: 400;
`;

const Day = styled.span`
    text-align: center;
    margin-bottom: 5px;
`;

const DayBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    padding: 12px;
    border: 1px dashed #e8e8e8;
    border-collapse: separate;
    color: ${(props) => (props.prev ? 'lightgray' : '#6e6e6e')};
    font-size: 13px;
    .day {
        align-self: flex-start;
        margin-bottom: 6px;
    }
    .toDo {
        color: ${(props) => (props.prev ? 'lightgray' : 'black')};
        font-weight: 500;
        margin-bottom: 2px;
        @media screen and (max-width: 1023px) {
            font-size: 11px;
        }
        @media screen and (max-width: 767px) {
            font-size: 10px;
            -webkit-transform: scale(0.8);
        }
    }
`;

const YearBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 767px) {
        font-size: 20px;
    }
`;

const IconBox = styled.div`
    padding-top: 2px;
    margin: 0px 3px;
    cursor: pointer;
`;

const HeaderLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        font-size: 40px;
    }
    span {
        margin-left: 10px;
        padding-top: 5px;
    }
    @media screen and (max-width: 767px) {
        font-size: 18px;
        svg {
            font-size: 35px;
        }
        span {
            margin-left: 4px;
        }
    }
`;

const AddBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: 1px solid lightgray;
    height: 30px;
    width: 90px;
    border-radius: 10px;
    cursor: pointer;
    svg {
        margin-right: 10px;
        height: 100%;
    }
`;

function CalendarComponent({ date }) {
    // 님 날짜 뭐 눌렀어요? (초기값은 오늘)
    const today = date;
    // startOf('month') : 이번 달의 첫번 째 날로 설정 set to the first of this month, 12:00 am
    // week() : Week of Year. 이번 년도의 몇번째 주인가? => 3월 8일이면 10이겠죠?
    const startWeek = today.clone().startOf('month').week();

    // endOf('month').week() : 이번 달의 마지막 날로 설정 한 후 그것이 이번 년도의 몇번째 주인지 체크
    // 만약 이번 해의 첫번째 주(1월 1일이 속한 주)라면 53으로 세팅, 아니라면 그대로 유지
    // 이런 작업의 이유는 마지막 주가 첫 주가 될 수 없기 때문에 당연한 것임
    // eslint-disable-next-line operator-linebreak
    const endWeek =
        today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    const calendar = [];
    // 시작 주부터 마지막 주까지 +1 씩 증가시킴
    // 이제 주마다 일을 표기해야 하므로 len이 7인 arr를 생성 후 index를 기반으로 day를 표기하자
    for (let week = startWeek; week <= endWeek; week += 1) {
        calendar.push(
            Array(7)
                .fill(0)
                .map((n, i) => {
                    // 오늘 => 주어진 주의 시작 => n + i일 만큼 더해서 각 주의 '일'을 표기한다.
                    const current = today.clone().week(week).startOf('week').add(i, 'day');
                    const prev = current.format('D') > 10 && week === startWeek;
                    const next = current.format('D') < 10 && week === endWeek;
                    return (
                        <DayBox key={current.format('D')} prev={prev || next}>
                            <div className='day'>{current.format('D')}</div>
                            <div className='toDo'>2022 2학기 종강</div>
                            <div className='toDo'>막동</div>
                            <div className='toDo'>일정</div>
                        </DayBox>
                    );
                }),
        );
    }
    return calendar;
}
function Calendar() {
    const modalVisible = useRecoilValue(modalVisibleState);
    const [date, setdate] = useState(() => moment());
    console.log(date.format('M'));
    // eslint-disable-next-line no-confusing-arrow
    const jumpToMonth = (num) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        num ? setdate(date.clone().add(30, 'day')) : setdate(date.clone().subtract(30, 'day'));
    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Styled.Container>
                    <CalendarHeader>
                        <HeaderLeft>
                            <AiOutlineCalendar />
                            <span>캘린더</span>
                        </HeaderLeft>

                        <YearBox>
                            <IconBox>
                                <GoChevronLeft type='button' onClick={() => jumpToMonth(0)} />
                            </IconBox>

                            <span>{`${date.format('Y')}년 ${date.format('M')}월`}</span>
                            <IconBox>
                                <GoChevronRight onClick={() => jumpToMonth(1)} />
                            </IconBox>
                        </YearBox>
                        <AddBtn type='button'>
                            <GoPlus />
                            일정추가
                        </AddBtn>
                    </CalendarHeader>
                    <CalendarBody>
                        {days.map((day) => (
                            <Day key={day}>{day}</Day>
                        ))}
                        <CalendarComponent date={date} />
                    </CalendarBody>
                </Styled.Container>
            </div>
        </PageStyled.Container>
    );
}

export default Calendar;
