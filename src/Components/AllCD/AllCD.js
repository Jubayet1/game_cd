import React, { useState, useEffect } from 'react';
import SingleCD from '../SingleCD/SingleCD';

const AllCD = () => {
    const [cds, setCds] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setCds(data))
    }, []);
    return (
        <div className="grid grid-cols-3 gap-4">
            {cds.map(cd => <SingleCD 
                key={cd.id}
                stars={cd.stars}
                name={cd.name}
                price={cd.price}
                image={cd.img}
            />)}
        </div>
    );
};

export default AllCD;