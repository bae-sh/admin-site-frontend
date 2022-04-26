/* eslint-disable prefer-destructuring */
/* eslint-disable no-alert */
/* eslint-disable object-shorthand */
import axios from 'axios';
import { useQuery } from 'react-query';
import fileDownload from 'js-file-download';
import { url } from './url';

let token = JSON.parse(localStorage.getItem('user'))?.tokens?.accessToken;

async function getAnnouncements(page, size) {
    const { data } = await axios.get(`${url}/announcement?page=${page}&size=${size}`);
    return data;
}

export function useAnnouncements(page, size) {
    return useQuery(['announcements', page, size], () => getAnnouncements(page, size));
}

async function getAnnouncementDetail(id) {
    const { data } = await axios.get(`${url}/announcement/${id}`);
    return data;
}

export function useAnnouncementDetail(id) {
    return useQuery(['announcement', { id: id }], () => getAnnouncementDetail(id), {
        enabled: !!id,
    });
}

export async function uploadFiles(files) {
    token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.post(`${url}/file`, files, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function deleteFile(file) {
    token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.post(`${url}/file/delete`, file, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function postAnnouncement(submitData) {
    token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.post(`${url}/announcement`, submitData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function deleteAnnouncement(id) {
    token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.delete(`${url}/announcement/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function modifyAnnouncement(submitData, id) {
    token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.put(`${url}/announcement/${id}`, submitData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function downloadFile(downloadUrl, fileName) {
    axios
        .get(downloadUrl, {
            responseType: 'blob',
        })
        .then((res) => {
            fileDownload(res.data, fileName);
        });
}

export function fetchCalendarData() {
    return fetch(`${url}/calendars`).then((response) => response.json());
}

export async function addToDo(data, setToggleAddBox, setChangeTodo) {
    if (data.title === '') {
        alert('제목을 입력하세요.');
    } else if (data.startDate === '') {
        alert('날짜를 선택하세요.');
    } else if (token) {
        await axios({
            method: 'post',
            url: `${url}/calendars`,
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
    } else {
        alert('권한이 없습니다.');
    }
}

export async function fetchToDoList(date, setToDoList) {
    const year = date.format('Y');
    await axios({
        method: 'get',
        url: `${url}/calendars?year=${year}`,
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
    if (token) {
        if (window.confirm(`${e.target.innerHTML}를 삭제하시겠습니까?`)) {
            await axios({
                method: 'delete',
                url: `${url}/calendars/${e.target.id}`,
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
}

export async function fetchLogin(data, navigate, setUserState, setError) {
    await axios({
        method: 'post',
        url: `${url}/login`,
        data,
    })
        .then((response) => {
            console.log(response);
            navigate('/');
            token = response.data.data.tokens.accessToken;
            const newData = { ...response.data.data, expire: Date.now() + 600000 };
            setUserState(newData);
            localStorage.setItem('user', JSON.stringify(newData));
        })
        .catch((error) => {
            setError('password', { message: error.response.data.message });
            console.log(error);
        });
}

export async function fetchSignup(data, navigate, setError) {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('studentNumber', data.studentNumber);
    formData.append('email', data.email);
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
            console.log(response);
            navigate('/');
            alert('Admin 가입을 환영합니다!');
            console.log(response);
        })
        .catch((error) => {
            setError('password2', { message: error.response.data.message });
            console.log(error);
        });
}

export function fetchStudentList(setStudentList) {
    axios({
        method: 'get',
        url: `${url}/members`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            setStudentList(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export function fetchApplyList(setApplyList) {
    axios({
        method: 'get',
        url: `${url}/levelup`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            console.log(response);
            setApplyList(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export function fetchApprove(id) {
    axios({
        method: 'post',
        url: `${url}/levelup/${id}/approve`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            console.log(response);
            alert('승인 되었습니다.');
        })
        .catch((error) => {
            console.log(error);
        });
}
export function fetchReject(id) {
    axios({
        method: 'post',
        url: `${url}/levelup/${id}/reject`,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
        .then((response) => {
            console.log(response);
            alert('거절 되었습니다.');
        })
        .catch((error) => {
            console.log(error);
        });
}
