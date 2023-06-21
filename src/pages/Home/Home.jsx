import React from 'react';
import Start from "./Start/Start";
import Examples from "./Examples/Examples";

const Home = () => {
    return (
        <main className="home">
            <Start/>
            <Examples/>
        </main>
    );
};

export default Home;