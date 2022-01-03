import React from 'react';
import './Home.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Banner from './banner/Banner';
import Section2 from './Section2/Section2';
import Section4 from './Section3/Section4';
import Section6 from './Section6/Section6';

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Banner />
            <Section2 />
            <Section4 />
            <Section6 />
            <Footer />
        </div>
    )
}

export default Home;