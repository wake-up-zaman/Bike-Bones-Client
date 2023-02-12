import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({order,index,setDeleteOrder}) => {
    return (

            <tr>
                <th>{index + 1}</th>
                <th>{order?.name}</th>
                <td>{order?.pname}</td>
                <td>{order?.quantity}</td>
                {/* <td>{order?.transactionId}</td> */}
                <td>
                    {/* {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} ><button className='btn btn-xs btn-success'>Pay</button></Link>}
                    {(order.price && order.paid) && <span className='text-success'>Paid</span>} */}
            {(order.price && order.paid) && <span className='text-success'>Paid</span>}
            {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} ><button className='btn btn-xs btn-success'>Pay</button></Link>}

                </td>
                <td>
                    <td>
                        {(order.price && !order.paid) && <label onClick={()=>setDeleteOrder(order)} for="my-modal-6" class="btn btn-xs btn-error modal-button">Remove</label>}

                    </td>
                    <td>
                    {/* <label onClick={()=>setDeleteOrder(order)} for="my-modal-6" class="btn btn-xs modal-button">Cancel</label> */}
                    </td>
                </td>
            </tr>

    );
};

export default MyOrder;