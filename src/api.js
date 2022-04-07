import axios from 'axios';
import { useQuery } from 'react-query';
import { URL } from './url';

async function getAnnouncements() {
    const { data } = await axios.get(`${URL}/announcement`);
    return data;
}

export function useAnnouncements() {
    return useQuery('announcements', getAnnouncements);
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
