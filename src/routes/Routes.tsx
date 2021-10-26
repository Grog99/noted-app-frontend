import { FunctionComponent } from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "../pages/Home";
import AppRoutes from "./App.routes";

const Routing : FunctionComponent = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home}/>
                <AppRoutes />
            </Switch>
        </>
    )
}

export default Routing;