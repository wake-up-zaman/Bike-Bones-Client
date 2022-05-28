import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const {data: users,isLoading,refetch}=useQuery('users',()=> fetch('https://desolate-stream-53633.herokuapp.com/user',{
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    
    if(isLoading){
        return <Loading></Loading>
    }
    const makeAdmin=()=>{
        fetch(`https://desolate-stream-53633.herokuapp.com/user/admin/${users.email}`,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            }
        })
        .then(res=>res.json)

        .then(data=>{
            console.log(data);
        })
    }
    
    return (
        <div>
            <h2 className='text-2xl text-bold'>Total Number of Users:{users.length}</h2>
            <div className='text-center lg:text-left'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                    {
                            users.map((user,index) =>
                                <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                                >
                                </UserRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    );
};

export default MakeAdmin;