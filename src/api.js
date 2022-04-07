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
    return useQuery(['announcement', id.id], () => getAnnouncementDetail(id.id), {
        enabled: !!id.id,
    });
}

export async function postAnnouncement(formData) {
    const { data } = await axios.post(`${URL}/announcement`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer Token',
        },
    });
    return data;
}
