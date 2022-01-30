import React from 'react';
import Header from '../../components/Header/Header';
import Style from './Home.module.scss';
const Home = () => {
    return (
        <div>
            <Header/>
            <div className={Style.HomeContent}>
                This is Home
            </div>
        </div>
    );
};

export default Home;