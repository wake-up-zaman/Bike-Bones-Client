import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user]=useAuthState(auth);
    const [admin]=useAdmin(user);
    console.log(admin)

    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        
        <div class="drawer-content ">
            <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden ml-40">Open</label>
            <Outlet > </Outlet>
        </div>
        <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-white lg:bg-transparent text-base-content">
               { !admin &&  <li><Link to='/dashboard'></Link></li>}
               { !admin &&  <li><Link to='/dashboard/myOrders'>My Orders</Link></li>}
               { !admin && <li><Link to='/dashboard/AddReview'>Add Review</Link></li>}
                <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                { admin && <li><Link to='/dashboard/manageOrders'>Manage Orders</Link></li>}
                { admin && <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>}
                { admin && <li><Link to='/dashboard/addProduct'>Add Product</Link></li>}
                { admin &&  <li><Link to='/dashboard/manageProducts'>Manage Products</Link></li>}
            </ul>
        </div>
    </div>
    );
};

export default Dashboard;