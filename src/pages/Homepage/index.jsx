import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {

    const handleClick = () => { };

    return (
        <div>
            <div onClick={handleClick}>HomePage</div>
            <Link to="/detail/123" >详情</Link>
        </div>
    );
};

export default HomePage;
