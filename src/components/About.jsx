import React from 'react';

export default function About() {
    
return (
        <section id="aboutPage" className="p-4 d-flex justify-content-center align-items-center text-white flex-column">
            <div className='text-center mb-5'>
            <h2 className="fs-1 fw-bolder mb-3">ABOUT COMPONENT</h2>
            <i className='fa-solid fa-star'></i>
            </div>
            
            <div className='container'>
                <div className="row px-5 d-flex justify-content-between text-center">
                    <div className="col-md-6">
                        <p className="mt-2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p className="mt-2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

