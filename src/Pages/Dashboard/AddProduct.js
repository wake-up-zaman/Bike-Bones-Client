import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './AddProduct.css';


const AddProduct = () => {
    
    const { register, formState: { errors }, handleSubmit,reset } = useForm();

    const imgageStorageKey='0a593b8286f6a88c93d6a44879b334c9';
    const onSubmit = async data => {
        const image=data.image[0];
        console.log(data);
        const formData = new FormData();
        formData.append('image', image);
        const url=`https://api.imgbb.com/1/upload?key=${imgageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const img = result.data.url;
                const part = {
                    name: data.name,
                    available_product: data.avail,
                    minimum_order: data.min,
                    Img: img,
                    description1:data.fet,
                    price:data.price,
                    overview:data.over
                }
                //send to my database
                fetch('http://localhost:5000/parts', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(part)
                })
                .then(res =>res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Parts added successfully')
                        reset();
                    }
                    else{
                        toast.error('Failed to add the Parts');
                    }
                })

            }
            
        })
    }

    return (
        <div>
            <div>
                <h2 className='text-3xl text-bold'>Add Products Here</h2>
            </div>
            <div className='addPro'>
            <h2 className='text-3xl text-center text-primary'>Add Parts</h2>
            <form className='ml-24'  onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text"> Parts Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Parts Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'name is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Available Parts</span>
                            </label>
                            <input
                                type="number"
                                placeholder=""
                                className="input input-bordered w-full max-w-xs"
                                {...register("avail", {
                                    required: {
                                        value: true,
                                        message: 'number of products is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.avail?.type === 'required' && <span className="label-text-alt text-red-500">{errors.avail.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Minimum Order</span>
                            </label>
                            <input
                                type="number"
                                placeholder=""
                                className="input input-bordered w-full max-w-xs"
                                {...register("min", {
                                    required: {
                                        value: true,
                                        message: 'minimum order is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.min?.type === 'required' && <span className="label-text-alt text-red-500">{errors.min.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Features</span>
                            </label>
                            <input
                                type="text"
                                placeholder="description"
                                className="input input-bordered w-full max-w-xs"
                                {...register("fet", {
                                    required: {
                                        value: true,
                                        message: 'description is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.fet?.type === 'required' && <span className="label-text-alt text-red-500">{errors.fet.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Overview</span>
                            </label>
                            <input
                                type="text"
                                placeholder="overview"
                                className="input input-bordered w-full max-w-xs"
                                {...register("over", {
                                    required: {
                                        value: true,
                                        message: 'overview is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.over?.type === 'required' && <span className="label-text-alt text-red-500">{errors.over.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'price is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                                
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                type="file"
                                placeholder="Price"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'image is required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                                
                            </label>
                        </div>

                        <input className='btn btn-primary text-white mt-5 ml-24 mb-8' type="submit" value='Add Item' />
                    </form>
        </div>
        </div>
        
    );
};

export default AddProduct;