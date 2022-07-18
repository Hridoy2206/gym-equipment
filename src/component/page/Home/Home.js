import React from 'react';
import Banner from '../Banner/Banner';
import ConnectUs from '../ConnectUs/ConnectUs';
import ProductsItems from '../ProductItems/ProductsItems';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductsItems />
            <Service></Service>
            <ConnectUs></ConnectUs>
        </div>
    );
};

export default Home;