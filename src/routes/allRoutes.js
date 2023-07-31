import { Navigate } from 'react-router-dom';
import UserPage from '../page/User';
import LoginPage from '../page/Login';

const authProtectedRoutes = [
    { path: '/users', component: UserPage },
    {
        path: '/',
        exact: true,
        component: () => <Navigate to="/users" />,
    },
];

const publicRoutes = [{ path: '/login', component: LoginPage }];

export { authProtectedRoutes, publicRoutes };
