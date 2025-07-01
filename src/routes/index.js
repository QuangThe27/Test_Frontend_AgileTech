/**
 * isShowHeader => true = hiển thị Header, false = không hiển thị Header
 */

import Home from '../pages/Home/Home';

export const generalRoutes = [
    {
        path: '/',
        page: Home,
        isShowHeader: true,
    },
];

export const manageRoutes = [];

// Routes tổng
export const routes = [
    ...generalRoutes,
    ...manageRoutes,
    {
        path: '*',
        // page: NotFoundPage,
        isShowHeader: false,
    },
];
