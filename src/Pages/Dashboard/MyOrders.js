import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/purchase?email=${user.email}`,{
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    Navigate('/');
                }
                return res.json()
            })
            .then(data => {

                setOrders(data);
            });
    }
}, [user])
    return (
        <div className='text-center lg:text-left'>
            <h2 className='text-center text-3xl font-bold mt-6 mb-3'>My Orders:{orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Parts</th>
                            <th>Quantity</th>
                            <th>Price(per item)</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order,index)=>
                            <tr>
                                <th>{index+1}</th>
                                <th>{order.name}</th>
                                <td>{order.pname}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;