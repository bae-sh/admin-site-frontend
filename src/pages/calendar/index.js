import React, { useState } from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import { GoChevronLeft, GoChevronRight, GoPlus } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import * as Styled from './styled';
import * as PageStyled from '../pageStyled';
import { modalVisibleState } from '../../atoms';
import CalendarComponent from '../../components/calendar';
import { url } from '../../api';

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function Calendar() {
    const modalVisible = useRecoilValue(modalVisibleState);
    const [date, setdate] = useState(() => moment());
    const [toggleAddBox, setToggleAddBox] = useState(false);
    const { register, handleSubmit } = useForm();
    // eslint-disable-next-line no-confusing-arrow
    const jumpToMonth = (num) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        num ? setdate(date.clone().add(30, 'day')) : setdate(date.clone().subtract(30, 'day'));
    const onValid = (data) => {
        const startDate = data.startDate.split('-');
        const body = {
            title: data.title,
            startDate: { year: startDate[0], month: startDate[1], dayOfMonth: startDate[2] },
        };
        console.log(body);
        // axios({
        //     method: 'post',
        //     url: `${url}/calendar`,
        //     data,
        // })
        //     .then((response) => {
        //         console.log(response.data.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
    };

    return (
        <PageStyled.Container modalVisible={modalVisible}>
            <div className='inner'>
                <Styled.Container>
                    <Styled.CalendarHeader>
                        <Styled.HeaderLeft>
                            <AiOutlineCalendar />
                            <span>캘린더</span>
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
                                <form onSubmit={handleSubmit(onValid)}>
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
                                </form>
                            </Styled.AddBox>
                        )}
                        {days.map((day) => (
                            <Styled.Day key={day}>{day}</Styled.Day>
                        ))}
                        <CalendarComponent date={date} />
                    </Styled.CalendarBody>
                </Styled.Container>
            </div>
        </PageStyled.Container>
    );
}

export default Calendar;
