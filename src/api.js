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

export async function uploadImage(formData) {
    const { data } = await axios.post(`${URL}/image`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGF0anJ1ZDEyMzIiLCJ1c2VySWQiOiJybGF0anJ1ZDEyMzIiLCJlbWFpbCI6InJsYXRqcnVkMTExQGdtYWlsLmNvbSIsIm5hbWUiOiLquYDshJzqsr0iLCJyb2xlIjoi7ZqM7JuQIiwiaWF0IjoxNjQ5NjEzMjE5LCJleHAiOjE2NDk2OTk2MTl9.Y_CC5zlgnZ6BlA8zUA4ycbCcDdNWneRtwp46NKQ5VxE',
        },
    });
    console.log(data);
    return data;
}

export async function postAnnouncement(formData) {
    const { data } = await axios.post(`${URL}/announcement`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGF0anJ1ZDEyMzIiLCJ1c2VySWQiOiJybGF0anJ1ZDEyMzIiLCJlbWFpbCI6InJsYXRqcnVkMTExQGdtYWlsLmNvbSIsIm5hbWUiOiLquYDshJzqsr0iLCJyb2xlIjoi7ZqM7JuQIiwiaWF0IjoxNjQ5NjEzMjE5LCJleHAiOjE2NDk2OTk2MTl9.Y_CC5zlgnZ6BlA8zUA4ycbCcDdNWneRtwp46NKQ5VxE',
        },
    });
    return data;
}

export async function deleteAnnouncement(id) {
    const { data } = await axios.delete(`${URL}/announcement/${id}`, {
        headers: {
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGF0anJ1ZDEyMzIiLCJ1c2VySWQiOiJybGF0anJ1ZDEyMzIiLCJlbWFpbCI6InJsYXRqcnVkMTExQGdtYWlsLmNvbSIsIm5hbWUiOiLquYDshJzqsr0iLCJyb2xlIjoi7ZqM7JuQIiwiaWF0IjoxNjQ5NjEzMjE5LCJleHAiOjE2NDk2OTk2MTl9.Y_CC5zlgnZ6BlA8zUA4ycbCcDdNWneRtwp46NKQ5VxE',
        },
    });
    return data;
}

export async function modifyAnnouncement(formData, id) {
    const { data } = await axios.put(`${URL}/announcement/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJybGF0anJ1ZDEyMzIiLCJ1c2VySWQiOiJybGF0anJ1ZDEyMzIiLCJlbWFpbCI6InJsYXRqcnVkMTExQGdtYWlsLmNvbSIsIm5hbWUiOiLquYDshJzqsr0iLCJyb2xlIjoi7ZqM7JuQIiwiaWF0IjoxNjQ5NjEzMjE5LCJleHAiOjE2NDk2OTk2MTl9.Y_CC5zlgnZ6BlA8zUA4ycbCcDdNWneRtwp46NKQ5VxE',
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
