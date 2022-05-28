import React from 'react';

const ManageOrder = ({order,index,setDeleteOrder}) => {
    return (
        <tr>
        <th>{index + 1}</th>
        <th>{order.name}</th>
        <td>{order.pname}</td>
        <td>{order.quantity}</td>
        <td>{order.transactionId}</td>
        <td>
            {(order.price && !order.paid) && <span className='text-success'>UnPaid</span>}
            {(order.price && order.paid) && <span className='text-success'>Paid</span>}

        </td>
        <td>
            <td>

                {(order.price && order.paid) && <label  for="my-modal-6" class="btn btn-xs btn-error modal-button">Pending !</label>}

            </td>

        </td>
        <td>
        {(order.price && !order.paid) && <label onClick={()=>setDeleteOrder(order)} for="my-modal-6" class="btn btn-xs modal-button">Delete</label>}  
            </td>
    </tr>
    );
};

export default ManageOrder;