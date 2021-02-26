import React from 'react';
import Preloader from "../components/common/Preloader/Preloader";

const LazySuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader />}>
            <Component {...props} />
        </React.Suspense>
    }
};

export default LazySuspense;