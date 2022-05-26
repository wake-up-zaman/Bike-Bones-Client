import React from 'react';

const Product = ({part,index,handleDelete}) => {
    return (
        <tr>
            <th>{index+1}</th>
            <td>{part.name}</td>
            <td>{part.available_product}</td>
            <td>{part.price}</td>
            <td><button onClick={()=>handleDelete(part._id)} class="btn btn-xs">Delete</button></td>
        </tr>
    );
};

export default Product;