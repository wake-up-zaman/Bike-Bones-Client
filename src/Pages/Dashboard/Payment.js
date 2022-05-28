import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3gyJLDZEIIquK1KUKYFHAFY2FsrK2IueqkPPebXK0sCf515AMMCw4X2tK379IS5j7FjexPujtEnr2cXmrfFVvd00Vzj2umDN');


const Payment = () => {
    const { id } = useParams();
    const url = `https://desolate-stream-53633.herokuapp.com/purchaseTt/${id}`;
    const { data: purchase, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div class="card max-w-md w-50 bg-base-100 border-2 rounded-lg">
                {/* <figure class="px-10 pt-10">
                    <img className='h-50 w-50' src={purchase.img} alt="Shoes" class="rounded-xl" />
                </figure> */}
                <div class="card-body">
                    <h2 class="text-2xl text-center font-bold">Pay For: {purchase.pname}</h2>
                    <p className='text-xl '>Price: ${purchase.price} <button class="btn btn-xs">per item</button></p>
                    <p className='text-xl '>Total Quantity: {purchase.quantity}</p>
                    <p className='text-2xl font-bold text-red-500'>Total Payment: ${(purchase.quantity)*(purchase.price)}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                        <CheckoutForm purchase={purchase} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;