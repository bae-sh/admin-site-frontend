/* eslint-disable object-shorthand */
import axios from 'axios';
import { useQuery } from 'react-query';
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

export async function postAnnouncement(formData) {
    const { data } = await axios.post(`${URL}/announcement`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer token',
        },
    });
    return data;
}

export async function deleteAnnouncement(id) {
    const { data } = await axios.delete(`${URL}/announcement/${id}`, {
        headers: {
            Authorization: 'Bearer token',
        },
    });
    return data;
}

export async function modifyAnnouncement(formData, id) {
    const { data } = await axios.put(`${URL}/announcement/${id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer token',
        },
    });
    return data;
}
