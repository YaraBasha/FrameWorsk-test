import React from 'react';
import './Portfolio.css';
import img1 from '../assets/yara/img1.png';
import img2 from '../assets/yara/img2.png';
import img3 from '../assets/yara/img3.png';
export default function Porfolio() {

    const imgs = [img1 ,img2 ,img3 ,img1 ,img2 ,img3];
    return (
        <>
            <section
                id="portfolioPage"
                className="p-4 d-flex justify-content-center align-items-center flex-column"
            >
                <div className="text-center m-5">
                    <h2 className="fs-1 fw-bolder mt-5 pt-5 m-3">PORTFOLIO COMPONENT</h2>
                    <i className="fa-solid fa-star"></i>
                </div>


                <div className="container">
                    <div className="row px-5 text-center ">
            
                            {imgs.map((Image, index) => <div key={index} className="col-lg-4 col-md-6 mb-5">
                                <img className='w-100' src={Image} alt="" />
                            </div>)}

                            
                    </div>
                </div>
                
            </section>
        </>
    );
}