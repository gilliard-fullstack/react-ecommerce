import React from 'react';

import { Banner } from './banner/Banner';
import { Hero } from './hero/Hero';
import { Card } from './hero/Card';
import { Product } from './product/Product';
import { TopProduct } from './topproduct/TopProduct';
import { Testimonial } from './testimonial/Testimonial';
import { Price } from './price/Price';
import { Blog } from './blog/Blog';

export const Home = () => {
    return (
        <>
            <Hero />
            <Card />
            <Product />
            <Banner />
            <TopProduct />
            <Price />
            <Testimonial />
            <Blog />
        </>
    )
}