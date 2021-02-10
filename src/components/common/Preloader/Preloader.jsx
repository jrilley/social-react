import React, { useState, useEffect } from 'react';
import RingLoader from "react-spinners/RingLoader";
import s from './preloader.module.css'

let Preloader = (props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        // }, 8000);
    }, []);
    return ( <div className={s.preloader}>
        {(loading) ? <RingLoader color={'#0DC758'} loading={loading} size={150} /> : null}
    </div>);
};

export default Preloader;