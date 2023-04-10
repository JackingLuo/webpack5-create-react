import request from './request';

export const getInfo = (data) => {
    return request.post('/info', data);
};