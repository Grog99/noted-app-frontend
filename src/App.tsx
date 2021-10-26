import './App.css';
import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes/Routes';
import { FunctionComponent } from 'react';

const App : FunctionComponent = () => {
    return (
        <>
            <Helmet>

            </Helmet>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </>
    );
}

export default App;
