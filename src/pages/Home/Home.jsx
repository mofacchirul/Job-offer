import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';

const Home = () => {
    return (
        <div>
         <Helmet>
        <title>Job Offer | Home</title>       
      </Helmet>

<Banner></Banner>

        </div>
    );
};


export default Home;