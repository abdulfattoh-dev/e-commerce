import React from 'react'
import productVideo from "../../../assets/productVideo.png";

const ProductVideo = () => {
    return (
        <div>
            <img src={productVideo} alt="" />
        </div>
    )
}

export default React.memo(ProductVideo)