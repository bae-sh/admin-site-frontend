import axios from 'axios';
import { useQuery } from 'react-query';
import { URL } from './url';

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6ImFkbWluIiwibmFtZSI6Iuq0gOumrOyekCIsInJvbGUiOiLqtIDrpqzsnpAiLCJpYXQiOjE2NDk5NTY4MzQsImV4cCI6MTY0OTk1ODYzNH0.tFzlhe8YWNvbpB3KhSyd_W3j97WcDXlgwJ9qYSRe6jE';
export async function getQnAs(size, page) {
    const { data } = await axios.get(`${URL}/qna?size=${size}&page=${page}`, {
        headers: {
            Authorization: token,
        },
    });
    return data;
}

export function useQnAs(size, page) {
    return useQuery(['qnas', size, page], () => getQnAs(size, page));
}

async function getQnADetail(id) {
    const { data } = await axios.get(`${URL}/qna/${id}`, {
        headers: {
            Authorization: token,
        },
    });
    return data;
}

export function useQnADetail(id) {
    return useQuery(['qna', { id: id }], () => getQnADetail(id), {
        enabled: !!id,
    });
}

export async function modifyQuestion(formData, id) {
    const { data } = await axios.put(`${URL}/qna/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        },
    });
    return data;
}

export async function uploadQuestion(dataToSubmit) {
    const { data } = await axios.post(`${URL}/qna`, dataToSubmit, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        },
    });
    return data;
}

export async function deleteQuestion(id) {
    const { data } = await axios.delete(`${URL}/qna/${id}`, {
        headers: {
            Authorization: token,
        },
    });
    return data;
}

export async function modifyAnswer(formData, qId, aId) {
    const { data } = await axios.put(`${URL}/qna/${qId}/answer/${aId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        },
    });
    return data;
}

export async function uploadAnswer(dataToSubmit, qId) {
    const { data } = await axios.post(`${URL}/qna/${qId}/answer`, dataToSubmit, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        },
    });
    return data;
}

export async function deleteAnswer(qId, aId) {
    const { data } = await axios.delete(`${URL}/qna/${qId}/answer/${aId}`, {
        headers: {
            Authorization: token,
        },
    });
    return data;
}
