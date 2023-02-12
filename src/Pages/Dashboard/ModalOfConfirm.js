import React from 'react';
import { toast } from 'react-toastify';

const ModalOfConfirm = ({deleteOrder, setDeleteOrder,refetch}) => {

    const handleDelete = id => {
        fetch(`https://bike-bones.onrender.com/purchase/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                // const remaining = orders.filter(order => order._id !== id);
                // setOrders(remaining);
                toast.success(`Mr ${deleteOrder.name} item remove successfully`)
                setDeleteOrder(null);
                refetch()
            })
        }
    return (
        <div>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure to delete {deleteOrder.pname}?</h3>
                    <p class="py-4">You will be able to revert this from Home page Again !</p>
                    <div class="modal-action">
                        <button onClick={()=>handleDelete(deleteOrder._id)}  className='btn btn-xs btn-error'>Delete</button>
                        <label for="my-modal-6" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalOfConfirm;