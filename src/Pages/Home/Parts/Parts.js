import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Loading2 from '../../Shared/Loading/Loading2';
import Part from '../Part/Part';
import '../Part/Part.css'


const Parts = () => {
    // const [parts, setParts] = useState([]);
    // useEffect(() => {
    //     fetch('https://bike-bones.onrender.com/parts')
    //         .then(res => res.json())
    //         .then(data => setParts(data));
    // }, [])


    const {
        data: parts,
        isLoading,
        refetch,
      } = useQuery("parts", () =>
        fetch(`https://bike-bones.onrender.com/parts`).then((res) =>
          res.json()
        )
      );
    
      if (isLoading) {
        return <Loading2></Loading2>;
      }

    return (
        <div className='parts_main'>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mr-24 lg:ml-24 gap-24'>
                {
                    parts.slice(0,6).map(part => <Part
                        key={part.parts_id}
                        part={part}
                    ></Part>)
                }

            </div>
        </div>
    );
};

export default Parts;