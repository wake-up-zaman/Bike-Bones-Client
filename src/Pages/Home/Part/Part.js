import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Part.css';
const Part = ({ part }) => {
    const{_id}=part;
    const navigate=useNavigate();
    const navigateToPurchase=_id=>{
        navigate(`/part/${_id}`)
    }
    return (
        <div className="card part shadow-xl">
            <div className="">
                <figure><img className="h-72 w-full" src={part.Img} alt="" /></figure>
                <h2 className="text-primary text-2xl font-bold uppercase text-center">{part.name}</h2>


                <div className="h-18 sm:mb-1.5">
                   <p className="text-center">{part.description1},</p>
                    <p className="text-center">{part.description2},</p>
                    <p className="text-center">{part.description3}.</p>
                </div>
                <div className="flex text-xl  justify-between ml-3 mr-3 my-5">
                    <p className="order text-primary">Min Order:{part.minimum_order}</p>
                    <p className="order text-accent ">Available:{part.available_product}</p>
                </div>
                <p className="text-center  font-bold  text-2xl ">Price:${part.price}</p>


            </div>

            <input onClick={()=>navigateToPurchase(_id)} type="submit" value="Buy Now" className="btn btn-primary text-white mt-5  mb-8" />

        </div>
    );
};

export default Part;