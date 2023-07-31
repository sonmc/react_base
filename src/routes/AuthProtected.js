import { Navigate, Route } from 'react-router-dom';

const AuthProtected = (props) => {
    let currentUser = localStorage.getItem('current-user');
    if (!currentUser?.id) {
        return <Navigate to={{ pathname: '/login', state: { from: props.location } }} />;
    }
    return <Navigate to={{ pathname: '/login', state: { from: props.location } }} />;
};

const AccessRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                return <Component {...props} />;
            }}
        />
    );
};

export { AuthProtected, AccessRoute };
