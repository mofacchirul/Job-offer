import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContexts } from "../../AuthContext/AuthContext";
import logo from '../../assets/icons8-job-offer-96.png'

const Navber = () => {
    const links = 
    <>
     <li><NavLink to="/" >HOME</NavLink></li>
     <li><NavLink>HOME</NavLink></li>
     <li><NavLink>HOME</NavLink></li>
     
     
      
      </>
const {users,singout}= useContext(AuthContexts);

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {
        links
       }
      </ul>
    </div>
   <div className="flex items-center  gap-5">
   <img src={logo} className="w-16 h-16" alt="" />
   <a className=" text-3xl font-bold text-blue-500">JOB OFFER</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {
        links
     }
    </ul>
  </div>
  <div className="navbar-end gap-3">
    {
      users ?  <button className="btn" onClick={singout}>Login Out</button>  : <>
       <Link to="/resistance" ><button className="underline">Resistance</button></Link>
       <Link to="/singIn"> <button className="btn">Login</button></Link>
      </>
    }
   
  </div>
</div>
    );
};

export default Navber;