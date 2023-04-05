import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Detail from './pages/Detail';
import OutLet from 'Src/pages/OutLet';
import TabA from 'Src/pages/OutLet/components/tabA';
import TabB from 'Src/pages/OutLet/components/tabB';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([{
    path: '/',
    element: <Homepage />
}, {
    path: '/detail/:id',
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
]);

export default router;