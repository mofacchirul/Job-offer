import Lottie from 'lottie-react';
import React, { useContext } from 'react'
import singin from '../../lottie/singin.json'
import { AuthContexts } from '../../AuthContext/AuthContext';
import Google from '../../Firebase/Google';
const SIngIn = () => {
const {createsing}=useContext(AuthContexts);
const HandleSIngIn =(event)=>{
    event.preventDefault()
    const password = event.target.password.value;
    const email = event.target.email.value;
    const users= {password,email}

    createsing(password,email)
    .then(result=>{
        console.log(result.user);
        
    })
    .then(error=>{
        console.log(error);
        
    })

}




    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col gap-5  lg:flex-row-reverse">
          <div className="text-center lg:text-left  ">
       <div className='w-96 h-96 rounded-xl '>
          <Lottie animationData={singin}></Lottie>    
       </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <form className="card-body" onSubmit={HandleSIngIn}>
            
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                
              </div>
              
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-block btn-primary text-white text-2xl font-bold">Loging</button>
              </div>
            </form>
            <div className='py-4'>
               <Google></Google>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SIngIn;