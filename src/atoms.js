import { atom } from 'recoil';

export const userIdState = atom({
    key: 'userId',
    default: {
        userId: '',
        email: '',
        phoneNumber: '',
        name: '',
        studentNumber: '',
        expire: '',
    },
});

export const modalVisibleState = atom({
    key: 'modalVisible',
    default: false,
});

export const fileUploadModalVisibleState = atom({
    key: 'fileUploadModalVisible',
    default: false,
});

export const qnasPageState = atom({
    key: 'qnasPage',
    default: 0,
});

export const announcementPageState = atom({
    key: 'announcementPage',
    default: 0,
});

export const galleryPageState = atom({
    key: 'galleryPage',
    default: 0,
});
