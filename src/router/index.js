import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthRoute from './auth';
import Homepage from 'Src/pages/Homepage';
import Detail from 'Src/pages/Detail';
import OutLet from 'Src/pages/OutLet';
import TabA from 'Src/pages/OutLet/components/tabA';
import TabB from 'Src/pages/OutLet/components/tabB';
import NotFound from 'Src/pages/NotFound';

const router = createBrowserRouter([{
    path: '/',
    element: <AuthRoute />,
    children: [
        {
            path: '',
            element: <Homepage />,
            handle: { title: '首页' }
        }, {
            path: '/detail/:id',
            handle: { title: '详情' },
            element: <Detail />,
        }, {
            path: '/outlet',
            element: <OutLet />,
            children: [{
                path: 'tabA',
                element: <TabA />
            }, {
                path: 'tabB',
                element: <TabB />
            }]
        }, {
            path: '*',
            element: <NotFound />,
        }
    ]
}, {
    path: '/login',
    element: <div>登陆</div>,
}]);

export default router;