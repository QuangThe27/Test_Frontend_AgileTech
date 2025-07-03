/**
 * isShowHeader, isShowFooter => true = hiển thị Header, false = không hiển thị Header
 */

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

export const generalRoutes = [
    {
        path: '/',
        page: Home,
        isShowHeader: true,
        isShowFooter: true,
    },
    {
        path: '/login',
        page: Login,
        isShowHeader: false,
        isShowFooter: false,
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
