import React from 'react';
import { Link } from 'react-router-dom';

const Order = ({order,index,handleDelete,setDeleteordert}) => {
    console.log(4);
    return (
            <tr>
                <th>{index + 1}</th>
                <th>{order.name}</th>
                <td>{order.pname}</td>
                <td>{order.quantity}</td>
                <td>{order.transactionId}</td>
                <td>
                    {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} ><button className='btn btn-xs btn-success'>Pay</button></Link>}
                    {(order.price && order.paid) && <span className='text-success'>Paid</span>}

                </td>
                <td>
                    <td>
                        {(order.price && !order.paid) &&  <label onClick={()=> setDeleteordert(order)} for="confirm-modal2" class="btn btn-xs btn-error">Cancel</label>}
                        {(order.price && order.paid) && <span className='text-success'></span>}

                    </td>
                </td>
            </tr>

    );
};

export default Order;