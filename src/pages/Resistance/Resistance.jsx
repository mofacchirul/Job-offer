import React from 'react';
// import Lottie from 'react-lottie';
import resistancce from '../../lottie/Animation - 1734938310590.json'
import Lottie from 'lottie-react';
import { useContext } from 'react';
import { AuthContexts } from '../../AuthContext/AuthContext';
import Google from '../../Firebase/Google';

const Resistance = () => {

const {createResistance}=useContext(AuthContexts);

const Handleresistance=(event)=>{
    event.preventDefault()
    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;
    const users = {name,email,password,photo}
    console.log(users);
    createResistance(email,password)
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
       <Lottie animationData={resistancce}></Lottie>
       </div>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl font-bold ">Resistance now!</h1>
            <form className="card-body" onSubmit={Handleresistance}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="photo" name='photo' placeholder="Photo" className="input input-bordered" required />
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-block btn-primary text-white text-2xl font-bold">Resistance</button>
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

export default Resistance;