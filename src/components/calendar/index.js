/* eslint-disable prefer-const */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../../url';
import * as Styled from './styled';

function CalendarComponent({ date }) {
    const [toDoList, setToDoList] = useState([]);
    useEffect(() => {
        const year = date.format('Y');
        const month = date.format('M');
        axios({
            method: 'get',
            url: `${url}/calendar?year=${year}&month=${month}`,
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGF0anJ1ZDEyMzIiLCJ1c2VySWQiOiJybGF0anJ1ZDEyMzIiLCJlbWFpbCI6InJsYXRqcnVkMTExQGdtYWlsLmNvbSIsIm5hbWUiOiLquYDshJzqsr0iLCJyb2xlIjoi7ZqM7JuQIiwiaWF0IjoxNjQ5NDA3MTgyLCJleHAiOjE2NDk0OTM1ODJ9.Cw4UJWRodHiDhOeaN-8pg3Bboa8dppDKzVoaWgaL1VY',
            },
        })
            .then((response) => {
                let newToDoList = response.data.data.map((item) => {
                    let day = item.startDate.split('-')[2];
                    return {
                        startDate: {
                            year,
                            month,
                            dayOfMonth: String(Number(day)),
                        },
                        title: item.title,
                    };
                });
                setToDoList(newToDoList);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [date]);
    const today = date;
    const startWeek = today.clone().startOf('month').week();

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
                    const dayOfMonth = current.format('D');
                    const month = current.format('M');
                    const prev = dayOfMonth > 10 && week === startWeek;
                    const next = dayOfMonth < 10 && week === endWeek;
                    const titles = toDoList.filter(
                        (item) =>
                            item.startDate.dayOfMonth === dayOfMonth &&
                            item.startDate.month === month,
                    );
                    return (
                        <Styled.DayBox key={current.format('D')} prev={prev || next}>
                            <div className='day'>{current.format('D')}</div>
                            {titles.map((item) => (
                                <div className='toDo' key={item.title}>
                                    {item.title}
                                </div>
                            ))}
                        </Styled.DayBox>
                    );
                }),
        );
    }
    return calendar;
}

export default CalendarComponent;
