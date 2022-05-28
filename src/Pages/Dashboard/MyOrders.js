import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import MyOrder from './MyOrder';
import ModalOfConfirm from './ModalOfConfirm';


const MyOrders = () => {
//     const [user, loading, error] = useAuthState(auth);
//     const [orders,setOrders]=useState([]);
//     useEffect(()=>{
//         if(user){
//             fetch(`https://desolate-stream-53633.herokuapp.com/purchase?email=${user.email}`,{
//                 method: 'GET',
//                 headers: {
//                     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
//                 }
//             })
//             .then(res => {
//                 console.log('res', res);
//                 if (res.status === 401 || res.status === 403) {
//                     signOut(auth);
//                     localStorage.removeItem('accessToken');
//                     Navigate('/');
//                 }
//                 return res.json()
//             })
//             .then(data => {

//                 setOrders(data);
//             });
//     }
// }, [user])


    // const proceed = Swal.fire({
    //     title: 'Are you sure to Cancel?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    // })
    // if (proceed) {


const [deleteOrder,setDeleteOrder]=useState(null)
const [user, loading, error] = useAuthState(auth);
const { data: Morders, isLoading, refetch } = useQuery('parts', () => fetch(`https://desolate-stream-53633.herokuapp.com/purchase?email=${user.email}`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));

  if (isLoading) {
    return <Loading></Loading>
  }

    return (
        <div className='text-center lg:text-left'>
            <h2 className='text-center text-3xl font-bold mt-6 mb-3'>My Orders:{Morders.length}</h2>
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
                            <th>Remove Item</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Morders.map((order,index)=>
                            <MyOrder             
                            key={order.key}
                            order={order}
                            index={index}
                            setDeleteOrder={setDeleteOrder}     
                            >
                            </MyOrder>
                            )
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteOrder && <ModalOfConfirm
                deleteOrder={deleteOrder}
                refetch={refetch}
                setDeleteOrder={setDeleteOrder} 
                >

                </ModalOfConfirm>
            }
        </div>
    );
};

export default MyOrders;