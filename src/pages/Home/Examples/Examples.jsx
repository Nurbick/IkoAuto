import React from 'react';
import {useGetProductsQuery} from "../../../redux/reducers/products";

const Examples = () => {

    const {data = []} = useGetProductsQuery();


    return (
        <section className="examples">
            <div className="container">
                <h1 className="examples__title">
                    Электромобили в Липецке
                </h1>
                <div className="examples__content">
                    <div className="examples__product">
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Examples;