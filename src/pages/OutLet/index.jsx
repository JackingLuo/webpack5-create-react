import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { Button } from 'antd';

const Detail = () => {
    const navigate = useNavigate();

    const handleClick = (str) => {
        navigate(str);
    };

    return (
        <div>
            <Button onClick={() => handleClick('/outlet/tabA')}>A</Button>
            <br />
            <Button onClick={() => handleClick('/outlet/tabB')}>B</Button>
            <Outlet />
        </div>
    );
};

export default Detail;
