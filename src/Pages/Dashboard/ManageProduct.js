import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ConfirmationModal from './ConfirmationModal';
import Product from './Product';
const Swal = require('sweetalert2')
const ManageProduct = () => {
  const [deletePart, setDeletePart] = useState(null);

  const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://desolate-stream-53633.herokuapp.com/parts', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));

  if (isLoading) {
    return <Loading></Loading>
  }


  return (
    <div>
      <h2 className='text-2xl text-bold'>Total Number of Parts:{parts.length}</h2>
      <div className='text-center lg:text-left'>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Parts Name</th>
                <th>Available Quantity</th>
                <th>Price(per item)</th>
                <th>Remove</th>

              </tr>
            </thead>
            <tbody>
              {
                parts.map((part, index) =>
                  <Product
                    key={part._id}
                    part={part}
                    index={index}
                    setDeletePart={setDeletePart}
                  >
                  </Product>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
      {deletePart && <ConfirmationModal
        deletePart={deletePart}
        refetch={refetch}
        setDeletePart={setDeletePart}
        ></ConfirmationModal>}
    </div>
  );
};

export default ManageProduct;