import React from 'react';
import Header from '../../components/Header/Header';
import Style from './Home.module.scss';
import TicketListing from '../../components/TicketListing/TicketListing';
const Home = () => {
    return (
        <div>
            <Header/>
            <div className={Style.HomeContent}>
                <div className={Style.TableContainer}>
                    <TicketListing/>
                </div>
            </div>
        </div>
    );
};

export default Home;