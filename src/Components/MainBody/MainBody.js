import React from 'react';
import AllCD from '../AllCD/AllCD';

const MainBody = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <AllCD />
            </div>
            <div className="">CART SECTION</div>
        </div>
    );
};

export default MainBody;