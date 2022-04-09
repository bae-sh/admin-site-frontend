/* eslint-disable prefer-destructuring */
/* eslint-disable no-alert */
import axios from 'axios';
import { url } from './url';

const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;

export function fetchCalendarData() {
    return fetch(`${url}/calendar`).then((response) => response.json());
}

export async function addToDo(data, setToggleAddBox, setChangeTodo) {
    if (data.title === '') {
        alert('제목을 입력하세요.');
    } else if (data.startDate === '') {
        alert('날짜를 선택하세요.');
    } else {
        await axios({
            method: 'post',
            url: `${url}/calendar`,
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(() => {
                alert('일정이 추가되었습니다.');
                setToggleAddBox(false);
                setChangeTodo((prev) => prev + 1);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }
}

export async function fetchToDoList(date, setToDoList) {
    const year = date.format('Y');
    await axios({
        method: 'get',
        url: `${url}/calendar?year=${year}`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            const newToDoList = response.data.data.map((item) => {
                const month = item.startDate.split('-')[1];
                const day = item.startDate.split('-')[2];
                return {
                    startDate: {
                        year,
                        month: String(Number(month)),
                        dayOfMonth: String(Number(day)),
                    },
                    title: item.title,
                    id: item.id,
                };
            });
            setToDoList(newToDoList);
        })
        .catch((error) => {
            console.log(error);
        });
}

export async function deleteToDo(e, setChangeTodo) {
    if (window.confirm(`${e.target.innerHTML}를 삭제하시겠습니까?`)) {
        await axios({
            method: 'delete',
            url: `${url}/calendar/${e.target.id}`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(() => {
                alert('삭제되었습니다.');
                setChangeTodo((prev) => prev + 1);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export async function fetchLogin(data, navigate, setUserState, setError) {
    await axios({
        method: 'post',
        url: `${url}/login`,
        data,
    })
        .then((response) => {
            navigate('/');
            const newData = { ...response.data.data, expire: Date.now() + 600000 };
            console.log(newData);
            setUserState(newData);
            localStorage.setItem('user', JSON.stringify(newData));
        })
        .catch((error) => {
            setError('password', { message: error.response.data.message });
        });
}

export async function fetchSignup(data, navigate, setError) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('studentNumber', data.studentNumber);
    formData.append('userId', data.userId);
    formData.append('password', data.password);
    await axios({
        method: 'post',
        url: `${url}/signup`,
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
        .then((response) => {
            navigate('/');
            alert('Admin 가입을 환영합니다!');
            console.log(response);
        })
        .catch((error) => {
            setError('password2', { message: error.response.data.message });
        });
}
