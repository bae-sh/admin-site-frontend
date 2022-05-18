/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { GoChevronLeft, GoChevronRight, GoPlus } from 'react-icons/go';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import * as Styled from './styled';
import * as PageStyled from '../pageStyled';
import { modalVisibleState } from '../../atoms';
import CalendarComponent from '../../components/calendar';
import { addToDo } from '../../api';

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function Calendar() {
    const modalVisible = useRecoilValue(modalVisibleState);
    const [date, setdate] = useState(() => moment());
    const [toggleAddBox, setToggleAddBox] = useState(false);
    const [changeTodo, setChangeTodo] = useState(0);
    const { register, handleSubmit } = useForm();
    const jumpToMonth = (num) =>
        num ? setdate(date.clone().add(30, 'day')) : setdate(date.clone().subtract(30, 'day'));

    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Styled.Container>
                    <Styled.CalendarHeader>
                        <Styled.HeaderLeft>
                            <span>📅 캘린더</span>
                        </Styled.HeaderLeft>

                        <Styled.YearBox>
                            <Styled.IconBox>
                                <GoChevronLeft type='button' onClick={() => jumpToMonth(0)} />
                            </Styled.IconBox>

                            <span>{`${date.format('Y')}년 ${date.format('M')}월`}</span>
                            <Styled.IconBox>
                                <GoChevronRight onClick={() => jumpToMonth(1)} />
                            </Styled.IconBox>
                        </Styled.YearBox>
                        <Styled.AddBtn
                            type='button'
                            onClick={() => setToggleAddBox((prev) => !prev)}
                        >
                            <GoPlus />
                            일정추가
                        </Styled.AddBtn>
                    </Styled.CalendarHeader>
                    <Styled.CalendarBody>
                        {toggleAddBox && (
                            <Styled.AddBox>
                                <form
                                    onSubmit={handleSubmit((data) =>
                                        addToDo(data, setToggleAddBox, setChangeTodo),
                                    )}
                                >
                                    <span>제목</span>
                                    <input {...register('title')} />
                                    <div>
                                        날짜
                                        <input
                                            type='date'
                                            min='2018-01-01'
                                            {...register('startDate')}
                                        />
                                    </div>

                                    <button type='submit'>저장</button>
                                    <button
                                        type='button'
                                        onClick={() => setToggleAddBox((prev) => !prev)}
                                    >
                                        취소
                                    </button>
                                </form>
                            </Styled.AddBox>
                        )}
                        {days.map((day) => (
                            <Styled.Day key={day}>{day}</Styled.Day>
                        ))}
                        <CalendarComponent
                            date={date}
                            changeTodo={changeTodo}
                            setChangeTodo={setChangeTodo}
                        />
                    </Styled.CalendarBody>
                </Styled.Container>
            </div>
        </PageStyled.Container>
    );
}

export default Calendar;
