import axios from 'axios';
import { useQuery } from 'react-query';
import fileDownload from 'js-file-download';
import { url } from './url';

export async function getQnAs(size, page) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.get(`${url}/qnas?size=${size}&page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export function useQnAs(size, page) {
    return useQuery(['qnas', size, page], () => getQnAs(size, page));
}

async function getQnADetail(id) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.get(`${url}/qnas/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export function useQnADetail(id) {
    return useQuery(['qna', id], () => getQnADetail(id), {
        enabled: !!id,
    });
}

export async function modifyQuestion(dataToSubmit, id) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.put(`${url}/qnas/${id}`, dataToSubmit, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function uploadQuestion(dataToSubmit) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.post(`${url}/qnas`, dataToSubmit, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function deleteQuestion(id) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.delete(`${url}/qnas/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function modifyAnswer(formData, qId, aId) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.put(`${url}/qnas/${qId}/answers/${aId}`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function uploadAnswer(dataToSubmit, qId) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.post(`${url}/qnas/${qId}/answers`, dataToSubmit, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function deleteAnswer(qId, aId) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.delete(`${url}/qnas/${qId}/answers/${aId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

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
    return useQuery(['announcement', { id }], () => getAnnouncementDetail(id), {
        enabled: !!id,
    });
}

export async function uploadFiles(files) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.post(`${url}/file`, files, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function downloadFile(fileUrl, fileName) {
    axios
        .get(fileUrl, {
            responseType: 'blob',
        })
        .then((res) => {
            fileDownload(res.data, fileName);
        });
}

export async function deleteFile(file) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.post(`${url}/files/delete`, file, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function postAnnouncement(submitData) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.post(`${url}/announcement`, submitData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function deleteAnnouncement(id) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.delete(`${url}/announcement/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export async function modifyAnnouncement(submitData, id) {
    const token = JSON.parse(localStorage.getItem('user')).tokens.accessToken;
    const { data } = await axios.put(`${url}/announcement/${id}`, submitData, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
}

export function fetchCalendarData() {
    return fetch(`${url}/calendar`).then((response) => response.json());
}

export async function addToDo(data, setToggleAddBox) {
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
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGF0anJ1ZDEyMzIiLCJ1c2VySWQiOiJybGF0anJ1ZDEyMzIiLCJlbWFpbCI6InJsYXRqcnVkMTExQGdtYWlsLmNvbSIsIm5hbWUiOiLquYDshJzqsr0iLCJyb2xlIjoi7ZqM7JuQIiwiaWF0IjoxNjQ5NDA3MTgyLCJleHAiOjE2NDk0OTM1ODJ9.Cw4UJWRodHiDhOeaN-8pg3Bboa8dppDKzVoaWgaL1VY',
            },
        })
            .then(() => {
                alert('일정이 추가되었습니다.');
                setToggleAddBox(false);
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
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGF0anJ1ZDEyMzIiLCJ1c2VySWQiOiJybGF0anJ1ZDEyMzIiLCJlbWFpbCI6InJsYXRqcnVkMTExQGdtYWlsLmNvbSIsIm5hbWUiOiLquYDshJzqsr0iLCJyb2xlIjoi7ZqM7JuQIiwiaWF0IjoxNjQ5NDA3MTgyLCJleHAiOjE2NDk0OTM1ODJ9.Cw4UJWRodHiDhOeaN-8pg3Bboa8dppDKzVoaWgaL1VY',
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

export async function deleteToDo(e) {
    if (window.confirm(`${e.target.innerHTML}를 삭제하시겠습니까?`)) {
        await axios({
            method: 'delete',
            url: `${url}/calendar/${e.target.id}`,
            headers: {
                Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGF0anJ1ZDEyMzIiLCJ1c2VySWQiOiJybGF0anJ1ZDEyMzIiLCJlbWFpbCI6InJsYXRqcnVkMTExQGdtYWlsLmNvbSIsIm5hbWUiOiLquYDshJzqsr0iLCJyb2xlIjoi7ZqM7JuQIiwiaWF0IjoxNjQ5NDA3MTgyLCJleHAiOjE2NDk0OTM1ODJ9.Cw4UJWRodHiDhOeaN-8pg3Bboa8dppDKzVoaWgaL1VY',
            },
        })
            .then(alert('삭제되었습니다.'))
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
