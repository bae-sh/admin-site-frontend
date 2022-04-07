import { url } from './url';

export function fetchCalendarData() {
    return fetch(`${url}/calendar`).then((response) => response.json());
}
