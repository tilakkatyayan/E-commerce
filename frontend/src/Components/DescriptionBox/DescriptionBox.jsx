import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
    return (
        <div className='descriptionBox'>
            <div className='descriptionBox-navigator'>
                <div className='descriptionBox-nav-box'>Description</div>
                <div className='descriptionBox-nav-box fade'>Reviews (122)</div>
            </div>

            <div className='descriptionBox-description'>
                <p>
                    An e-commerce website is an online platform that facilitates
                    the buying and selling of products or services over the
                    internet. It serves as a virtual marketplace where
                    businesses and individuals can showcase their products,
                    interact with customers, and conduct transactions without
                    the need for a physical presence. E-commerce websites have
                    gained immense popularity due to their convenience,
                    accessibility, and the global reach they offer.
                </p>

                <p>
                    E-commerce website typically display products services along
                    with detailed descriptions, images, prices, and any
                    available variations (e.g. colors). Each product usually has
                    its own dedicated page with relevant information.
                </p>
            </div>
        </div>
    );
};

export default DescriptionBox;