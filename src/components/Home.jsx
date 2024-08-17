import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer';
export default function Home(){
    return(
        <>
            
            <Navbar />
            
                <header className="py-5  d-flex justify-content-center align-items-center">
                    <div className='text-center'>
                        <img src='img1.svg'></img>
                        <h1>START FRAMEWORK</h1>
                        <p>Graphic Artist - Web Designer - Illustrator</p>
                    </div>
                </header>
            
            
        </>
    );
}