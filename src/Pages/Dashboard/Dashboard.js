import React from 'react';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {


    return (
        <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content ">
            <label for="dashboard-sidebar" class="btn btn-primary drawer-button lg:hidden ml-40">Open</label>
            <Outlet > </Outlet>
        </div>
        <div class="drawer-side">
            <label for="dashboard-sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                <li><Link to='/dashboard'>My Orders</Link></li>
                <li><Link to='/dashboard/AddReview'>Add Review</Link></li>
                <li><Link to='/dashboard/myProfile'>My Profile</Link></li>
                <li><Link to='/dashboard/makeAdmin'>Make Admin</Link></li>
                <li><Link to='/dashboard/addProduct'>Add Product</Link></li>
                <li><Link to='/dashboard/manageProduct'>Manage Product</Link></li>
                <li><Link to='/dashboard/manageAllProduct'>Manage All Products</Link></li>
            </ul>
        </div>
    </div>
        // <div class="drawer drawer-mobile">
        //     <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        //     <div class="drawer-content ">
        //         <div className='flex justify-between'>
        //             <h2 className='text-3xl font-bold text-indigo-400'>Dashboard</h2>
        //             <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Dashboard</label>
        //         </div>
        //         <Outlet></Outlet>
        //     </div>
        //     <div class="drawer-side">
        //         <label for="my-drawer-2" class="drawer-overlay"></label>
        //         <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        //             <li><Link to='dashboard/myOrder'>My Orders</Link></li>
        //             <li><Link to='dashboard/addReview'>Add Review</Link></li>
        //             <li><Link to='dashboard/myProfile'>My Profile</Link></li>
        //         </ul>

        //     </div>
        // </div>
    );
};

export default Dashboard;