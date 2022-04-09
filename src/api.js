import axios from 'axios';
import { url } from './url';

export function fetchCalendarData() {
    return fetch(`${url}/calendar`).then((response) => response.json());
}

export function addToDo(data) {
    axios({
        method: 'post',
        url: `${url}/calendar`,
        data,
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGF0anJ1ZDEyMzIiLCJ1c2VySWQiOiJybGF0anJ1ZDEyMzIiLCJlbWFpbCI6InJsYXRqcnVkMTExQGdtYWlsLmNvbSIsIm5hbWUiOiLquYDshJzqsr0iLCJyb2xlIjoi7ZqM7JuQIiwiaWF0IjoxNjQ5NDA3MTgyLCJleHAiOjE2NDk0OTM1ODJ9.Cw4UJWRodHiDhOeaN-8pg3Bboa8dppDKzVoaWgaL1VY',
        },
    })
        .then((response) => {
            alert('일정이 추가되었습니다.');
        })
        .catch((error) => {
            console.log(error.response);
        });
}

export function fetchToDoList(date, setToDoList) {
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
            const newToDoList = response.data.data.map((item) => {
                const day = item.startDate.split('-')[2];
                return {
                    startDate: {
                        year,
                        month,
                        dayOfMonth: String(Number(day)),
                    },
                    title: item.title,
                    id: item.id,
                };
            });
            setToDoList(newToDoList);
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

export function deleteToDo(e) {
    if (window.confirm(`${e.target.innerHTML}를 삭제하시겠습니까?`)) {
        axios({
            method: 'delete',
            url: `${url}/calendar/${e.target.id}`,
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGF0anJ1ZDEyMzIiLCJ1c2VySWQiOiJybGF0anJ1ZDEyMzIiLCJlbWFpbCI6InJsYXRqcnVkMTExQGdtYWlsLmNvbSIsIm5hbWUiOiLquYDshJzqsr0iLCJyb2xlIjoi7ZqM7JuQIiwiaWF0IjoxNjQ5NDA3MTgyLCJleHAiOjE2NDk0OTM1ODJ9.Cw4UJWRodHiDhOeaN-8pg3Bboa8dppDKzVoaWgaL1VY',
            },
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}
