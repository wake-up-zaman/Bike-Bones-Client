import React, { useEffect, useState } from 'react';
import Part from '../Part/Part';


const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])
    return (
        <div className='my-16'>
            <div className='text-center '>
                <h3 className='text-accent text-3xl my-8 font-bold uppercase'>Motor Bike Parts</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8 '>
                {
                    parts.map(part => <Part
                        key={part.parts_id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;