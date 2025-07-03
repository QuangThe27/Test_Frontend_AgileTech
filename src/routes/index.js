/**
 * isShowHeader, isShowFooter => true = hiển thị Header, false = không hiển thị Header
 */

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ManageProfile from '../pages/ManageProfile/ManageProfile';

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

export const manageRoutes = [
    {
        path: '/manage/profile',
        page: ManageProfile,
        isManageRoute: true,
    },
];

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
