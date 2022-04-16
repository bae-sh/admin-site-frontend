/* eslint-disable object-shorthand */
import axios from 'axios';
import { useQuery } from 'react-query';
import fileDownload from 'js-file-download';
import { URL } from './url';

async function getAnnouncements(page, size) {
    const { data } = await axios.get(`${URL}/announcement?page=${page}&size=${size}`);
    return data;
}

export function useAnnouncements(page, size) {
    return useQuery(['announcements', page, size], () => getAnnouncements(page, size));
}

async function getAnnouncementDetail(id) {
    const { data } = await axios.get(`${URL}/announcement/${id}`);
    return data;
}

export function useAnnouncementDetail(id) {
    return useQuery(['announcement', { id: id }], () => getAnnouncementDetail(id), {
        enabled: !!id,
    });
}

export async function uploadFiles(files) {
    const { data } = await axios.post(`${URL}/file`, files, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6ImFkbWluIiwibmFtZSI6Iuq0gOumrOyekCIsInJvbGUiOiLqtIDrpqzsnpAiLCJpYXQiOjE2NTAwMzExMDMsImV4cCI6MTY1MDExNzUwM30.annKT5eMMLb5HGSXDsvoXUTihAM_OlY4tRePdgy-BNc',
        },
    });
    return data;
}

export async function deleteFile(file) {
    const { data } = await axios.post(`${URL}/file/delete`, file, {
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6ImFkbWluIiwibmFtZSI6Iuq0gOumrOyekCIsInJvbGUiOiLqtIDrpqzsnpAiLCJpYXQiOjE2NTAwMzExMDMsImV4cCI6MTY1MDExNzUwM30.annKT5eMMLb5HGSXDsvoXUTihAM_OlY4tRePdgy-BNc',
        },
    });
    return data;
}

export async function postAnnouncement(submitData) {
    const { data } = await axios.post(`${URL}/announcement`, submitData, {
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6ImFkbWluIiwibmFtZSI6Iuq0gOumrOyekCIsInJvbGUiOiLqtIDrpqzsnpAiLCJpYXQiOjE2NTAwMzExMDMsImV4cCI6MTY1MDExNzUwM30.annKT5eMMLb5HGSXDsvoXUTihAM_OlY4tRePdgy-BNc',
        },
    });
    return data;
}

export async function deleteAnnouncement(id) {
    const { data } = await axios.delete(`${URL}/announcement/${id}`, {
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6ImFkbWluIiwibmFtZSI6Iuq0gOumrOyekCIsInJvbGUiOiLqtIDrpqzsnpAiLCJpYXQiOjE2NTAwMzExMDMsImV4cCI6MTY1MDExNzUwM30.annKT5eMMLb5HGSXDsvoXUTihAM_OlY4tRePdgy-BNc',
        },
    });
    return data;
}

export async function modifyAnnouncement(submitData, id) {
    const { data } = await axios.put(`${URL}/announcement/${id}`, submitData, {
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInVzZXJJZCI6ImFkbWluIiwibmFtZSI6Iuq0gOumrOyekCIsInJvbGUiOiLqtIDrpqzsnpAiLCJpYXQiOjE2NTAwMzExMDMsImV4cCI6MTY1MDExNzUwM30.annKT5eMMLb5HGSXDsvoXUTihAM_OlY4tRePdgy-BNc',
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
            fileDownload(res.data, fileName);
        });
}
