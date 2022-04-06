/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import { useQuery } from 'react-query';
import { fetchCalendarData } from '../../api';
import * as Styled from './styled';

const toDoList = [
    {
        startDate: {
            year: '2022',
            month: '4',
            dayOfMonth: '12',
        },
        title: '어드민 개강총회',
    },
    {
        startDate: {
            year: '2022',
            month: '4',
            dayOfMonth: '30',
        },
        title: '2022 1학기 종강',
    },
];

function CalendarComponent({ date }) {
    // const { isLoading, data } = useQuery('calendarDatas', fetchCalendarData);
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
                                <div className='toDo'>{item.title}</div>
                            ))}
                        </Styled.DayBox>
                    );
                }),
        );
    }
    return calendar;
}

export default CalendarComponent;
