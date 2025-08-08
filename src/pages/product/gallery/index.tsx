import React from 'react'
import productGallery from "../../../assets/productGallery.png";

const ProductGallery = () => {
    return (
        <div className='flex gap-5'>
            <div>
                <img src={productGallery} alt="" />
            </div>
            <div>
                <img src={productGallery} alt="" />
            </div>
            <div>
                <img src={productGallery} alt="" />
            </div>
        </div>
    )
}

export default React.memo(ProductGallery)