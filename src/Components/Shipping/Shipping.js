import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const { user } = useAuth()

    return (
        <div>
            <form className='shipping-from' onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} placeholder='name' {...register("name")} />
                <input defaultValue={user?.email} placeholder='email' {...register("email", { required: true })} />
                <input defaultValue="" placeholder='address' {...register("address")} />
                <input defaultValue="" placeholder='city' {...register("city")} />
                <input defaultValue="" placeholder='phone' {...register("phone")} />
                {errors.email && <span className='error'>This field is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;