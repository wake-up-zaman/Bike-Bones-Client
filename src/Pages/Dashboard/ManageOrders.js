import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import ConfirmationThree from './ConfirmationThree';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null)
    const [user, loading, error] = useAuthState(auth);
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch('https://bike-bones.onrender.com/purchaseForAll', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    
    // const [parts, setParts] = useState([]);
    // useEffect(() => {
    //     fetch('https://desolate-stream-53633.herokuapp.com/purchaseForAll')
    //         .then(res => res.json())
    //         .then(data => setParts(data));
    // }, [])

    return (
        <div className='text-center lg:text-left'>
        <h2 className='text-center text-3xl font-bold mt-6 mb-3'>All Users Orders:{parts.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Parts</th>
                        <th>Quantity</th>
                        <th>Transaction Id</th>
                        <th>Payment Status</th>
                        <th>Update Status</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        parts.map((order, index) =>
                            <ManageOrder
                                key={order.key}
                                order={order}
                                index={index}
                                setDeleteOrder={setDeleteOrder}
                            >
                            </ManageOrder>
                        )
                    }
                </tbody>
            </table>
        </div>
        {
                deleteOrder && <ConfirmationThree
                    deleteOrder={deleteOrder}
                    refetch={refetch}
                    setDeleteOrder={setDeleteOrder}
                >

                </ConfirmationThree>
            }
        </div>
    );
};

export default ManageOrders;