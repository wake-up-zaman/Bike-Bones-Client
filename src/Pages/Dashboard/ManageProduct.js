import React, { useEffect, useState } from 'react';
import Product from './Product';
const Swal = require('sweetalert2')
const ManageProduct = () => {
  const [parts, setParts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/parts')
      .then(res => res.json())
      .then(data => setParts(data));
  }, [])

  const handleDelete = id => {
    const proceed=Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    if(proceed){
    const url = `http://localhost:5000/parts/${id}`;
    fetch(url, {
      method: 'DELETE'
    })
      .then((result) => {   
        // if (result) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your file has been deleted.',
        //     'success'
        //   )
        // }   
        const remaining = parts.filter(part => part._id !== id);
        setParts(remaining);

      })
  }
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
                    handleDelete={handleDelete}
                  >
                  </Product>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;