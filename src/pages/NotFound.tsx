import React, { FC } from 'react';

interface Iprops {
    errstr: string
}

const NotFound: FC<Iprops> = ({ errstr }) => {

    console.log('%c [ errstr ]-9', 'font-size:13px; background:pink; color:#bf2c9f;', errstr);
    return <>404</>;
};

export default NotFound;