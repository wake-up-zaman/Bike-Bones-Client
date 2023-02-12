import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Purchase.css'
const Purchase = () =>{
    const { _id } = useParams();
    const [part, setPart] = useState({});
    const {name,Img,price}=part;
    const [user, loading, error] = useAuthState(auth);
    const [Number,setNumber]=useState('');
    const [Name,setName]=useState('');
    const [Phone,setPhone]=useState('');
    const [Address,setAddress]=useState('');
    const [Email,setEmail]=useState('');

    useEffect(() => {
        const url = `https://bike-bones.onrender.com/part/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))

    }, [])

    const handleProfile = event => {
        event.preventDefault();
        setNumber('');
        setName('');
        setPhone('');
        setAddress('');
        setEmail('');
        const purchase = {
            id: _id,
            pname: name,
            price:price,
            img:Img,
            email: user.email,
            name: user.displayName,
            quantity:event.target.quantity.value,
            phone: event.target.phone.value,
            address:event.target.address.value
        }
        

        fetch('https://bike-bones.onrender.com/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(result => {
                if(result){
                    toast.success("Purchase Successful !");

                }
                else{
                    toast.error("Purchase not Successful !");
                }               
            });
}

        
    return (
        <div className='flex flex-col lg:flex-row mb-8'>
            <div className='detail'>
                <div className='flex flex-col lg:flex-row mb-8'>
                    <div><img src={part.Img} alt='' class="max-w-sm  shadow-2xl imgp border-2 rounded-lg" /></div>
                    <div className='kkl'>
                        <h1 class="text-5xl font-bold mb-2 text-center">{part.name}</h1>
                        <h3 class="text-2xl font-bold mb-2 text-pink-600 text-center">Price:{part.price} (per item)</h3>
                        <h3 class="text-2xl font-bold  text-center">Available Item: {part.available_product}</h3>
                        <h4 class="text-2xl font-bold mb-2 text-center">Minimum Quantity:{part.minimum_order}</h4>
                    </div>
                </div>
                <h3 class="text-2xl font-bold text-center">OverView:</h3>
                <p class='text-center'>{part.overview}</p>
                <h3 class="text-2xl font-bold text-center">Specifications:</h3>
                <p class="mt-2 text-center">{part.description1}</p>
                <p class="text-center">{part.description2}</p>
                <p class="text-center">{part.description3}</p>
                <p class="mb-3 text-center">{part.description4}</p>


            </div>
            <div className='shop'>
                <h2 className='text-center text-3xl text-bold'>Add to Cart</h2>
                <form onSubmit={handleProfile} className='mt-3 form'>
                <label className="label">
                    <span className="label-text">Parts Quantity</span>
                </label>
                    <input 
                    className='mb-3 border-2 rounded-lg input-quantity h-12' 
                    type='number' 
                    name='quantity' 
                    placeholder='Parts Quantity' 
                    required
                    onChange={event => setNumber(event.target.value)}
                    value={Number} />
                    <label className="label">
                    <span className="label-text">Name</span>
                </label>
                    <input 
                    type="text" 
                    name="name"  
                    disabled 
                    value={user?.displayName || ''} 
                    className="input input-bordered w-full max-w-xs mb-2"
                    
                    />
                    <label className="label">
                    <span className="label-text">Email</span>
                </label>
                    <input 
                    type="email" 
                    name="email" 
                    disabled value={user?.email || ''} 
                    className="input input-bordered w-full max-w-xs  mb-2"
                     />
                    <label className="label">
                    <span className="label-text">Phone</span>
                </label>
                    <input 
                    type="text" 
                    name="phone" 
                    placeholder="Phone Number" 
                    className="input input-bordered w-full max-w-xs  mb-2"
                    onChange={event => setPhone(event.target.value)}
                    value={Phone} />
                    <label className="label">
                    <span className="label-text">Address</span>
                </label>
                    <input 
                    type="text" 
                    name="address" 
                    placeholder="Address" 
                    className="input input-bordered w-full max-w-xs  mb-2"
                    onChange={event => setAddress(event.target.value)}
                    value={Address} />
                    <input type="submit" value="Purchase" className="btn btn-secondary w-full max-w-xs" />
                </form>
            </div>
            <ToastContainer />
        </div>



    );
};

export default Purchase;