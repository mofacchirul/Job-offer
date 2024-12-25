import React from 'react';
import team1 from '../../assets/team-1.jpg';
import team2 from '../../assets/team-2.jpg';
import { motion } from 'motion/react';
import { easeOut } from 'motion';
const Banner = () => {
    return (
        
        <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className='flex-1 space-y-4  gap-5'>
         <motion.img
         animate={{y:[50,100,50]}}
         transition={{duration: 5.3,repeat:Infinity}}
            src={team1}
            className="max-w-sm h-60 w-96 rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-400 rounded-lg shadow-2xl" />
             <motion.img
              animate={{x:[100,150,100]}}
              transition={{duration: 5.3,repeat:Infinity}}
            src={team2}
            className="max-w-sm h-60 w-96 rounded-t-3xl rounded-br-3xl border-b-4 border-l-4 border-blue-400 rounded-lg shadow-2xl" />
         </div>
          <div className='flex-1'>
            <motion.h1         
            animate={{x:[0,50,0],color:['#b933ff','#683c98','#3c985c']}}
            transition={{duration:7.3,repeat:Infinity,ease:easeOut, delay:1}}
            className="text-5xl font-bold">
           
            Box Office News!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;