import React from 'react';
import Start from "./Start/Start";
import Examples from "./Examples/Examples";
import CallOverlay from '../../components/CallOverlay';

const Home = () => {
    return (
        <main className="home">
            <CallOverlay/>
            <Start/>
            <Examples/>
        </main>
    );
};

export default Home;