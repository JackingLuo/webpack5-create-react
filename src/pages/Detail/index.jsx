import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Detail = () => {

    const params = useParams();
    const locations = useLocation();
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('%c [ params, locations]-8', 'font-size:13px; background:pink; color:#bf2c9f;', params, locations);
        navigate('/');
    };

    return (
        <div>
            <Button onClick={handleClick}>Detail</Button>
        </div>
    );
};

export default Detail;
