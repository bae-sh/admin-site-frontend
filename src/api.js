import axios from 'axios';
import { useQuery } from 'react-query';
import fileDownload from 'js-file-download';
import { URL } from './url';

const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6ImFkbWluIiwibmFtZSI6Iuq0gOumrOyekCIsInJvbGUiOiLqtIDrpqzsnpAiLCJpYXQiOjE2NTAxMjk0NjUsImV4cCI6MTY1MDIxNTg2NX0.kwU_NU84g36NyRIgUmF3kI_j1SNpWVwbvrZHMqr0mT0';
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
    return useQuery(
        [
            'qna',
            {
                id: id,
            },
        ],
        () => getQnADetail(id),
        {
            // id 가 존재할 때만
            enabled: !!id,
        },
    );
}

export async function modifyQuestion(formData, id) {
    const { data } = await axios.put(`${URL}/qna/${id}`, formData, {
        headers: {
            Authorization: token,
        },
    });
    return data;
}

export async function uploadQuestion(dataToSubmit) {
    const { data } = await axios.post(`${URL}/qna`, dataToSubmit, {
        headers: {
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
            Authorization: token,
        },
    });
    return data;
}

export async function uploadAnswer(dataToSubmit, qId) {
    const { data } = await axios.post(`${URL}/qna/${qId}/answer`, dataToSubmit, {
        headers: {
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

export async function getFilesUrl(dataToSubmit) {
    const { data } = await axios.post(`${URL}/file`, dataToSubmit, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: token,
        },
    });
    return data;
}

export async function downloadFile(url, fileName) {
    axios
        .get(url, {
            responseType: 'blob',
        })
        .then((res) => {
            console.log(res.data);
            fileDownload(res.data, fileName);
        });
}
