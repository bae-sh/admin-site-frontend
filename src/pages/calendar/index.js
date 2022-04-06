import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { GoChevronLeft, GoChevronRight, GoPlus } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import * as Styled from './styled';
import * as PageStyled from '../pageStyled';
import { fetchCalendarData } from '../../api';
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
    const { isLoading, data } = useQuery('calendarDatas', fetchCalendarData);
    const today = date;
    const startWeek = today.clone().startOf('month').week();

    // eslint-disable-next-line operator-linebreak
    const endWeek =
        today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

    const calendar = [];
    const onClick = () => {
        // delete post
    };

    for (let week = startWeek; week <= endWeek; week += 1) {
        calendar.push(
            Array(7)
                .fill(0)
                .map((n, i) => {
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
