import React from 'react';

const Product = ({part,index,handleDelete,setDeletePart}) => {
    return (
        <tr>
            <th>{index+1}</th>
            <td>{part.name}</td>
            <td>{part.available_product}</td>
            <td>{part.price}</td>
            <td>
                <label onClick={()=> setDeletePart(part)} for="confirm-modal" class="btn btn-xs btn-error">Delete</label>
                
            </td>
        </tr>
    );
};

export default Product;