import React from 'react';
import { toast } from 'react-toastify';

const ConfirmationModal = ({deletePart,refetch,setDeletePart}) => {
    const handleDelete = id => {
        const url = `https://bike-bones.onrender.com/parts/${id}`;
        fetch(url, {
          method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {  
            console.log(data);
            if(data.deletedCount){
                toast.success("Item Deleted");
                setDeletePart(null);
                refetch();
            }

          })
      }
    
    return (
        <div>
            
            <input type="checkbox" id="confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to delete {deletePart.name} ?</h3>
                    <p class="py-4">You won't be able to revert this !</p>
                    <div class="modal-action">
                    <button onClick={()=>handleDelete(deletePart._id)} class="btn btn-xs btn-error">Delete</button>
                        <label for="confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;