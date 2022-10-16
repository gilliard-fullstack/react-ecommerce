import React, { useState } from 'react'
import { Heading } from '../../common/Heading'
import { ProductItem } from '../product/ProductItem'
import { topProducts } from '../../assets/data/data'

export const TopProduct = () => {

    const [data, setdata] = useState(topProducts)
    const allCategories = ["all", ... new Set(data.map((item) => item.category))]
    const [category, setcategory] = useState(allCategories)

    const handleFilter = (category) => {
        const newItem = topProducts.filter((item) => item.category === category)
        setdata(newItem)

        if(category === 'all') {
            setdata(topProducts)
            return
        }
    }

    return (
        <>
            <section className='topproduct'>
                <div className='container'>
                    <div className='head'>
                        <Heading title='Top Selling Products' desc='Neet our newbies! The latest templates uploaded to the marketplace.' />
                        <div className='category'>
                            {
                                category.map((category) => (
                                    <button className='button' onClick={() => handleFilter(category)}>{ category }</button>
                                ))
                            }
                        </div>
                    </div>
                    <ProductItem data={ data } />
                </div>
            </section>
        </>
    )
}