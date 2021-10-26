import { FunctionComponent, ReactNode } from "react";
import { Route, RouteComponentProps } from 'react-router-dom';
import Index from '../pages/app/Index';

const AppRoutes : FunctionComponent = () => {
    return (
        <>
            <Route
                path="/app"
                render={({ match: { url } } : RouteComponentProps) : ReactNode => (
                    <>
                        <Route path={`${url}/`} component={Index} />
                    </>
                )}
            />
        </>
    )
}

export default AppRoutes;