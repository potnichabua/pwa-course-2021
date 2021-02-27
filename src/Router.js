/** import Router components เข้ามาเพื่อใช้งาน */
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <App />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router; /* ส่งออก Router ไปใช้งาน */