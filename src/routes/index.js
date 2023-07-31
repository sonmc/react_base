import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Layouts
//routes
import { authProtectedRoutes, publicRoutes } from './allRoutes';
import { AuthProtected, AccessRoute } from './AuthProtected';
import NonAuthLayout from '../components/layout/NonAuthLayout';
import VerticalLayout from '../components/layout/VerticalLayouts/Index';

const Index = () => {
    const availablePublicRoutesPaths = publicRoutes.map((r) => r.path);
    const availableAuthRoutesPath = authProtectedRoutes.map((r) => r.path);
    return (
        <React.Fragment>
            <Routes>
                <Route path={availablePublicRoutesPaths}>
                    <NonAuthLayout>
                        <Routes>
                            {publicRoutes.map((route, idx) => (
                                <Route path={route.path} component={route.component} key={idx} exact={true} />
                            ))}
                        </Routes>
                    </NonAuthLayout>
                </Route>
                <VerticalLayout>
                    <Route path={availableAuthRoutesPath}>
                        <AuthProtected>
                            <Routes>
                                {authProtectedRoutes.map((route, idx) => (
                                    <AccessRoute path={route.path} component={route.component} key={idx} exact={true} />
                                ))}
                            </Routes>
                        </AuthProtected>
                    </Route>
                </VerticalLayout>
            </Routes>
        </React.Fragment>
    );
};

export default Index;
