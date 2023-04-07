import React from 'react';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const Detail = () => {

    // const params = useParams();
    // const locations = useLocation();
    // const navigate = useNavigate();

    const handleClick = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('/success', { params: 111 });
        xhr.setRequestHeader({ contentType: 'application/json' });
        xhr.onload = function (data) {
            // 请求结束后，在此处写处理代码

            console.log('%c [ data ]-18', 'font-size:13px; background:pink; color:#bf2c9f;', data);
        };
    };

    return (
        <div>
            <Button type="primary" onClick={handleClick}>Detail</Button>
        </div>
    );
};

export default Detail;
